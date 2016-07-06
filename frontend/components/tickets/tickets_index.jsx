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
    if (this.state.tickets.length === 0){
      return (
        <div>You have not funded any events :(</div>
      );
    } else {
      return (
        <ul>
          {this.state.tickets.map( (ticket) => {
            return (
                <TicketIndexItem
                  key={ticket.id}
                  ticket={ticket} />
            );
          })}
        </ul>
      );
    }
  }
});

module.exports = TicketsIndex;
