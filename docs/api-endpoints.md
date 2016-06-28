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

### Events

- `GET /api/events`
  - Events index/search
  - accepts `category` query param to list notes by tag
- `POST /api/events`
- `GET /api/events/:id`
- `PATCH /api/events/:id`
- `DELETE /api/events/:id`

### Categories

- `GET /api/categories`
- `POST /api/categories`
- `GET /api/categories/:id`
- `PATCH /api/categories/:id`
- `DELETE /api/categories/:id`
- `GET /api/categories/:id/events`
  - index of all events bounded to that category

### Bookmarks

- Bookmarked events will be included in the user show page
- `GET /api/bookmarks` current user and event passed in as params
- `POST /api/bookmarks/`: add bookmarks to user bookmarks by eventId
- `DELETE /api/bookmarks/:eventId`: remove bookmark from user bookmarks by eventId


### Tickets
- Purchased events will be included in the user show page
- `GET /api/tickets` current user and event passed in as params
- `POST /api/tickets/`: add ticket to user bookmarks by eventId
- `DELETE /api/tickets/:eventId`: remove ticket from user tickets by eventId
