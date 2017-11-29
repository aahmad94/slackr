import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Channels extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchChannels();
  }

  render() {
    if (!this.props.channels) {
      return <p>No channels have been created yet</p>;
    }
     return (
       <div className="sb-channels">
         <p>Channels</p>
         <ul>
          {
            this.props.channels.map((channel) => (
              <li key={channel.id}>
                <Link
                  className="sb-channels-link"
                  to={`/messages/channels/${channel.id}/`}>
                  { '# ' + channel.channel_name}
                </Link>
              </li>
            ))
          }
        </ul>
      </div>
    );
  }


}
