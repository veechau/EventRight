const React = require('react');
const BookmarkStore = require('../../stores/bookmark_store');
const BookmarkActions = require('../../actions/bookmark_actions');
const BookmarkIndexItem = require('./bookmark_index_item');

const BookmarksIndex = React.createClass({
  getInitialState(){
    return { bookmarks: [] };
  },

  componentDidMount(){
    this.bookmarkListener = BookmarkStore.addListener(this._onChange);
    BookmarkActions.fetchBookmarks();
  },

  componentWillUnmount(){
    this.bookmarkListener.remove();
  },

  _onChange(){
    this.setState({ bookmarks: BookmarkStore.all() });
  },

  render(){
    if (this.state.bookmarks.length === 0){
      return (
        <div>You do not have any bookmarked events!</div>
      );
    } else {
      return (
        <ul>
        {this.state.bookmarks.map( (bookmark) => {
          return (
            <BookmarkIndexItem
            key={bookmark.id}
            bookmark={bookmark} />
          );
        })}
        </ul>
      );
    }
  }
});

module.exports = BookmarksIndex;
