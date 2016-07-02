"use strict";

const AppDispatcher = require('../dispatcher/dispatcher');
const GatheringConstants = require('../constants/gathering_constants');
const GatheringApiUtil = require('../util/gathering_api_util');
const ErrorActions = require('./error_actions');
const hashHistory = require('react-router').hashHistory;

const GatheringActions = {

  // Client-side

  fetchGatherings(){
    GatheringApiUtil.fetchGatherings(
      GatheringActions.receiveAll,
      ErrorActions.setErrors);
  },

  getGathering(id){
    GatheringApiUtil.getGathering(
      id,
      GatheringActions.receiveGathering,
      ErrorActions.setErrors);
  },

  createGathering(gathering){
    GatheringApiUtil.createGathering(
      gathering,
      GatheringActions.receiveGathering,
      ErrorActions.setErrors);
  },

  editGathering(gathering){
    GatheringApiUtil.updateGathering(
      gathering,
      GatheringActions.receiveGathering,
      ErrorActions.setErrors);
  },

  deleteGathering(id){
    GatheringApiUtil.deleteGathering(
      id,
      GatheringActions.removeGathering,
      ErrorActions.setErrors);
  },

  // Server-side
  receiveAll(gatherings){
    AppDispatcher.dispatch({
      actionType: GatheringConstants.GATHERINGS_RECEIVED,
      gatherings: gatherings
    });
  },
  receiveGathering(gathering){
    AppDispatcher.dispatch({
      actionType: GatheringConstants.GATHERING_RECEIVED,
      gathering: gathering
    });
  },
  removeGathering(gathering){
    AppDispatcher.dispatch({
      actionType: GatheringConstants.GATHERING_REMOVED,
      gathering: gathering
    });
  }

};

module.exports = GatheringActions;
