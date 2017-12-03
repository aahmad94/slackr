# Wookiee

[Wookiee Live][heroku]

[heroku]: http:/wookiee.herokuapp.com

Wookiee is a web application clone of Slack developed with Rails and React/Redux.

## Features & Implementation

### User Authentication

Wookiee allows users to sign in/sign out securely with the implementation of BCrypt to generate salted hash from the user password, as such users' passwords are not stored in the database. In addition uniquely signed session tokens are generated for each user, ensuring each session belongs to he correct user.

```ruby
class User < ApplicationRecord
  before_validation :ensure_session_token
  #...
  def reset_session_token!
    self.session_token = SecureRandom.urlsafe_base64
    self.save!
    self.session_token
  end

  def ensure_session_token
    self.session_token = SecureRandom.urlsafe_base64
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end
  #...
end
```

### Live Chat

Live chat requires a WebSocket connection to allow for an interactive communication between the user's browser and the server via a bidirectional binary protocol. Action Cable was introduced in Rails 5.1 as a means to integrate WebSocket connections; it's a fullstack implementation that involves a client-side JavaScript framework and a server-side Ruby framework.

The Wookiee React/Redux frontend is responsible for sending POST requests to the server at which point a messages controller is instantiated to handle and persist the message to the database as well as to send a JSON response back to the wookiee frontend to update the Redux state.

When a message is created, it's then broadcasted to the channel it belongs to; the model for messages is polymorphic as it may belong to either a channel or direct/group message.  

```javascript
  class Message < ApplicationRecord
    validates :body, presence: true
    after_commit { MessageRelayJob.perform_later(self, self.interface) }

    belongs_to :user

    belongs_to :interface,
      polymorphic: true
  end  
```

*Note:* there is only ever one channel WebSocket open which is less taxing on the server and frontend.

```Ruby
class ChannelChannel < ApplicationCable::Channel
  def subscribed
  stream_from "channel_#{params[:channel_name]}"
  end
end
```
```javascript
class MessageRelayJob < ApplicationJob
  def perform(message, interface)
    message = Api::MessagesController.render(
      partial: 'api/messages/message',
      locals: { message: message }
    )
    ActionCable.server.broadcast("channel_#{interface.channel_name}",
                                 message: JSON.parse(message))
  end
end
```

The client subscribes to a WebSockets channel when the frontend channel feed component is mounted via the setSocket action thunk creator:

```javascript
class ChannelFeed extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    };
  }

  //...

  componentWillMount() {
    const channelId = this.props.match.params.channelId;
    Promise.all([
      this.props.addSubscriberToChannel(channelId).then(
      () => this.props.fetchChannelUsers(channelId)),
      this.props.fetchChannelMessages(channelId),
      this.props.fetchChannels()
    ]).then(() => this.props.setSocket(
      this.props.channels[channelId].channel_name))
      .then(() => this.setState({loading: false}));
  }

  render () {
    if (!this.state.loading) {
      return (
        <div className='feed'>
          <h4 className='channel-title'>{`#${this.props.channels[this.props.match.params.channelId].channel_name}`.toLowerCase()}</h4>
          <div className='message-list'>
            <ul>
              {
                this.props.messages.map(
                  (message, idx) => {
                    if (this.props.match.params.channelId == message.interface_id) {
                      return (
                        <Message
                          key={message.id}
                          user={this.props.users[message.user_id]}
                          message={message}
                          />);
                    } else {
                      return null;
                    }
                  })
                }
            </ul>
          </div>
        </div>
        );
    } else {
      return (
        <div>
        Loading...
      </div>
      );
    }
  }
}

```

## Channels

Channels are live chat rooms available to all users that have signed up for Wookiee. A user may join and switch between channels by clicking on the respective channel name in the sidebar:

![channels](https://github.com/aahmad94/wookiee/blob/master/docs/wookies-channels.png)
