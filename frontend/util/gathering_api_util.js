"use strict";

const GatheringApiUtil = {

  fetchGatherings(success, error){
    $.ajax({
      url: '/api/gatherings',
      type: 'GET',
      success,
      error(xhr) {
        const errors = xhr.responseJSON;

        error("events", errors);
      }
    });
  },

  getGathering(id, success, error){
    $.ajax({
      url: `/api/gatherings/${id}`,
      type: 'GET',
      success,
      error(xhr) {
        const errors = xhr.responseJSON;

        error("event", errors);
      }
    });
  },

  createGathering(gatheringInfo, success, errorCB){
    $.ajax({
      url: '/api/gatherings',
      type: 'POST',
      data: {gathering: gatheringInfo},
      success,
      error(xhr) {
        const errors = xhr.responseJSON;
        errorCB("creating event", errors);
      }
    });
  },

  updateGathering(gatheringInfo, success, error){
    $.ajax({
      url: `/api/gatherings/${gatheringInfo.id}`,
      type: 'PATCH',
      data: {gathering: gatheringInfo},
      success,
      error(xhr) {
        const errors = xhr.responseJSON;

        error("editing event", errors);
      }
    });
  },

  deleteGathering(id, success, error){
    $.ajax({
      url: `/api/gatherings/${id}`,
      type: 'DELETE',
      success,
      error(xhr) {
        const errors = xhr.responseJSON;

        error("deleting event", errors);
      }
    });
  },
};

module.exports = GatheringApiUtil;
