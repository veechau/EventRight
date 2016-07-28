const React = require('react');
const Modal = require('boron/DropModal');

const TicketStore = require('../../stores/ticket_store');
const TicketActions = require('../../actions/ticket_actions');
const TicketIndexItem = require('./ticket_index_item');
const GatheringActions = require('../../actions/gathering_actions');
const GatheringStore = require('../../stores/gathering_store');
const SessionStore = require('../../stores/session_store');

const modalStyle = {
  width: '80%',
  height: '80%',
  backgroundColor: 'fade(#4B4E4F, 80%)',
  opacity: '0.3',
};

const backdropStyle = {
  width: '100%',
  border: '0px solid transparent',
};

const contentStyle = {
  width: '100%',
  margin: 'auto',
  marginTop: '20px',
  // border: '1px solid #D2D6DF',
  borderRadius: '8px'
};


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
    this.setState({
      tickets: TicketStore.findByUserId(SessionStore.currentUser().id
    )});
  },

  showModal(){
      this.refs.modal.show();
  },
  hideModal(){
      this.refs.modal.hide();
  },

  render(){
    let content = (
      <div className="user-dash-text">
        <h1>My Tickets</h1>
        <div>You didn't fund any events! :(</div>
      </div>
    );
    if (this.state.tickets.length > 0){
      content = (
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
    return (
      <div className="user-dash-link">
        <div onClick={this.showModal}>View My Tickets</div>
        <Modal  ref="modal"
                className="user-dash-modal"
                modalStyle={modalStyle}
                contentStyle={contentStyle}>
          <div className="user-dash-modal-content">
            <div
              className="user-dash-modal-x"
              onClick={this.hideModal}>X</div>
              <h1 className="user-dash-text">My Reserved Tickets</h1>
              {content}
          </div>
        </Modal>
      </div>
    );
  }
});

module.exports = TicketsIndex;
