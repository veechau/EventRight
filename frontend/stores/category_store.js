"use strict";

const AppDispatcher = require('../dispatcher/dispatcher');
const Store = require('flux/utils').Store;
const CategoryConstants = require('../constants/category_constants');

const CategoryStore = new Store(AppDispatcher);

let _gatherings = {};

CategoryStore.all = function(){
  return Object.keys(_gatherings).map( (gatheringId) => {
    return _gatherings[gatheringId];
  });
};

CategoryStore.find = function(gatheringId){
  return _gatherings[gatheringId];
};

const resetCategories = function(gatherings) {
  _gatherings = {};
  gatherings.forEach( (gathering) => {
    gatherings[gathering.id] = gathering;
  });
};

const setCategory = function(gathering) {
  _gatherings[gathering.id] = gathering;
};

const deleteCategory = function(gathering) {
  delete _gatherings[gathering.id];
};

CategoryStore.__onDispatch = payload => {
  switch (payload.actionType) {
    case CategoryConstants.CATEGORIES_RECEIVED:

    CategoryStore.__emitChange();
      break;
    case CategoryConstants.CATEGORY_RECEIVED:

    CategoryStore.__emitChange();
      break;
    case CategoryConstants.CATEGORY_REMOVED:

    CategoryStore.__emitChange();
      break;
  }
};

module.exports = CategoryStore;
