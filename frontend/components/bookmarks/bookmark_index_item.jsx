const React = require('react');
const ReactRouter = require('react-router');
const hashHistory = ReactRouter.hashHistory;
const GatheringStore = require('../../stores/gathering_store');

const BookmarkIndexItem = React.createClass({
  _handleImgClick(){
    hashHistory.push(`events/${this.props.bookmark.gathering_id}`);
  },
  render(){
    let ticketedEvent = GatheringStore.find(this.props.bookmark.gathering_id);
    return (
          <li  className="bookmark-index-item"
                onClick={this._handleImgClick}>
              <img src={ticketedEvent.image}/>
          </li>
      );
  }
});

module.exports = BookmarkIndexItem;
