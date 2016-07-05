const React = require('react');
const Link = require('react-router').Link;
const SessionStore = require('../stores/session_store');
const SessionActions = require('../actions/session_actions');

const SessionModal = require('./auth/session_modal');
const LoginForm = require('./auth/login_form');
const SignupForm = require('./auth/signup_form');

const GatheringModal = require('./gatherings/form/gathering_modal.jsx');


const Nav = React.createClass({
  componentDidMount() {
    SessionStore.addListener(this.forceUpdate.bind(this));
  },

  _handleLogOut(){
    SessionActions.logOut();
  },

  _handleLogIn(){
    SessionActions.logIn({username: "Demo_User", password: "Password"});
  },

  _accountInfo(){
    // implement later
  },


  greeting() {
    let nav = (
      <nav className="nav-links">
        <div className="nav-links-item" onClick={ this._handleLogIn }>
        Demo User</div>
        <SessionModal content="login"/>
        <SessionModal content="signup"/>
      </nav>
    );

    if (SessionStore.isUserLoggedIn()) {
      nav = (
        <nav className="nav-links">
          <div
                className="nav-links-item"
                onClick={this._handleLogOut}>Logout</div>
          <GatheringModal />
          <div
                className="nav-links-item"
                onClick={this._accountInfo}>Account Information</div>
        </nav>
      );
    }

    return(
        nav
    );
  },


  render() {
    return (
      this.greeting()
    );
  }
});

module.exports = Nav;
