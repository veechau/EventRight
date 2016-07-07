const React = require('react');
const TicketStore = require('../../stores/ticket_store');
const TicketActions = require('../../actions/ticket_actions');
const TicketIndexItem = require('./ticket_index_item');
const GatheringActions = require('../../actions/gathering_actions');
const GatheringStore = require('../../stores/gathering_store');

const TicketsIndex = React.createClass({
  getInitialState(){
    return { tickets: [] };
  },

  componentDidMount(){
    this.ticketListener = TicketStore.addListener(this._onChange);
    this.gatheringListener = GatheringStore.addListener(this.forceUpdate.bind(this));
    TicketActions.fetchTickets();
    GatheringActions.fetchGatherings();
  },

  componentWillUnmount(){
    this.ticketListener.remove();
    this.gatheringListener.remove();
  },

  _onChange(){
    this.setState({ tickets: TicketStore.all() });
  },

  render(){
    if (this.state.tickets.length === 0){
      return (
        <div>You didn't fund any events! :(</div>
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
