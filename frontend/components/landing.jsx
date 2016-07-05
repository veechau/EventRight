const React = require('react');
const SessionStore = require('../stores/session_store');
const AppSlider = require('./app_slider');
const GatheringsIndex = require('./gatherings/gatherings_index');
const CategoriesIndex = require('./categories/categories_index');
const TicketsIndex = require('./tickets/tickets_index');
const BookmarksIndex = require('./bookmarks/bookmarks_index');

const GatheringForm = require('./gatherings/gathering_form');

const Landing = React.createClass({
  render(){
    let userDash = "";
    if (SessionStore.isUserLoggedIn){
      userDash = (
        <div className="user-dash">
        <TicketsIndex />
        <BookmarksIndex />
        <GatheringForm />
        </div>
      );
    }

    return(
      <div className="landing-page">
        <AppSlider />
        <CategoriesIndex />
        <GatheringsIndex />
        {userDash}
      </div>
    );
  }
});

module.exports = Landing;
