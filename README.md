# EventRight

[Heroku link][heroku] **Note:** This should be a link to your production site

[heroku]: https://eventright.herokuapp.com/

## Minimum Viable Product

EventRight is a web application inspired by Eventbrite with a crowdfunding flair that will be built using Ruby on Rails and React.js. By the end of Week 9, this app will, at a minimum, satisfy the following criteria:

- [x] Hosting on Heroku
- [x] New account creation, login, and guest/demo login
- [ ] A production README, replacing this README (**NB**: check out the [sample production README](docs/production_readme.md) -- you'll write this later)
- [ ] Events
  - [ ] Events index page sorted by crowdfunding status (in_progress, incomplete and completed)
  - [ ] Only the events that are within current user's city are included
  - [ ] Bonus: Events displayed are based off of user's subscribed categories/bookmarks
- [ ] Registration/Tickets
  - [ ] Only registered/signed-in users are able to create new events
  - [ ] Registered/signed-in users may add tickets to their cart
  - [ ] User Dashboard shows current user's purchased events
  - [ ] Bonus: Warn user of conflicting times/events
- [ ] Categories
  - [ ] Events and Categories have a many-to-many relationship
  - [ ] Categories will be used to sort, filter and search events
- [ ] Bookmark events
  - [ ] Registered/signed-in users can bookmark events
  - [ ] User Dashboard shows current user's bookmarked events
  - [ ] Adequate CSS styling

## Design Docs
* [View Wireframes][views]
* [React Components][components]
* [Flux Cycles][flux-cycles]
* [API endpoints][api-endpoints]
* [DB schema][schema]

[views]: docs/views.md
[components]: docs/components.md
[flux-cycles]: docs/flux-cycles.md
[api-endpoints]: docs/api-endpoints.md
[schema]: docs/schema.md

## Implementation Timeline

### Phase 1: Backend setup and Front End User Authentication (1.5 day, W1 Tu 10pm)

**Objective:** Functioning rails project with front-end Authentication

- [x] create new project
- [x] create `User` model
- [x] authentication backend setup
- [x] create StaticPages controller and root view
- [x] set up webpack & flux scaffold with skeleton files
- [x] setup APIUtil to interact with the API
- [x] set up flux cycle for frontend auth
- [x] user signup/signin pages
- [x] blank landing page after signin
- [x] style signin/signup components

### Phase 2: Events Model, API, and basic APIUtil (1 day, W1 W 6pm)

**Objective:** Events can be created, read, edited and destroyed through
the API.

- [x] create `Event` model
- [x] seed the database with a small amount of test data
- [x] CRUD API for events (`EventsController`)
- [x] jBuilder views for events
- [x] test out API interaction in the console.
- [ ] basic styling for existing components

### Phase 3: Flux Architecture and Router (1.5 days, W1 Th 10pm)

**Objective:** Events can be created, read, edited and destroyed with the
user interface.

- [ ] setup the flux loop with skeleton files
- [x] setup React Router
- implement each note component, building out the flux loop as needed.
  - [x] `EventsIndex`
  - [x] `EventIndexItem`
  - [ ] `EventForm`

### Phase 4: Tickets Model, API, and basic APIUtil (1.5 day, W1 F 10pm)

  **Objective:** Tickets can be created and destroyed through
  the API.

  - [x] create `Ticket` model
  - [ ] CRUD API for events (`TicketsController`)
  - [ ] jBuilder views for tickets
  - [ ] test out API interaction in the console.
  - [ ] basic styling for existing components
  - [ ] setup the flux loop with skeleton files
  - [ ] setup React Router
  - implement each note component, building out the flux loop as needed.
    - [ ] `TicketsIndex`
    - [ ] `TicketIndexItem`

### Phase 5: User Landing Page (1.5 day, W1 F 10pm)

  **Objective:** User Landing show current user's bookmarked events and purchased events

  - [ ] Add BookmarkIndex to landing page
  - [ ] Add TicketsIndex to landing page
  - [ ] CRUD API for events (`TicketsController`)

### Phase 6: Categories (1 day, W2 M 6pm)

**Objective:** Events belong to Categories, and can be viewed by Category.

- [x] create `Category` model
- build out API, Flux loop, and components for:
  - [x] Category CRUD
  - [ ] adding events requires a category
  - [ ] moving events to a different category
  - [ ] viewing events by category
- Use CSS to style new views

Phase 5 adds organization to the Events. Events belong to a Category,
which has its own `Index` view.

### Phase 7: Bookmarks (1 days, W2 Th 12pm)

**Objective:** Events can be bookmarked, and can be removed from bookmarked list.

- [x] create `Bookmark` model and join table
- build out API, Flux loop, and components for:
  - [ ] fetching bookmarks for current user
  - [ ] adding bookmarks to events
  - [ ] removing bookmarks to events
- [ ] Style new elements

### Phase 8: Styling Cleanup and Seeding (1 day, W2 F 6pm)

**objective:** Make the site feel more cohesive and awesome.

- [ ] Get feedback on my UI from others
- [ ] Refactor HTML classes & CSS rules
- [ ] Add modals, transitions, and other styling flourishes.

### Bonus Features (TBD)
- [ ] Display events from search results as markers on a map
- [ ] Pagination / infinite scroll for Events Index
- [ ] Search by events or categories
- [ ] Set reminders on events
- [ ] add artists show page

[phase-one]: docs/phases/phase1.md
[phase-two]: docs/phases/phase2.md
[phase-three]: docs/phases/phase3.md
[phase-four]: docs/phases/phase4.md
[phase-five]: docs/phases/phase5.md
