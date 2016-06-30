"use strict";

const AppDispatcher = require('../dispatcher/dispatcher.js');
const Store = require('flux/utils').Store;
const SessionConstants = require('../constants/session_constants');

const SessionStore = new Store(AppDispatcher);

let _currentUser = {};
//REMOVE THIS
let _currentUserHasBeenFetched = false;

const _login = function(currentUser) {
  _currentUser = currentUser;
  _currentUserHasBeenFetched = true;
  window.currentUser = currentUser;
};

const _logout = function() {
  _currentUser = {};
  _currentUserHasBeenFetched = true;
  window.currentUser = undefined;
};

SessionStore.__onDispatch = payload => {
  switch(payload.actionType) {
    case SessionConstants.LOGIN:
      _login(payload.currentUser);
      SessionStore.__emitChange();
      break;
    case SessionConstants.LOGOUT:
    	_logout();
      SessionStore.__emitChange();
      break;
  }
};

SessionStore.currentUser = function() {
  return Object.assign({}, _currentUser);
};

//REMOVE THIS
SessionStore.currentUserHasBeenFetched = function () {
  return Boolean(_currentUserHasBeenFetched);
};

SessionStore.isUserLoggedIn = function() {
  return Boolean(_currentUser.id);
};

module.exports = SessionStore;
