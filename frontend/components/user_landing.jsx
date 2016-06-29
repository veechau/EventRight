const React = require('react');
const SessionStore = require('../stores/session_store');

const UserLanding = React.createClass({
  render(){
    return(
      <div className="user-landing-page">
      Welcome back, {SessionStore.currentUser().first_name} {SessionStore.currentUser().last_name}!
      </div>
    );
  }
});

module.exports = UserLanding;
