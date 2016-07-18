/* eslint max-len: "off" */

const React = require('react');
const SessionStore = require('../stores/session_store');
const AppSlider = require('./app_slider');
const GatheringsIndex = require('./gatherings/gatherings_index');
const CategoriesIndex = require('./categories/categories_index');


const Landing = React.createClass({
  _scrollDown(){
    $('html,body').animate({scrollTop: $(".categories-index").offset().top},'slow');
  },
  render(){
    return(
      <div className="landing-page">

        <div id="welcome-text">Welcome to EventRight</div>
        <p id="welcome-intro">Crowdfund your favorite artist to perform in your city!</p>
        <p id="welcome-p">Scroll down to explore more!</p>

        <div onMouseOver={this._scrollDown}><img
          id="welcome-arrow"
          src="https://res.cloudinary.com/vechau/image/upload/v1467965179/down-arrow-white_ozozli.png"/>
        </div>
        <AppSlider id="app-slider-div"/>
        <CategoriesIndex />
      </div>
    );
  }
});

module.exports = Landing;
