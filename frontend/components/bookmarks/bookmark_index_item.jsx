const React = require('react');
const ReactRouter = require('react-router');
const GatheringStore = require('../../stores/gathering_store');

const BookmarkIndexItem = React.createClass({
  render(){
    let currentBookmark = this.props.bookmark;
    let ticketedEvent = GatheringStore.find(currentBookmark.gathering_id);
    return (
          <div  className="bookmark-index-item"
                onClick={this._handleImgClick}>
              <img src={ticketedEvent.image}/>
          </div>
      );
  }
});

module.exports = BookmarkIndexItem;
