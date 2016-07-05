const React = require('react');
const TicketStore = require('../../stores/ticket_store');
const TicketActions = require('../../actions/ticket_actions');
const TicketIndexItem = require('./ticket_index_item');

const TicketsIndex = React.createClass({
  getInitialState(){
    return { tickets: [] };
  },

  componentDidMount(){
    this.ticketListener = TicketStore.addListener(this._onChange);
    TicketActions.fetchTickets();
  },

  componentWillUnmount(){
    this.ticketListener.remove();
  },

  _onChange(){
    this.setState({ tickets: TicketStore.all() });
  },

  render(){
    return (
      <div className="tickets-index">
      TICKETS
        <ul>
          {this.state.tickets.map( (ticket) => {
            return (
              <li key={ticket.id}>
                <TicketIndexItem
                  ticket={ticket} />
              </li>
            );
          })}
          END OF TICKETS
        </ul>
      </div>
    );
  }
});

module.exports = TicketsIndex;
