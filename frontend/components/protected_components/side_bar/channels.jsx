import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ChannelSearchContainer from '../channels/channel_search_container';
import CreateChannelFormContainer from '../channels/create_channel_form_container';
import Modal from 'react-modal';
import ReactTooltip from 'react-tooltip';

export default class Channels extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newFormIsOpen: false,
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
  
  openNewChannelForm() {
    this.setState({ newFormIsOpen: true });
  }

  closeNewChannelForm() {
    this.setState({ newFormIsOpen: false });
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
        <div className="sb-channels-btns">
          <a 
            className="join-channel"
            data-tip='Browse all channels'
            onClick={() => this.openChannelSearch()}>
            Channels
          </a>
          <a 
            className="create-channel" 
            data-tip="Create a channel"
            onClick={() => this.openNewChannelForm()}>
            <i className="far fa-plus-square"></i>
          </a>
          <ReactTooltip />
        </div>
         <ul
          className="sb-channels-list"
         >
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
              contentLabel='NewChannelFormContainer'
              ariaHideApp={false}
              isOpen={this.state.newFormIsOpen}
              style={this.state.modalStyle}>
              <CreateChannelFormContainer
                closeModal={() => this.closeNewChannelForm()} />
            </Modal>

            <Modal
              contentLabel='ChannelSearchContainer'
              ariaHideApp={false}
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
