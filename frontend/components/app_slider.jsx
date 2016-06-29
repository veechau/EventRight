const React = require('react');

const AppSlider = React.createClass({
  render(){
    return (
      <div>
      <ul className="slider">
        <li>
            <img src="https://iso.500px.com/wp-content/uploads/2014/12/concert.jpg" />
        </li>
        <li>
            <img src="http://az616578.vo.msecnd.net/files/2016/03/23/635943566212276867210249251_concert-crowd.jpg" />
        </li>
      </ul>
      </div>
    );
  }
});

module.exports = AppSlider;
