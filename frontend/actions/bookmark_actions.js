"use strict";

const AppDispatcher = require('../dispatcher/dispatcher');
const BookmarkConstants = require('../constants/bookmark_constants');
const BookmarkApiUtil = require('../util/bookmark_api_util');
const ErrorActions = require('./error_actions');

const BookmarkActions = {
  // Client-side

  fetchBookmarks(){
    BookmarkApiUtil.fetchBookmarks(
      BookmarkActions.receiveAll,
      ErrorActions.setErrors);
  },

  getBookmark(id){
    BookmarkApiUtil.getBookmark(
      id,
      BookmarkActions.receiveBookmark,
      ErrorActions.setErrors);
  },

  createBookmark(bookmark){
    BookmarkApiUtil.createBookmark(
      bookmark,
      BookmarkActions.receiveBookmark,
      ErrorActions.setErrors);
  },

  editBookmark(bookmark){
    BookmarkApiUtil.updateBookmark(
      bookmark,
      BookmarkActions.receiveBookmark,
      ErrorActions.setErrors);
  },

  deleteBookmark(id){
    BookmarkApiUtil.deleteBookmark(
      id,
      BookmarkActions.receiveAll,
      ErrorActions.setErrors);
  },

  // Server-side
  receiveAll(bookmarks){
    AppDispatcher.dispatch({
      actionType: BookmarkConstants.BOOKMARKS_RECEIVED,
      bookmarks: bookmarks
    });
  },
  receiveBookmark(bookmark){
    AppDispatcher.dispatch({
      actionType: BookmarkConstants.BOOKMARK_RECEIVED,
      bookmark: bookmark
    });
  },
};

module.exports = BookmarkActions;
