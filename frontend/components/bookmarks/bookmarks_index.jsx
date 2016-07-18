const React = require('react');
const Modal = require('boron/DropModal');

const BookmarkStore = require('../../stores/bookmark_store');
const BookmarkActions = require('../../actions/bookmark_actions');
const BookmarkIndexItem = require('./bookmark_index_item');
const GatheringActions = require('../../actions/gathering_actions');
const GatheringStore = require('../../stores/gathering_store');
const SessionStore = require('../../stores/session_store');

const modalStyle = {
  width: '80%',
  height: '80%',
  backgroundColor: 'fade(#4B4E4F, 80%)',
  opacity: '0.3',
};

const backdropStyle = {
  width: '100%',
  border: '0px solid transparent',
};

const contentStyle = {
  width: '100%',
  margin: 'auto',
  marginTop: '20px',
  // border: '1px solid #D2D6DF',
  borderRadius: '8px'
};

const BookmarksIndex = React.createClass({
  getInitialState(){
    return { bookmarks: [] };
  },

  componentDidMount(){
    this.bookmarkListener = BookmarkStore.addListener(this._onChange);
    this.gatheringListener = GatheringStore.addListener(this.forceUpdate.bind(this));
    BookmarkActions.fetchBookmarks();
    GatheringActions.fetchGatherings();
  },

  componentWillUnmount(){
    this.bookmarkListener.remove();
    this.gatheringListener.remove();
  },

  showModal(){
      this.refs.modal.show();
  },
  hideModal(){
      this.refs.modal.hide();
  },

  _onChange(){
    this.setState({ bookmarks: BookmarkStore.findByUserId(SessionStore.currentUser().id) });
  },

  render(){

    let content = (
      <div>You do not have any bookmarked events!</div>
    );

    if (this.state.bookmarks.length > 0){
      content = (
    <ul className="user-dash-bookmark">
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
    return (
      <div>
        <div
          className="user-dash-link"
          onClick={this.showModal}>Go To My Bookmarks</div>
        <Modal  ref="modal"
                className="user-dash-modal"
                modalStyle={modalStyle}
                contentStyle={contentStyle}>
          <div className="user-dash-modal-content">
            <div
              className="user-dash-modal-x"
              onClick={this.hideModal}>X</div>
              <h1 className="user-dash-text">My Bookmarks</h1>
              {content}
          </div>
        </Modal>
      </div>
    );
  }
});

module.exports = BookmarksIndex;
