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
      let percentage = (parseInt(100 * bookmarkedEvent.funds) / (bookmarkedEvent.goal)).toString();

      let containerStyle = {
        "width": "100%",
        "paddingTop": "15px",
        "paddingBottom": "10px"
      };

      bookmarkedEventShow = (
        <li className="bookmark-index-item"
        onClick={this._handleImgClick}>
        <img src={bookmarkedEvent.image}/>
        <div className="ticket-index-item-info">
        <h1>{bookmarkedEvent.artist}</h1>
        <p>{bookmarkedEvent.location}</p>
        </div>
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
