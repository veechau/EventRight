## Component Hierarchy

**Bolded** components are associated with routes.

(:exclamation: Remember, the bolded components are created by their
associated routes, so the nesting of your bolded components must
_**exactly**_ match the nesting of your routes.)

* **App**
  * **Landing**
    * **CategoryIndex**
      * CategoryIndexItem
        * **GatheringIndex**
          * GatheringIndexItem
            * GatheringIndexShow
  * **User-Landing**
    * **BookmarksIndex**
      * BookmarkIndexItem
    * **TicketsIndex**
      * GatheringTicketItem
    * **GatheringForm**
    * GatheringIndex
      * GatheringIndexItem
        * GatheringIndexShow


## Routes

* **component:** `App` **path:** `/`
  * **component:** `MainPage` **path:** index
  * **component:** `EventsIndex` **path:** `events`
    * **component:** `EventDetail` **path:** `events/:eventId`
  * **component:** `CategoriesIndex` **path:** `categories`
    * **component:** `CategoryDetails` **path:** `categories/:categoryId`
  * **component:** `UserPage` **path:** `home`
    * **component:** `BookmarksIndex` **path:** `bookmarks`
      * **component:** `BookmarkIndexItem` **path:** `bookmarks/:bookmarkId`
    * **component:** `TicketsIndex` **path:** `tickets`
      * **component:** `TicketIndexItem` **path:** `tickets/:ticketId`
