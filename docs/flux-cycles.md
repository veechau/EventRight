# Flux Cycles

Flux loops are organized by data type. Under each data type, there may
be sub-categories, and each action is listed with the sequence of events
that result from its invocation, ending with the API or store. Finally,
store listeners are listed at the end.

You should be able to use this document trace an **action** starting
with where it was invoked, through the **API**/**store** involved, and
finally to the **components** that update as a result. This is important
because once you start implementing your flux loops, that's precisely
what you'll need to do.


## Event Cycles

### Events API Request Actions

* `fetchAllEvents`
  0. invoked from `EventsIndex` `didMount`/`willReceiveProps`
  0. `GET /api/events` is called.
  0. `receiveAllEvents` is set as the callback.

* `createEvent`
  0. invoked from new event button `onClick`
  0. `POST /api/events` is called.
  0. `receiveSingleEvent` is set as the callback.

* `fetchSingleEvent`
  0. invoked from `EventDetail` `didMount`/`willReceiveProps`
  0. `GET /api/events/:id` is called.
  0. `receiveSingleEvent` is set as the callback.

* `updateEvent`
  0. invoked from `EventForm` `onSubmit`
  0. `POST /api/events` is called.
  0. `receiveSingleEvent` is set as the callback.

* `destroyEvent`
  0. invoked from delete event button `onClick`
  0. `DELETE /api/events/:id` is called.
  0. `removeEvent` is set as the callback.

### Notes API Response Actions

* `receiveAllEvent`
  0. invoked from an API callback.
  0. `Event` store updates `_events` and emits change.

* `receiveSingleEvent`
  0. invoked from an API callback.
  0. `Event` store updates `_events[id]` and emits change.

* `removeEvent`
  0. invoked from an API callback.
  0. `Event` store removes `_events[id]` and emits change.

### Store Listeners

* `EventsIndex` component listens to `Event` store.
* `EventDetail` component listens to `Event` store.


## Category Cycles

### Categories API Request Actions

* `fetchAllCategories`
  0. invoked from `CategoriesIndex` `didMount`/`willReceiveProps`
  0. `GET /api/categories` is called.
  0. `receiveAllCategories` is set as the callback.

* `createCategory`
  0. invoked from new category button `onClick`
  0. `POST /api/categories` is called.
  0. `receiveSingleCategory` is set as the callback.

* `fetchSingleCategory`
  0. invoked from `CategoryDetail` `didMount`/`willReceiveProps`
  0. `GET /api/categories/:id` is called.
  0. `receiveSingleCategory` is set as the callback.

* `updateCategory`
  0. invoked from `CategoryForm` `onSubmit`
  0. `POST /api/categories` is called.
  0. `receiveSingleCategory` is set as the callback.

* `destroyCategory`
  0. invoked from delete category button `onClick`
  0. `DELETE /api/categories/:id` is called.
  0. `removeCategory` is set as the callback.

### Categories API Response Actions

* `receiveAllCategories`
  0. invoked from an API callback.
  0. `Category` store updates `_categories` and emits change.

* `receiveSingleCategory`
  0. invoked from an API callback.
  0. `Category` store updates `_categories[id]` and emits change.

* `removeCategory`
  0. invoked from an API callback.
  0. `Category` store removes `_categories[id]` and emits change.

### Store Listeners

* `CategoriesIndex` component listens to `Category` store.


## Bookmark Cycles

* `fetchAllBookmarks`
  0. invoked from `BookmarksIndex` `didMount`/`willReceiveProps`
  0. `GET /api/users/:userId/bookmarks` is called.
  0. `receiveAllBookmarks` is set as the callback.

* `createBookmark`
  0. invoked from new bookmark button `onClick`
  0. `POST /api/users/:userId/bookmarks` is called.
  0. `receiveSingleBookmark` is set as the callback.

* `destroyCategory`
  0. invoked from delete bookmark button `onClick`
  0. `DELETE /api/users/:userId/bookmarks/:id` is called.
  0. `removeBookmark` is set as the callback.

### Categories API Response Actions

* `receiveAllBookmarks`
  0. invoked from an API callback.
  0. `Bookmark` store updates `_bookmarks` and emits change.

* `receiveSingleCategory`
  0. invoked from an API callback.
  0. `Bookmark` store updates `_bookmarks[id]` and emits change.

* `removeCategory`
  0. invoked from an API callback.
  0. `Bookmark` store removes `_bookmarks[id]` and emits change.

### Store Listeners

* `BookmarksIndex` component listens to `Bookmark` store.


## Ticket Cycles

* `fetchAllTickets`
  0. invoked from `TicketsIndex` `didMount`/`willReceiveProps`
  0. `GET /api/users/:userId/tickets` is called.
  0. `receiveAllTickets` is set as the callback.

* `createTicket`
  0. invoked from add to cart button `onClick`
  0. `POST /api/users/:userId/tickets` is called.
  0. `receiveSingleTicket` is set as the callback.

* `destroyTicket`
  0. invoked from delete bookmark button `onClick`
  0. `DELETE /api/users/:userId/tickets/:id` is called.
  0. `removeTicket` is set as the callback.

### Categories API Response Actions

* `receiveAllTickets`
  0. invoked from an API callback.
  0. `Ticket` store updates `_tickets` and emits change.

* `receiveSingleTicket`
  0. invoked from an API callback.
  0. `Ticket` store updates `_tickets[id]` and emits change.

* `removeTicket`
  0. invoked from an API callback.
  0. `Ticket` store removes `_tickets[id]` and emits change.

### Store Listeners

* `TicketsIndex` component listens to `Ticket` store.
