const React = require('react');
const SessionStore = require('../stores/session_store');
const AppSlider = require('./app_slider');
const GatheringsIndex = require('./gatherings/gatherings_index');
const CategoriesIndex = require('./categories/categories_index');
const TicketsIndex = require('./tickets/tickets_index');
const BookmarksIndex = require('./bookmarks/bookmarks_index');


const Landing = React.createClass({
  render(){

    return(
      <div className="user-landing-page">
        <div className="user-dash">
          <div className="user-dash-bookmark">
            <header className="user-landing-header">Bookmarked Events</header>
            <BookmarksIndex />
          </div>
          <div className="user-dash-tickets">
            <header className="user-landing-header">Events Funded By You!</header>
            <TicketsIndex />
          </div>
        </div>

        <header className="user-landing-header">Explore Events</header>
        <div className="user-dash-explore">
          <GatheringsIndex />
        </div>
      </div>
    );
  }
});

module.exports = Landing;
