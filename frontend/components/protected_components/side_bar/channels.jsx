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
           <Link className="create-channel" to='/create_channel'>
             <p>create</p>
           </Link>
          {
            this.props.channels.map((channel) => {
              let channelSelector = "";
              if (this.props.history.location.pathname === `/messages/channels/${channel.id}/`) {
                channelSelector = "selected-channel";
              }

              return(
                <li className={channelSelector} key={channel.id}>
                  <Link
                    className="sb-channels-link"
                    to={`/messages/channels/${channel.id}/`}>
                    <p>{('# ' + channel.channel_name).toLowerCase()}</p>
                  </Link>
                </li>
              );
            })
          }
        </ul>
      </div>
    );
  }


}
