const React = require('react');
const Modal = require('boron/DropModal');

const LoginForm = require('./login_form');
const SignupForm = require('./signup_form');

import { Tooltip, OverlayTrigger } from 'react-bootstrap';

const modalStyle = {
  width: '80%',
  height: '80%',
  backgroundColor: 'fade(#4B4E4F, 80%)',
  opacity: '0.3',
};

const backdropStyle = {
  width: '100%',
  border: '0px solid transparent'
};

const contentStyle = {
  width: '100%',
  margin: 'auto',
  marginTop: '20px',
  borderRadius: '8px'
};

const SessionModal = React.createClass({
    showModal(){
        this.refs.modal.show();
    },
    hideModal(){
        this.refs.modal.hide();
    },
    render: function() {

      let formContent = "";
      let buttontext = "";
      let tooltip = (
        <Tooltip id="tooltip">Login!</Tooltip>
      )
      if (this.props.content === "login"){
        formContent = < LoginForm />;
        buttontext = <i className="material-icons">&#xE7FD;</i>;
      } else {
        formContent = < SignupForm />;
        buttontext = <i className="material-icons">&#xE7FE;</i>;
        tooltip = (
          <Tooltip id="tooltip">Sign Up!</Tooltip>
        )
      }
        return (
            <div className="nav-links-item">
            <OverlayTrigger placement="bottom" overlay={tooltip}>
              <div onClick={this.showModal}>{buttontext}</div>
            </OverlayTrigger>
              <Modal  ref="modal"
                      className="session-modal"
                      modalStyle={modalStyle}
                      backdropStyle={backdropStyle}
                      contentStyle={contentStyle}>
                <div className="session-modal-content">
                  <div
                    className="session-modal-x"
                    onClick={this.hideModal}>X</div>
                  {formContent}
                </div>
              </Modal>
            </div>
        );
    }
});

module.exports = SessionModal;
