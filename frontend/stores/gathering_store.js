"use strict";

const AppDispatcher = require('../dispatcher/dispatcher');
const Store = require('flux/utils').Store;
const GatheringConstants = require('../constants/gathering_constants');
const hashHistory = require('react-router').hashHistory;


const GatheringStore = new Store(AppDispatcher);

let _gatherings = {};

GatheringStore.all = function(){
  return Object.keys(_gatherings).map( (gatheringId) => {
    return _gatherings[gatheringId];
  });
};

GatheringStore.findByCategoryId = function(catId){
  let _selectedGatherings = [];
  Object.keys(_gatherings).forEach( (gatheringId) => {
    if (_gatherings[gatheringId].category_id == catId) {
      _selectedGatherings.push(_gatherings[gatheringId]);
    }
  });
  return _selectedGatherings;
},

GatheringStore.find = function(gatheringId){
  return _gatherings[gatheringId];
};

GatheringStore.updateFund = function(gathering){
  _gatherings[gathering.id].funds += _gatherings[gathering.id].tix_price;
};


const resetGatherings = function(gatherings) {
  _gatherings = {};
  gatherings.forEach( (gathering) => {
    _gatherings[gathering.id] = gathering;
  });
};

const setGathering = function(gathering) {
  _gatherings[gathering.id] = gathering;
  hashHistory.push(`/events/${gathering.id}`);
};

const deleteGathering = function(gathering) {
  delete _gatherings[gathering.id];
};

GatheringStore.__onDispatch = payload => {
  switch (payload.actionType) {
    case GatheringConstants.GATHERINGS_RECEIVED:
      resetGatherings(payload.gatherings);
      GatheringStore.__emitChange();
    break;
    case GatheringConstants.GATHERING_RECEIVED:
      setGathering(payload.gathering);
      GatheringStore.__emitChange();
    break;
    case GatheringConstants.GATHERING_REMOVED:
      deleteGathering(payload.gathering);
      GatheringStore.__emitChange();
    break;
    case GatheringConstants.ERROR:
      console.log(payload.errors);
      GatheringStore.__emitChange();
    break;
  }
};

module.exports = GatheringStore;
