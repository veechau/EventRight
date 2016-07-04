"use strict";

const AppDispatcher = require('../dispatcher/dispatcher');
const Store = require('flux/utils').Store;
const TicketConstants = require('../constants/ticket_constants');

const TicketStore = new Store(AppDispatcher);

let _tickets = {};

TicketStore.all = function(){
  return Object.keys(_tickets).map( (ticketId) => {
    return _tickets[ticketId];
  });
};

TicketStore.find = function(ticketId){
  return _tickets[ticketId];
};

const resetTickets = function(tickets) {
  _tickets = {};
  tickets.forEach( (ticket) => {
    _tickets[ticket.id] = ticket;
  });
};

const setTicket = function(ticket) {
  _tickets[ticket.id] = ticket;
};

const deleteTicket = function(ticket) {
  delete _tickets[ticket.id];
};

TicketStore.__onDispatch = payload => {
  switch (payload.actionType) {
    case TicketConstants.TICKETS_RECEIVED:
    resetTickets(payload.tickets);
    TicketStore.__emitChange();
      break;
    case TicketConstants.TICKET_RECEIVED:
    setTicket(payload.ticket);
    TicketStore.__emitChange();
      break;
    case TicketConstants.TICKET_REMOVED:
    deleteTicket(payload.ticket);
    TicketStore.__emitChange();
      break;
  }
};

module.exports = TicketStore;
