import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

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
       <div>
         <h3>Channels</h3>
         <ul>
          {
            this.props.channels.map((channel) => (
              <li key={channel.id}>
                <NavLink to={`messages/channels/${channel.id}/`}>
                  {channel.channel_name}
                </NavLink>
              </li>
            ))
          }
        </ul>
      </div>
    );
  }


}
