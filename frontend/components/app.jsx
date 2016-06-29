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
  greetUser() {
    if (SessionStore.isUserLoggedIn()) {
    	return (
    		<hgroup className="header-group">
    			<h2 className="header-name">Welcome back, {SessionStore.currentUser().username}!</h2>
    			<input className="header-button" type="submit" value="logout" onClick={ this._handleLogOut } />
    		</hgroup>
    	);
    }
  },
  greetGuest(){
    if ( !["/login", "/signup"].includes(this.props.location.pathname) ) {
      return (
        <nav className="login-signup">
        <Link to="/login" activeClassName="current">Login</Link>
        &nbsp;or&nbsp;
        <Link to="/signup" activeClassName="current">Sign up!</Link>
        </nav>
      );
    }
  },
  render() {
    let greeting;
    if (SessionStore.isUserLoggedIn()) {
      greeting = (
        <div>
        <header>
          <Link to="/" className="header-link"><h1>EventRight</h1></Link>
          { this.greetUser() }
        </header>
      </div>
      );
    } else {
      greeting = (
        <div>
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
