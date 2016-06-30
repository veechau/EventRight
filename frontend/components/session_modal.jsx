const React = require('react');
const Modal = require('boron/DropModal');


const SessionModal = React.createClass({
    showModal: function(){
        this.refs.modal.show();
    },
    hideModal: function(){
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
