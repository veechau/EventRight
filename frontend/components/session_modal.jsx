const React = require('react');
const Modal = require('boron/DropModal');

const modalStyle = {
  width: '100%',
  height: '100%',
  backgroundColor: '#000000',
  opacity: '0.8',
};

const backdropStyle = {
  backgroundColor: '#4b4e4f'
};

const contentStyle = {

};

const SessionModal = React.createClass({
    showModal(){
        this.refs.modal.show();
    },
    hideModal(){
        this.refs.modal.hide();
    },
    render: function() {
        return (
            <div>
              <button onClick={this.showModal}>Open</button>
              <Modal ref="modal" modalStyle={modalStyle} backdropStyle={backdropStyle} contentStyle={contentStyle}>
                <h2>I am a dialog</h2>
                <button onClick={this.hideModal}>Close</button>
              </Modal>
            </div>
        );
    }
});
