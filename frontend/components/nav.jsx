const React = require('react');
const Link = require('react-router').Link;
const SessionStore = require('../stores/session_store');
const SessionActions = require('../actions/session_actions');

const SessionModal = require('./auth/session_modal');
// const LoginForm = require('./auth/login_form');
// const SignupForm = require('./auth/signup_form');

const ReactRouter = require('react-router');
const hashHistory = ReactRouter.hashHistory;


const GatheringStore = require('../stores/gathering_store');
const GatheringModal = require('./gatherings/form/gathering_modal.jsx');


const Nav = React.createClass({
  componentDidMount() {
    SessionStore.addListener(this.forceUpdate.bind(this));
  },

  _goToLanding() {
    hashHistory.push('/');
  },

  _handleLogOut(){
    SessionActions.logOut();
    hashHistory.push('/');
  },

  _handleLogIn(){
    SessionActions.logIn({username: "Demo_User", password: "Password"});
  },

  _accountInfo(){
    hashHistory.push('/home');
  },

  greeting() {
    let nav = (
      <nav className="nav-links">
        <div className="nav-links-item" onClick={ this._handleLogIn }>
        <i className="material-icons">&#xE85E;</i>
        </div>
        <SessionModal content="login"/>
        <SessionModal content="signup"/>
      </nav>
    );

    if (SessionStore.isUserLoggedIn()) {
      nav = (
        <nav className="nav-links">
        <div
            className="nav-links-item"
            onClick={this._goToLanding}><i className="material-icons">&#xE88A;</i></div>

        <GatheringModal />

          <div
                className="nav-links-item"
                onClick={this._handleLogOut}><i className="material-icons">&#xE879;</i>
          </div>
          <div
                className="nav-links-item"
                id="nav-links-user"
                onMouseOver={this._fillIcon}
                onMouseOut={this._unfillIcon}
                onClick={this._accountInfo}>
                <i className="material-icons">&#xE851;</i>
          </div>
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
