"use strict";

const AppDispatcher = require('../dispatcher/dispatcher');
const TicketConstants = require('../constants/ticket_constants');
const TicketApiUtil = require('../util/ticket_api_util');
const ErrorActions = require('./error_actions');

const TicketActions = {
  // Client-side

  fetchTickets(){
    TicketApiUtil.fetchTickets(
      TicketActions.receiveAll,
      ErrorActions.setErrors);
  },

  getTicket(id){
    TicketApiUtil.getTicket(
      id,
      TicketActions.receiveTicket,
      ErrorActions.setErrors);
  },

  createTicket(ticket){
    TicketApiUtil.createTicket(
      ticket,
      TicketActions.receiveTicket,
      ErrorActions.setErrors);
  },

  editTicket(ticket){
    TicketApiUtil.updateTicket(
      ticket,
      TicketActions.receiveTicket,
      ErrorActions.setErrors);
  },

  deleteTicket(id){
    TicketApiUtil.deleteTicket(
      id,
      TicketActions.removeTicket,
      ErrorActions.setErrors);
  },

  // Server-side
  receiveAll(tickets){
    AppDispatcher.dispatch({
      actionType: TicketConstants.TICKETS_RECEIVED,
      tickets: tickets
    });
  },
  receiveTicket(ticket){
    AppDispatcher.dispatch({
      actionType: TicketConstants.TICKET_RECEIVED,
      ticket: ticket
    });
  },
  removeTicket(ticket){
    AppDispatcher.dispatch({
      actionType: TicketConstants.TICKET_REMOVED,
      ticket: ticket
    });
  }

};

module.exports = TicketActions;
