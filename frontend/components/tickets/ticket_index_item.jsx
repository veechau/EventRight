/* eslint max-len: "off" */

const React = require('react');
const Line = require('rc-progress').Line;
const hashHistory = require('react-router').hashHistory;
const GatheringStore = require('../../stores/gathering_store');
const GatheringActions = require('../../actions/gathering_actions');


const TicketsIndexItem = React.createClass({

  _handleImgClick(){
    hashHistory.push(`events/${this.props.ticket.gathering_id}`);
  },
  render(){
      let ticketedEvent = GatheringStore.find(this.props.ticket.gathering_id);

      let ticketedEventShow = "";
      if (ticketedEvent) {

        let percentage = (parseInt(100 * ticketedEvent.funds) / (ticketedEvent.goal)).toString();

        let containerStyle = {
          "width": "100%",
          "paddingTop": "15px",
          "paddingBottom": "10px"
        };

        ticketedEventShow = (
          <li className="tickets-index-item"
          onClick={this._handleImgClick}>
          <img src={ticketedEvent.image}/>
          <div className="ticket-index-item-info">
          <h1>{ticketedEvent.artist}</h1>
          <p>{ticketedEvent.location}</p>
          <div id="event-progress" style={containerStyle}>
              <Line percent={percentage}
                    strokeWidth="4"
                    trailWidth="4"
                    strokeColor="#F6682F"
                   />
          </div>
          <p className="event-fund">FUNDS TO DATE: ${ticketedEvent.funds}</p>
          <p className="event-fund">GOAL: ${ticketedEvent.goal}</p>
          <p className="event-fund">FUNDING STATUS: {ticketedEvent.status}</p>
          </div>
          </li>
        );
      }

    return (
      <div>
        {ticketedEventShow}
      </div>
    );
  }
});

module.exports = TicketsIndexItem;
