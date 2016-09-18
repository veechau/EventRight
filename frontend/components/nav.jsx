const React = require('react');
const Link = require('react-router').Link;
const SessionStore = require('../stores/session_store');
const SessionActions = require('../actions/session_actions');

const SessionModal = require('./auth/session_modal');

const ReactRouter = require('react-router');
const hashHistory = ReactRouter.hashHistory;

const GatheringStore = require('../stores/gathering_store');
const GatheringModal = require('./gatherings/form/gathering_modal.jsx');

import { Tooltip, OverlayTrigger } from 'react-bootstrap';

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
    let homeTT = (
      <Tooltip id="tooltip">Home</Tooltip>
    )
    let logOutTT = (
      <Tooltip id="tooltip">Logout!</Tooltip>
    )
    let demoUserTT = (
      <Tooltip id="tooltip">Sign in as a Demo User!</Tooltip>
    )
    let userProfileTT = (
      <Tooltip id="tooltip">My Account</Tooltip>
    )

    let nav = (
      <nav className="nav-links">
        <OverlayTrigger placement="bottom" overlay={demoUserTT}>
          <div className="nav-links-item" onClick={ this._handleLogIn }>
          <i className="material-icons">&#xE85E;</i>
          </div>
        </OverlayTrigger>
        <SessionModal content="login"/>
        <SessionModal content="signup"/>
      </nav>
    );

    if (SessionStore.isUserLoggedIn()) {
      nav = (
        <nav className="nav-links">
          <OverlayTrigger placement="bottom" overlay={homeTT}>
            <div
                className="nav-links-item"
                onClick={this._goToLanding}><i className="material-icons">&#xE88A;</i>
            </div>
          </OverlayTrigger>

          <GatheringModal />

          <OverlayTrigger placement="bottom" overlay={logOutTT}>

            <div
                  className="nav-links-item"
                  onClick={this._handleLogOut}><i className="material-icons">&#xE879;</i>
            </div>
          </OverlayTrigger>

          <OverlayTrigger placement="bottom" overlay={userProfileTT}>
            <div
                  className="nav-links-item"
                  id="nav-links-user"
                  onMouseOver={this._fillIcon}
                  onMouseOut={this._unfillIcon}
                  onClick={this._accountInfo}>
                  <i className="material-icons">&#xE851;</i>
            </div>
          </OverlayTrigger>
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
