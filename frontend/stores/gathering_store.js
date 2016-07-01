"use strict";

const AppDispatcher = require('../dispatcher/dispatcher.js');
const Store = require('flux/utils').Store;
const GatheringConstants = require('../constants/session_constants');

const GatheringStore = new Store(AppDispatcher);

GatheringStore.all = function(){

};

module.exports = GatheringStore;
