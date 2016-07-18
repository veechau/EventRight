const React = require('react');
const Modal = require('boron/DropModal');

const LoginForm = require('./login_form');
const SignupForm = require('./signup_form');

const modalStyle = {
  width: '100%',
  height: '100%',
  backgroundColor: 'fade(#4B4E4F, 80%)',
  opacity: '0.3',
};

const backdropStyle = {
  border: '0px solid transparent',
};

const contentStyle = {
  width: '40%',
  margin: 'auto',
  marginTop: '55px',
  border: '1px solid #D2D6DF',
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
      if (this.props.content === "login"){
        formContent = < LoginForm />;
        buttontext = "Login";
      } else {
        formContent = < SignupForm />;
        buttontext = "Signup";
      }
        return (
            <div className="nav-links-item">
              <div onClick={this.showModal}>{buttontext}</div>
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
