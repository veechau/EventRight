const React = require('react');
const ReactRouter = require('react-router');
const GatheringStore = require('../../stores/gathering_store');

const TicketsIndexItem = React.createClass({
  render(){
    let currentTicket = this.props.ticket;
    let ticketedEvent = GatheringStore.find(currentTicket.gathering_id);
    return (
        <div  className="tickets-index-item"
              onClick={this._handleImgClick}>
            <img src={ticketedEvent.image}/>
        </div>
    );
  }
});

module.exports = TicketsIndexItem;
