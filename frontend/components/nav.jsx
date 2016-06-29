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
    let nav = (
      <nav className="nav-links">
        <Link to="/login" className="current" onClick={ this._handleLogIn }>Demo User</Link>

        <Link to="/login" className="current">Login</Link>

        <Link to="/signup" className="current">Sign up!</Link>
      </nav>
    );

    if (SessionStore.isUserLoggedIn()) {
      nav = (
        <nav className="nav-links">
          <Link to="/"
                className="current"
                onClick={this._handleLogOut}>Log Out</Link>
          <Link to="/"
                className="current"
                onClick={this._accountInfo}>Account Information</Link>
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
