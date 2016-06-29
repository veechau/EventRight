/* eslint max-len: "off" */

const React = require('react');
const Link = require('react-router').Link;
const SessionStore = require('../stores/session_store');
const SessionActions = require('../actions/session_actions');


const App = React.createClass({
  componentDidMount() {
    SessionStore.addListener(this.forceUpdate.bind(this));
  },

  _handleLogOut(){
    SessionActions.logOut();
  },
  _handleLogIn(){
    SessionActions.logIn({username: "Demo_User", password: "Password"});
  },
  greetUser() {
    if (SessionStore.isUserLoggedIn()) {
    	return (
    		<hgroup className="header-group">
    			<h2 className="header-name">Welcome back, {SessionStore.currentUser().username}!</h2>
    			<input className="header-button" type="submit" value="Log Out" onClick={ this._handleLogOut } />
          <nav className="login-signup">
          <button className="header-button" onClick={this._handleLogOut} activeClassName="current">Log Out</button>
          &nbsp;or&nbsp;
          <Link to="/user" activeClassName="current">Account Information</Link>
          </nav>
    		</hgroup>
    	);
    }
  },
  greetGuest(){
    // if ( !["/login", "/signup"].includes(this.props.location.pathname) ) {
    return (
      <hgroup className="header-group">
        <h2 className="header-name">Welcome to EventRight!</h2>

        <nav className="login-signup">
        <button className="login-signup-buttons" value="Demo User" onClick={ this._handleLogIn }>Demo User</button>
        <Link to="/login" activeClassName="current">Login</Link>
        &nbsp;or&nbsp;
        <Link to="/signup" activeClassName="current">Sign up!</Link>
        </nav>
      </hgroup>
    );
    // }
  },
  render() {
    let greeting;
    if (SessionStore.isUserLoggedIn()) {
      greeting = (
        <div className="user-login">
        <header>
          <Link to="/" className="header-link"><h1>EventRight</h1></Link>
          { this.greetUser() }
        </header>
      </div>
      );
    } else {
      greeting = (
        <div className="user-login">
        <header>
          <Link to="/" className="header-link"><h1>EventRight</h1></Link>
          { this.greetGuest() }
        </header>
        {this.props.children}
      </div>
      );
    }
    return (
      <div>
        {greeting}
      </div>
    );
  }
});

module.exports = App;
