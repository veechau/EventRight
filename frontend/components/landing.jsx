const React = require('react');
const SessionStore = require('../stores/session_store');

const Landing = React.createClass({
  render(){
    let welcomeMessage = "Welcome to EventRight!";
    if (SessionStore.isUserLoggedIn()){
      welcomeMessage = `Welcome back, ${SessionStore.currentUser().first_name} ${SessionStore.currentUser().last_name}!`
    }
    return(
      <div className="landing-page">
        {welcomeMessage}
      </div>
    );
  }
});

module.exports = Landing;
