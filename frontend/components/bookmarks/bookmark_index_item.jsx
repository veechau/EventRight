const React = require('react');
const ReactRouter = require('react-router');
const hashHistory = ReactRouter.hashHistory;
const GatheringStore = require('../../stores/gathering_store');

const BookmarkIndexItem = React.createClass({

  _handleImgClick(){
    hashHistory.push(`events/${this.props.bookmark.gathering_id}`);
  },
  render(){
    let bookmarkedEvent = GatheringStore.find(this.props.bookmark.gathering_id);
    let bookmarkedEventShow = "";
    if (bookmarkedEvent) {
      bookmarkedEventShow = (
        <li  className="bookmark-index-item"
        onClick={this._handleImgClick}>
        <img src={bookmarkedEvent.image}/>
        </li>
      );
    }
    return (
      <div>
          {bookmarkedEventShow}
      </div>
      );
  }
});

module.exports = BookmarkIndexItem;
