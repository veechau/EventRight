## Component Hierarchy

**Bolded** components are associated with routes.

(:exclamation: Remember, the bolded components are created by their
associated routes, so the nesting of your bolded components must
_**exactly**_ match the nesting of your routes.)

* **App**
  * MainPage
    * EventIndex
      * EventIndexItem
    * CategoryIndex
      * CategoryIndexItem
  * **EventsIndex**
    * EventIndexItem
    * **EventDetail**
      * EventEditArea
  * **CategoriesIndex**
    * CategoriesIndexItem
      * **CategoryDetail**
        * EventIndexItem
  * **UserPage**
    * EventForm
    * **UserDetail**
      * **BookmarksIndex**
        * BookmarkIndexItem
      * **TicketsIndex**
        * EventTicketItem


## Routes

* **component:** `App` **path:** `/`
  * **component:** `MainPage` **path:** index
  * **component:** `EventsIndex` **path:** `events`
    * **component:** `EventDetail` **path:** `events/:eventId`
  * **component:** `CategoriesIndex` **path:** `categories`
    * **component:** `CategoryDetails` **path:** `categories/:categoryId`
  * **component:** `UserPage` **path:** `users/:userId`
    * **component:** `BookmarksIndex` **path:** `users/:userId/bookmarks`
      * **component:** `BookmarkIndexItem` **path:** `users/:userId/bookmarks/:bookmarkId`
    * **component:** `TicketsIndex` **path:** `users/:userId/tickets`
      * **component:** `TicketIndexItem` **path:** `users/:userId/tickets/:ticketId`
