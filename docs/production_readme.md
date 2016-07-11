# EventRight

[EventRight live][EventRight]

[EventRight]: http://www.eventright.us

EventRight is a full-stack web application inspired by EventBrite with a Kickstarter flair. This app allow its users to organize and/or contribute to an existing campaign to bring their favorite artists to their city. EventRight utilizes Ruby on Rails on the backend, a PostgreSQL database, and React.js with a Flux architectural framework on the frontend.  

## Features & Implementation

### Single-Page App

  EventRight is a single-page web application that delivers all it's content on one static page. All communication to the server is accomplished with API calls.

### Creating and Rendering Events

  On the database side, events are called 'gatherings' to avoid conflict with reserved words in Javascript. Gatherings is stored in one table in the database containing a column for `organizer_id`. This column links the user who created the event as the organizer for the event. The gatherings table has an `artist` and `location` column which will reveal the campaign's targeted artist and location. The `start_date` and `end_date` columns in the database are the campaign's start and end fund date, respectively. The `start_date` is set to the date that the event form is submitted to begin the campaign immediately. The `end_date` has custom validations on the model level in the back end to ensure that is is a future date. Each gatherig also has a `description`, `image`, `tix_price`, `fund`, `goal`, and `status` column. The `description` and `image` will inform other users about the campaign. The `tix_price` is the price for one general admission ticket and the `goal` is the amount of `funds` needed to bring the artist to the music venue in the `location` column. In addition, there is a `category_id` column in the gatherings table because every gathering belongs to a category (genre) and will be sorted by the genre corresponding to the event's artist.

### Categories

To represent the top genress, a categories table was implemented in the database with three columns: `title`, `description`, and `image`. These columns serve as descriptors for the categories.

### Bookmarks

Bookmarks are stored in the database through a join table with columns: `user_id` and `gathering_id`. Bookmarks belong to a gathering and a registered user. Bookmarks are maintained on the front end in the `BookmarkStore`. Signed in users may add and delete bookmarks from the front-end.

### Tickets

Tickets are stored in the database through a join table with columns: `attendee_id` and `gathering_id`. Tickets belong to a gathering and a registered user. Tickets are maintained on the front end in the `TicketStore`. Signed in users may choose to fund an event by purchasing a ticket but they are not allowed to remove funding from an event.  

## Future Directions for the Project

In addition to the features already implemented, I plan to continue work on this project.  The next steps for EventRight are outlined below.

### Search

Searching notes is a standard feature of EventRight. This search will look go through categories and gathering artist names and by venues.

### Maps

I also plan to allow users to search events based on venues via Google Maps Api.
