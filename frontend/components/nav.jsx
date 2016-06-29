const React = require('react');
const Link = require('react-router').Link;
const SessionStore = require('../stores/session_store');
const SessionActions = require('../actions/session_actions');


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
    let welcomeMessage = "Welcome to EventRight!";
    let nav = (
      <nav className="login-signup">
        <Link to="/login" activeClassName="current" onClick={ this._handleLogIn }>Demo User</Link>
        &nbsp;or&nbsp;
        <Link to="/login" activeClassName="current">Login</Link>
        &nbsp;or&nbsp;
        <Link to="/signup" activeClassName="current">Sign up!</Link>
      </nav>
    );

    if (SessionStore.isUserLoggedIn()) {
      welcomeMessage = `Welcome back, ${SessionStore.currentUser().username}!`;
      nav = (
        <nav className="login-signup">
          <Link to="/"
                activeClassName="current"
                onClick={this._handleLogOut}>Log Out</Link>
        &nbsp;or&nbsp;
          <Link to="/"
                activeClassName="current"
                onClick={this._accountInfo}>Account Information</Link>
        </nav>
      );
    }

    return(
      <hgroup className="header-group">
        <h2 className="header-name">{welcomeMessage}</h2>
        {nav}
      </hgroup>
    );
  },
  render() {
    return (
      <div className="user-login">
        {this.greeting()}
    </div>
    );
  }
});

module.exports = Nav;
