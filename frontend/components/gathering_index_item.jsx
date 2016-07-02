/* eslint max-len: "off" */

const React = require('react');
const ReactRouter = require('react-router');
const hashHistory = ReactRouter.hashHistory;

const GatheringIndexItem = React.createClass({
  _handleImgClick(){
    hashHistory.push(`events/${this.props.gathering.id}`);
  },
  render(){
    return (
        <div className="gathering-index-item-image"
             onClick={this._handleImgClick}>
          <img src={this.props.gathering.image}/>
        </div>
    );
  }
});

module.exports = GatheringIndexItem;
