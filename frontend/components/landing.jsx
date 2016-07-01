/* eslint max-len: "off" */

const React = require('react');
const SessionStore = require('../stores/session_store');
const EventIndex = require('./gatherings_index');

const Landing = React.createClass({
  render(){
    let welcomeMessage = "Welcome to EventRight!";
    if (SessionStore.isUserLoggedIn()){
      welcomeMessage = `Welcome back, ${SessionStore.currentUser().first_name} ${SessionStore.currentUser().last_name}!`;
    }
    return(
      <div className="landing-page">
        {welcomeMessage}

        <EventIndex />
      </div>
    );
  }
});

module.exports = Landing;
