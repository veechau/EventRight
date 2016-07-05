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
    return (
      <div className="bookmarks-index">
        <ul>
          {this.state.bookmarks.map( (bookmark) => {
            return (
              <li key={bookmark.id}>
                <BookmarkIndexItem
                  bookmark={bookmark} />
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
});

module.exports = BookmarksIndex;
