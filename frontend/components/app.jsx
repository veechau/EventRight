/* eslint max-len: "off" */

const React = require('react');
const Link = require('react-router').Link;
const SessionStore = require('../stores/session_store');
const SessionActions = require('../actions/session_actions');

const Nav = require('./nav.jsx');


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


          <nav className="login-signup">

          <Link to="/" activeClassName="current" onClick={this._handleLogOut}>Log Out</Link>
          &nbsp;or&nbsp;
          <Link to="/" activeClassName="current">Account Information</Link>
          </nav>
    		</hgroup>
    	);
    }
  },
  greetGuest(){
    // if ( !["/login", "/signup"].includes(this.props.location.pathname) ) {
    return (
      <div>
      <hgroup className="header-group">
        <h2 className="header-name">Welcome to EventRight!</h2>

        <nav className="login-signup">
        <Link to="/login" activeClassName="current" onClick={ this._handleLogIn }>Demo User</Link>
        &nbsp;or&nbsp;
        <Link to="/login" activeClassName="current">Login</Link>
        &nbsp;or&nbsp;
        <Link to="/signup" activeClassName="current">Sign up!</Link>
        </nav>
      </hgroup>
      {this.props.children}
      </div>
    );
    // }
  },
  render() {
    return (
      <div className="user-login">
        <header>
          <Link to="/" className="header-link"><h1>EventRight</h1></Link>
        </header>
        < Nav />
        {this.props.children}
    </div>
    );
  }
});

module.exports = App;
