const React = require('react');
const Modal = require('boron/DropModal');
import { Tooltip, OverlayTrigger } from 'react-bootstrap';

const GatheringForm = require('./gathering_form');
const GatheringStore = require('../../../stores/gathering_store');

const modalStyle = {
  width: '80%',
  height: '80%',
  backgroundColor: 'fade(#4B4E4F, 80%)',
  opacity: '0.3',
};

const backdropStyle = {
  width: '100%',
  border: '0px solid transparent',
};

const contentStyle = {
  width: '100%',
  margin: 'auto',
  borderRadius: '8px'
};


const GatheringModal = React.createClass({
    componentDidMount() {
      this.gatheringListener = GatheringStore.addListener(this._onChange);
    },

    componentWillUnmount() {
      this.gatheringListener.remove();
    },

    _onChange() {
      this.refs.modal.hide();
    },

    showModal(){
        this.refs.modal.show();
    },
    hideModal(){
        this.refs.modal.hide();
    },
    render: function() {

        let creatEventTT = (
          <Tooltip id="tooltip">Create an Event</Tooltip>
        )

        return (
            <div className="nav-links-item">
              <OverlayTrigger placement="bottom" overlay={creatEventTT}>
                <div onClick={this.showModal}><i className="material-icons">&#xE878;</i></div>
              </OverlayTrigger>
              <Modal  ref="modal"
                      className="gathering-modal"
                      modalStyle={modalStyle}
                      contentStyle={contentStyle}>
                <div className="gathering-modal-content">
                  <div
                    className="gathering-modal-x"
                    onClick={this.hideModal}>
                    X
                  </div>
                  <GatheringForm />
                </div>
              </Modal>
            </div>
        );
    }
});

module.exports = GatheringModal;
