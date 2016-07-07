"use strict";

const AppDispatcher = require('../dispatcher/dispatcher');
const Store = require('flux/utils').Store;
const BookmarkConstants = require('../constants/bookmark_constants');

const BookmarkStore = new Store(AppDispatcher);

let _bookmarks = {};

BookmarkStore.all = function(){
  return Object.keys(_bookmarks).map( (bookmarkId) => {
    return _bookmarks[bookmarkId];
  });
};

BookmarkStore.find = function(bookmarkId){
  return _bookmarks[bookmarkId];
};

const resetBookmarks = function(bookmarks) {
  _bookmarks = {};
  bookmarks.forEach( (bookmark) => {
    _bookmarks[bookmark.id] = bookmark;
  });
};

const setBookmark = function(bookmark) {
  _bookmarks[bookmark.id] = bookmark;
  alert("Bookmark Added!");
};

const deleteBookmark = function(bookmark) {
  delete _bookmarks[bookmark.id];
};

BookmarkStore.__onDispatch = payload => {
  switch (payload.actionType) {
    case BookmarkConstants.BOOKMARKS_RECEIVED:
    resetBookmarks(payload.bookmarks);
    BookmarkStore.__emitChange();
      break;
    case BookmarkConstants.BOOKMARK_RECEIVED:
    setBookmark(payload.bookmark);
    BookmarkStore.__emitChange();
      break;
    case BookmarkConstants.BOOKMARK_REMOVED:
    deleteBookmark(payload.bookmark);
    BookmarkStore.__emitChange();
      break;
  }
};

module.exports = BookmarkStore;
