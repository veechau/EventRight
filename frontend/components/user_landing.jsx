const React = require('react');
const SessionStore = require('../stores/session_store');
const SessionActions = require('../actions/session_actions');
const AppSlider = require('./app_slider');
const GatheringsIndex = require('./gatherings/gatherings_index');
const CategoriesIndex = require('./categories/categories_index');
const TicketsIndex = require('./tickets/tickets_index');
const BookmarksIndex = require('./bookmarks/bookmarks_index');


const Landing = React.createClass({
  getInitialState(){
    return {currentUser: ""};
  },
  componentDidMount(){
    this.sessionStoreListener = SessionStore.addListener(this._onChange);
    SessionActions.fetchCurrentUser();
  },
  _onChange(){
    this.setState({currentUser: SessionStore.currentUser()});
  },
  componentWillUnmount(){
    this.sessionStoreListener.remove();
  },
  render(){

    return(
      <div className="user-landing-page">
        <div className="user-info">
        <h1>Welcome back, {this.state.currentUser.first_name} {this.state.currentUser.last_name}</h1>
        </div>
        <div className="user-dash">
            <BookmarksIndex />
            <TicketsIndex />
        </div>
        <div id="user-dash-explore">
        <h1 className="user-landing-header">Explore Events</h1>
        <div className="user-dash-explore-index">
          <GatheringsIndex />
        </div>
        </div>
      </div>
    );
  }
});

module.exports = Landing;
