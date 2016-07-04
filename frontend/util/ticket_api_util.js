"use strict";

const TicketApiUtil = {

  fetchTickets(success, error) {
    $.ajax({
      url: `api/tickets`,
      method: 'GET',
      success: success,
      error (xhr) {
        const errors = xhr.responseJSON;

        error("tickets", errors);
      }
    });
  },

  getTicket(id, success, error) {
    $.ajax({
      url: `api/tickets/${id}`,
      method: 'GET',
      success: success,
      error (xhr) {
        const errors = xhr.responseJSON;

        error("tickets", errors);
      }
    });
  },
  createTicket(ticket, success, error) {
    $.ajax({
      url: `api/tickets`,
      method: 'POST',
      data: { ticket },
      success: success,
      error (xhr) {
        const errors = xhr.responseJSON;

        error("tickets", errors);
      }
    });
  },
  updateTicket(ticket, success, error) {
    $.ajax({
      url: `api/tickets/${ticket.id}`,
      method: 'PATCH',
      data: { ticket },
      success: success,
      error (xhr) {
        const errors = xhr.responseJSON;

        error("tickets", errors);
      }
    });
  },
  destroyTicket(id, success, error) {
    $.ajax({
      url: `api/tickets/${id}`,
      method: 'DELETE',
      success: success,
      error (xhr) {
        const errors = xhr.responseJSON;

        error("tickets", errors);
      }
    });
  }
};


module.exports = TicketApiUtil;
