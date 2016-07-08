const React = require('react');
const Link = require('react-router').Link;
const SessionStore = require('../stores/session_store');
const SessionActions = require('../actions/session_actions');

const SessionModal = require('./auth/session_modal');
const LoginForm = require('./auth/login_form');
const SignupForm = require('./auth/signup_form');

const ReactRouter = require('react-router');
const hashHistory = ReactRouter.hashHistory;


const GatheringStore = require('../stores/gathering_store');
const GatheringModal = require('./gatherings/form/gathering_modal.jsx');


const Nav = React.createClass({
  componentDidMount() {
    SessionStore.addListener(this.forceUpdate.bind(this));
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

  _fillIcon(){
   $('#nav-icon').attr('src', 'https://res.cloudinary.com/vechau/image/upload/c_scale,h_48/v1468016827/user-icon-big_-hover_sdiiuf.png');
  },

  _unfillIcon(){
   $('#nav-icon').attr('src', 'https://res.cloudinary.com/vechau/image/upload/c_scale,h_48/v1468016827/user-icon-big_f66luo.png');
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
                onMouseOver={this._fillIcon}
                onMouseOut={this._unfillIcon}
                onClick={this._accountInfo}>
                <img id="nav-icon" src="https://res.cloudinary.com/vechau/image/upload/c_scale,h_48/v1468016827/user-icon-big_f66luo.png"/>
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
