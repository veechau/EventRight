# API Endpoints

## HTML API

### Root

- `GET /` - loads React web app

### Users

- `GET /api/users/new`
- `POST /api/users`
- `PATCH /api/users`

### Session

- `GET /api/session/new`
- `POST /api/session`
- `DELETE /api/session`

## JSON API

### Gatherings

- `GET /api/gatherings`
- `POST /api/gatherings`
- `GET /api/gatherings/:gatheringId`
- `PATCH /api/gatherings/:gatheringId`
- `DELETE /api/gatherings/:gatheringId`

### Categories

- `GET /api/categories`
- `POST /api/categories`
- `GET /api/categories/:categoryId`
  - show page includes index of all events bounded to that category
- `PATCH /api/categories/:categoryId`
- `DELETE /api/categories/:categoryId`

### Bookmarks

- Bookmarked events will be included in the user show page
- `GET /api/bookmarks` current user and event passed in as params
- `POST /api/bookmarks/`: add bookmarks to user bookmarks by eventId
- `DELETE /api/bookmarks/:gatheringId`: remove bookmark from user bookmarks by gatheringId


### Tickets
- Purchased events will be included in the user show page
- `GET /api/tickets` current user and event passed in as params
- `POST /api/tickets/`: add ticket to user bookmarks by eventId
- `DELETE /api/tickets/:gatheringId`: remove ticket from user tickets by gatheringId
