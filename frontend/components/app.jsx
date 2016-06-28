const React = require('react');

const App = React.createClass({
  render(){
    return(
      <div>
        <header>
        Welcome to EventRight
        </header>
      {this.props.children}
      </div>
    );
  }
});


module.exports = App;
