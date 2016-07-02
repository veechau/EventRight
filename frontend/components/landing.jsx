const React = require('react');
const SessionStore = require('../stores/session_store');
const AppSlider = require('./app_slider');
const GatheringsIndex = require('./gatherings/gatherings_index');
const CategoriesIndex = require('./categories/categories_index');

const Landing = React.createClass({
  render(){
    return(
      <div className="landing-page">
        <AppSlider />
        <CategoriesIndex />
        <GatheringsIndex />
      </div>
    );
  }
});

module.exports = Landing;
