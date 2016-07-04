const React = require('react');
const ReactRouter = require('react-router');

const TicketsIndexItem = React.createClass({
  render(){
    return (
        <div className="tickets-index-item">
          <p>{this.props.ticket.attendee_id}</p>
          <p>{this.props.ticket.gathering_id}</p>
        </div>
    );
  }
});

module.exports = TicketsIndexItem;
