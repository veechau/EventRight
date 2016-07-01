"use strict";

const AppDispatcher = require('../dispatcher/dispatcher');
const GatheringConstants = require('../constants/gathering_constants');

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
      success(data){
        success(data);
      },
      error(xhr) {
        const errors = xhr.responseJSON;

        error("event", errors);
      }
    });
  },

  createGathering(gathering, success, error){
    $.ajax({
      url: '/api/gatherings',
      type: 'POST',
      data: gathering,
      success,
      error(xhr) {
        const errors = xhr.responseJSON;

        error("creating event", errors);
      }
    });
  },

  updateGathering(gathering, success, error){
    $.ajax({
      url: `/api/gatherings/${gathering.id}`,
      type: 'PATCH',
      data: gathering,
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
