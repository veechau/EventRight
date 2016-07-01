"use strict";

const AppDispatcher = require('../dispatcher/dispatcher.js');
const Store = require('flux/utils').Store;
const GatheringConstants = require('../constants/gathering_constants');

const GatheringStore = new Store(AppDispatcher);

let _gatherings = {};

GatheringStore.all = function(){
  return Object.keys(_gatherings).map( (gatheringId) => {
    return _gatherings[gatheringId];
  });
};

GatheringStore.find = function(gatheringId){
  return _gatherings[gatheringId];
};

const resetGatherings = function(gatherings) {
  _gatherings = {};
  gatherings.forEach( (gathering) => {
    gatherings[gathering.id] = gathering;
  });
};

const setGathering = function(gathering) {
  _gatherings[gathering.id] = gathering;
};

const deleteGathering = function(gathering) {
  delete _gatherings[gathering.id];
};

GatheringStore.__onDispatch = payload => {
  switch (payload.actionType) {
    case GatheringConstants.EVENTS_RECEIVED:

    GatheringStore.__emitChange();
      break;
    case GatheringConstants.EVENT_RECEIVED:

    GatheringStore.__emitChange();
      break;
    case GatheringConstants.EVENT_REMOVED:

    GatheringStore.__emitChange();
      break;
  }
};

module.exports = GatheringStore;
