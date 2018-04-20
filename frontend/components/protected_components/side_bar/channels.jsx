import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ChannelSearchContainer from '../channels/channel_search_container';
import Modal from 'react-modal';

export default class Channels extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchIsOpen: false,
      modalStyle: {
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
          'border': 'none',
          'boxShadow': '1px 1px 3px #666'
        }
      }
    };
  }

  componentDidMount() {
    this.props.fetchChannels();
  }
  
  openChannelSearch() {
    this.setState({ searchIsOpen: true });
  }

  closeChannelSearch() {
    this.setState({ searchIsOpen: false });
  }


  render() {
    if (!this.props.channels) {
      return <p>No channels have been created yet</p>;
    }
     return (
       <div className="sb-channels">
          <button onClick={() => this.openChannelSearch()}>
            Join a channel
          </button>

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
         <div className='modals'>
           <Modal
             contentLabel='ChannelSearchContainer'
             isOpen={this.state.searchIsOpen}
             style={this.state.modalStyle}>
             <ChannelSearchContainer
               closeModal={() => this.closeChannelSearch()} />
           </Modal>
         </div>
      </div>
    );
  }


}
