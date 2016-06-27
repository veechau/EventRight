# Phase 5: Reminders and Garbage Collection

## Rails
### Models
* Bookmark

### Controllers
* Api::BookmarksController (create, destroy, index, show, update)

### Views
* bookmarks/index.json.jbuilder

## Flux
### Views (React Components)
* BookmarksIndex
  - BookmarkIndexItem
* BookmarkShow
* BookmarkForm

### Stores
* Reminder

### Actions
* ApiActions.receiveAllBookmarks -> triggered by ApiUtil
* ApiActions.receiveSingleBookmark
* ApiActions.deleteBookmark
* BookmarkActions.fetchAllBookmarks -> triggers ApiUtil
* BookmarkActions.fetchSingleBookmark
* BookmarkActions.createBookmark
* BookmarkActions.updateBookmark
* BookmarkActions.destroyBookmark

### ApiUtil
* ApiUtil.fetchAllBookmarks
* ApiUtil.fetchSingleBookmark
* ApiUtil.createBookmark
* ApiUtil.updateBookmark
* ApiUtil.destroyBookmark

## Gems/Libraries
