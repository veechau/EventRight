const React = require('react');
const ReactDOM = require('react-dom');
const ReactRouter = require('react-router');
const Router = ReactRouter.Router;
const Route = ReactRouter.Route;
const IndexRoute = ReactRouter.IndexRoute;
const hashHistory = ReactRouter.hashHistory;

const App = require('./components/app');

const routes = (
  <Router history={ hashHistory }>
    <Route path="/" component={ App } />

  </Router>
);

document.addEventListener("DOMContentoaded", function(){
  ReactDOM.render(<div>Hello</div>, document.findByElementId("content"));
});
