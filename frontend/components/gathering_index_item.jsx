/* eslint max-len: "off" */

const React = require('react');
const ReactRouter = require('react-router');
const hashHistory = ReactRouter.hashHistory;

const GatheringIndexItem = React.createClass({
  _handleImgClick(){
    hashHistory.push('this.props.gathering.id');
  },
  render(){
    return (
      <div className="gathering-index-item">
        <div className="gathering-index-item-title">
          {this.props.gathering.title}
        </div>
        <div className="gathering-index-item-artist">
          {this.props.gathering.artist}
        </div>
        <div className="gathering-index-item-location">
          {this.props.gathering.location}
        </div>
        <div className="gathering-index-item-start-date">
          {this.props.gathering.start_date}
        </div>
        <div className="gathering-index-item-end-date">
          {this.props.gathering.end_date}
        </div>
        <div className="gathering-index-item-description">
          {this.props.gathering.description}
        </div>
        <div className="gathering-index-item-image" onClick={this._handleImgClick}>
          <img src={this.props.gathering.image}/>
        </div>
        <div className="gathering-index-item-ticket-price">
          {this.props.gathering.tix_price}
        </div>
        <div className="gathering-index-item-goal">
          {this.props.gathering.goal}
          </div>
        <div className="gathering-index-item-status">
          {this.props.gathering.status}
        </div>
        <div className="gathering-index-item-category">
          {this.props.gathering.category_id}
        </div>
      </div>
    );
  }
});

module.exports = GatheringIndexItem;
