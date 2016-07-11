# Phase 2: Flux Architecture and Gathering CRUD (2 days)

## Rails
### Models
### Controllers

### Views

## Flux
### Views (React Components)
* GatheringsIndex
  - GatheringsIndexItem
* GatheringForm

### Stores
* Gathering

### Actions
* ApiActions.fetchGatherings -> triggered by ApiUtil
* ApiActions.getGathering
* ApiActions.deleteGathering
* GatheringActions.fetchGatherings -> triggers ApiUtil
* GatheringActions.getGathering
* GatheringActions.createGathering
* GatheringActions.editGathering
* GatheringActions.destroyGathering

### ApiUtil
* ApiUtil.fetchAllGatherings
* ApiUtil.fetchSingleGathering
* ApiUtil.createGathering
* ApiUtil.editGathering
* ApiUtil.destroyGathering

## Gems/Libraries
* Flux Dispatcher (npm)
