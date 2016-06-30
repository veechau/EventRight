const React = require('react');
const ReactDOM = require('react-dom');
const ReactRouter = require('react-router');
const Router = ReactRouter.Router;
const Route = ReactRouter.Route;
const IndexRoute = ReactRouter.IndexRoute;
const hashHistory = ReactRouter.hashHistory;

const App = require('./components/app.jsx');
const Landing = require('./components/landing.jsx');
const LoginForm = require('./components/login_form.jsx');
const SignupForm = require('./components/signup_form.jsx');

const SessionStore = require('./stores/session_store');
const SessionActions = require('./actions/session_actions');

const routes = (
    <Router history={ hashHistory }>
      <Route path="/" component={ App }>
        <IndexRoute component={ Landing } />
        <Route path="/login" component={ LoginForm } />
        <Route path="/signup" component={ SignupForm } />

    </Route>
  </Router>
);

function _ensureLoggedIn(nextState, replace) {
    if (!SessionStore.isUserLoggedIn()) {
      replace('/login');
    }
}


document.addEventListener("DOMContentLoaded", function(){
  if (window.currentUser) {
    SessionActions.receiveCurrentUser(window.currentUser);
  }
  ReactDOM.render( routes, document.getElementById("content") );
});
