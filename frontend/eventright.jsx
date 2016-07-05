/* eslint max-len: "off" */

const React = require('react');
const ReactDOM = require('react-dom');
const ReactRouter = require('react-router');
const Router = ReactRouter.Router;
const Route = ReactRouter.Route;
const IndexRoute = ReactRouter.IndexRoute;
const hashHistory = ReactRouter.hashHistory;

const App = require('./components/app');
const Landing = require('./components/landing');
const LoginForm = require('./components/auth/login_form');
const SignupForm = require('./components/auth/signup_form');
const GatheringsIndex = require('./components/gatherings/gatherings_index');
const GatheringIndexItem = require('./components/gatherings/gathering_index_item');
const GatheringIndexShow = require('./components/gatherings/gathering_index_show');
const GatheringForm = require('./components/gatherings/form/gathering_form');
const CategoriesIndex = require('./components/categories/categories_index');
const CategoryIndexItem = require('./components/categories/category_index_item');
const CategoryIndexShow = require('./components/categories/category_index_show');
const BookmarksIndex = require('./components/bookmarks/bookmarks_index');
const BookmarkIndexItem = require('./components/bookmarks/bookmark_index_item');
const TicketsIndex = require('./components/tickets/tickets_index');
const TicketIndexItem = require('./components/tickets/ticket_index_item');



const SessionStore = require('./stores/session_store');
const SessionActions = require('./actions/session_actions');


const routes = (
    <Router history={ hashHistory }>
      <Route path="/" component={ App }>
        <IndexRoute component={ Landing } />
        <Route path="/login" component={ LoginForm} />
        <Route path="/signup" component={ SignupForm } />
        <Route path="/events" component={ GatheringsIndex } />
        <Route path="/events/:eventId" component={ GatheringIndexShow } />
        <Route path="/categories" component={ CategoriesIndex} />
        <Route path="/categories/:catId" component={ CategoryIndexShow } />
        <Route path="/bookmarks/" component={ BookmarksIndex } />
        <Route path="/bookmarks/:bookmarkId" component={ BookmarkIndexItem } />
        <Route path="/tickets/" component={ TicketsIndex } />
        <Route path="/ticket/:ticketId" component={ TicketIndexItem } />
    </Route>
  </Router>
);

function _ensureLoggedIn(nextState, replace) {
    if (!SessionStore.isUserLoggedIn()) {
      replace('/');
    }
}


document.addEventListener("DOMContentLoaded", function(){
  if (window.currentUser) {
    SessionActions.receiveCurrentUser(window.currentUser);
  }
  ReactDOM.render( routes, document.getElementById("content") );
});
