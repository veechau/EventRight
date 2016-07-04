"use strict";

const BookmarkApiUtil = {
  fetchBookmarks(success, error) {
    $.ajax({
      url: `api/bookmarks`,
      method: 'GET',
      success: success,
      error(xhr) {
        const errors = xhr.responseJSON;

        error("bookmarks", errors);
      }
    });
  },
  getBookmark(id, success, error) {
    $.ajax({
      url: `api/bookmarks/${id}`,
      method: 'GET',
      success: success,
      error(xhr) {
        const errors = xhr.responseJSON;

        error("bookmarks", errors);
      }
    });
  },
  createBookmark(bookmark, success, error) {
    $.ajax({
      url: `api/bookmarks`,
      method: 'POST',
      data: { bookmark  },
      success: success,
      error(xhr) {
        const errors = xhr.responseJSON;

        error("bookmarks", errors);
      }
    });
  },
  updateBookmark(bookmark, success, error) {
    $.ajax({
      url: `api/bookmarks/${bookmark .id}`,
      method: 'PATCH',
      data: { bookmark  },
      success: success,
      error(xhr) {
        const errors = xhr.responseJSON;

        error("bookmarks", errors);
      }
    });
  },
  deleteBookmark(id, success, error) {
    $.ajax({
      url: `api/bookmarks/${id}`,
      method: 'DELETE',
      success: success,
      error(xhr) {
        const errors = xhr.responseJSON;

        error("bookmarks", errors);
      }
    });
  }
};

module.exports = BookmarkApiUtil;
