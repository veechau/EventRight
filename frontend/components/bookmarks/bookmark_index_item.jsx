const React = require('react');
const ReactRouter = require('react-router');

const BookmarkIndexItem = React.createClass({
  render(){
    return (
        <div className="bookmarks-index-item">
          <p>this.props.bookmarks.user_id</p>
          <p>this.props.bookmarks.gathering_id</p>
        </div>
    );
  }
});

module.exports = BookmarkIndexItem;
