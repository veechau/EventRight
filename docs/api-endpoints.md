# API Endpoints

## HTML API

### Root

- `GET /` - loads React web app

### Users

- `GET /users/new`
- `POST /users`
- `PATCH /users`

### Session

- `GET /session/new`
- `POST /session`
- `DELETE /session`

## JSON API

### Events

- `GET /api/events`
  - Events index/search
  - accepts `category` query param to list notes by tag
- `POST /api/events`
- `GET /api/events/:id`
- `PATCH /api/events/:id`
- `DELETE /api/events/:id`

### Notebooks

- `GET /api/categories`
- `POST /api/categories`
- `GET /api/categories/:id`
- `PATCH /api/categories/:id`
- `DELETE /api/categories/:id`
- `GET /api/categories/:id/events`
  - index of all events bounded to that category

### Bookmarks

- Bookmarked events will be included in the user show page
- `GET /api/users/:userId/bookmarks`
- `POST /api/users/:userId/bookmarks/`: add bookmarks to user bookmarks by eventId
- `DELETE /api/users/:userId/bookmarks/:eventId`: remove bookmark from user bookmarks by eventId


### Bookmarks
- Purchased events will be included in the user show page
- `GET /api/users/:userId/tickets`
- `POST /api/users/:userId/tickets/`: add ticket to user bookmarks by eventId
- `DELETE /api/users/:userId/bookmarks/:eventId`: remove ticket from user tickets by eventId
