const React = require('react');
const Modal = require('boron/DropModal');

const GatheringForm = require('./gathering_form');
const GatheringStore = require('../../../stores/gathering_store');

const modalStyle = {
  width: '70%',
  height: '70%',
  backgroundColor: 'fade(#4B4E4F, 80%)',
  opacity: '0.3',
};

const backdropStyle = {
  width: '100%',
  height: '100%',
  border: '0px solid transparent',
};

const contentStyle = {
  width: '70%',
  margin: 'auto',
  marginTop: '20px',
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
        return (
            <div className="nav-links-item">
              <div onClick={this.showModal}><i className="material-icons">&#xE878;</i></div>
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
