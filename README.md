# EventRight

[Heroku link][heroku] **Note:** This should be a link to your production site

[heroku]: http://www.herokuapp.com

## Minimum Viable Product

EventRight is a web application inspired by Eventbrite that will be build using Ruby on Rails and React.js.  By the end of Week 9, this app will, at a minimum, satisfy the following criteria:

- [ ] Hosting on Heroku
- [ ] New account creation, login, and guest/demo login
- [ ] A production README, replacing this README (**NB**: check out the [sample production README](docs/production_readme.md) -- you'll write this later)
- [ ] Events
  - [ ] Events index page sorted by most recently created
  - [ ] Only the events that are within current user's city is included
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

- [ ] create new project
- [ ] create `User` model
- [ ] authentication backend setup
- [ ] create StaticPages controller and root view
- [ ] set up webpack & flux scaffold with skeleton files
- [ ] setup APIUtil to interact with the API
- [ ] set up flux cycle for frontend auth
- [ ] user signup/signin pages
- [ ] blank landing page after signin
- [ ] style signin/signup components

### Phase 2: Events Model, API, and basic APIUtil (1 day, W1 W 6pm)

**Objective:** Events can be created, read, edited and destroyed through
the API.

- [ ] create `Event` model
- [ ] seed the database with a small amount of test data
- [ ] CRUD API for events (`EventsController`)
- [ ] jBuilder views for events
- [ ] test out API interaction in the console.
- [ ] basic styling for existing components

### Phase 3: Flux Architecture and Router (1.5 days, W1 Th 10pm)

**Objective:** Events can be created, read, edited and destroyed with the
user interface.

- [ ] setup the flux loop with skeleton files
- [ ] setup React Router
- implement each note component, building out the flux loop as needed.
  - [ ] `EventsIndex`
  - [ ] `EventIndexItem`
  - [ ] `EventForm`

### Phase 4: Tickets Model, API, and basic APIUtil (1.5 day, W1 F 10pm)

  **Objective:** Tickets can be created and destroyed through
  the API.

  - [ ] create `Ticket` model
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

- [ ] create `Category` model
- build out API, Flux loop, and components for:
  - [ ] Category CRUD
  - [ ] adding events requires a category
  - [ ] moving events to a different category
  - [ ] viewing events by category
- Use CSS to style new views

Phase 5 adds organization to the Events. Events belong to a Category,
which has its own `Index` view.

### Phase 7: Bookmarks (1 days, W2 Th 12pm)

**Objective:** Events can be bookmarked, and can be removed from bookmarked list.

- [ ] create `Bookmark` model and join table
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

[phase-one]: docs/phases/phase1.md
[phase-two]: docs/phases/phase2.md
[phase-three]: docs/phases/phase3.md
[phase-four]: docs/phases/phase4.md
[phase-five]: docs/phases/phase5.md
