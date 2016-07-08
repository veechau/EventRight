/* eslint max-len: "off" */

const React = require('react');
const SessionStore = require('../stores/session_store');
const AppSlider = require('./app_slider');
const GatheringsIndex = require('./gatherings/gatherings_index');
const CategoriesIndex = require('./categories/categories_index');


const Landing = React.createClass({
  render(){

    return(
      <div className="landing-page">

        <div id="welcome-arrow">
          <div id="welcome-text">Welcome to EventRight!</div>
          <img  onClick={this._scroll}
                id="welcome-arrow-img" src="https://res.cloudinary.com/vechau/image/upload/v1467938248/AppSlider/down-arrow-icon.png"
                />
        </div>

        <AppSlider id="app-slider-div"/>
        <CategoriesIndex />
      </div>
    );
  }
});

module.exports = Landing;
