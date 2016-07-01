const React = require('react');
const SessionStore = require('../stores/session_store');
const AppSlider = require('./app_slider');
const GatheringsIndex = require('./gatherings_index');

const Landing = React.createClass({
  render(){
    return(
      <div className="landing-page">
        <AppSlider />
        <GatheringsIndex />
      </div>
    );
  }
});

module.exports = Landing;
