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
const CategoriesIndex = require('./components/categories/categories_index');
const CategoryIndexItem = require('./components/categories/category_index_item');

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
        <Route path="/categories" component={ CategoriesIndex} >
          <Route path="/categories/:catId" component={ CategoryIndexItem } />
        </Route>
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
