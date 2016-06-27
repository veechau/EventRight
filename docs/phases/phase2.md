# Phase 2: Flux Architecture and Event CRUD (2 days)

## Rails
### Models
### Controllers

### Views

## Flux
### Views (React Components)
* EventsIndex
  - EventsIndexItem
* EventForm

### Stores
* Event

### Actions
* ApiActions.receiveAllEvents -> triggered by ApiUtil
* ApiActions.receiveSingleEvent
* ApiActions.deleteEvent
* EventActions.fetchAllEvents -> triggers ApiUtil
* EventActions.fetchSingleEvent
* EventActions.createEvent
* EventActions.editEvent
* EventActions.destroyEvent

### ApiUtil
* ApiUtil.fetchAllEvents
* ApiUtil.fetchSingleEvent
* ApiUtil.createEvent
* ApiUtil.editEvent
* ApiUtil.destroyEvent

## Gems/Libraries
* Flux Dispatcher (npm)
* Twitter Bootstrap
