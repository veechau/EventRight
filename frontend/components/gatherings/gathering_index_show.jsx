/* eslint max-len: "off" */

const React = require('react');
const GatheringStore = require('../../stores/gathering_store');
const GatheringActions = require('../../actions/gathering_actions');
const TicketStore = require('../../stores/ticket_store');
const TicketActions = require('../../actions/ticket_actions');
const BookmarkStore = require('../../stores/bookmark_store');
const BookmarkActions = require('../../actions/bookmark_actions');
const SessionStore = require('../../stores/session_store');
const SessionActions = require('../../actions/session_actions');
const CategoryStore = require('../../stores/category_store');
const CategoryActions = require('../../actions/category_actions');

const GatheringIndexShow = React.createClass({
  getInitialState(){
    let eventId;
    if (this.props.params) {
      eventId = this.props.params.eventId;
    } else {
      eventId = this.props.gathering.id;
    }
    return {  gathering_id: eventId,
              category: "",
              gathering: GatheringStore.find(eventId),
              ticketText: "Buy Ticket",
              bookmarkText: "Add Bookmark",
              purchased: false
            };
  },
  componentWillMount(){
    CategoryActions.fetchCategories();
  },
  componentDidMount(){
    this._bookmarkChange();
    this._ticketChange();
    this.categoryStoreListener = CategoryStore.addListener(this._categoryChange);
    this.bookmarkStoreListener = BookmarkStore.addListener(this._bookmarkChange);
    this.ticketStoreListener = TicketStore.addListener(this._ticketChange);
  },
  componentWillUnmount(){
    this.categoryStoreListener.remove();
    this.bookmarkStoreListener.remove();
    this.ticketStoreListener.remove();
  },
  _categoryChange(){
    this.setState({category: CategoryStore.find(this.state.gathering.category_id).title});
  },
  _bookmarkChange(){
    let buttonText = "Add Bookmark";
    let currentUser = SessionStore.currentUser();
    if (currentUser && this.state.gathering) {
      let bookmarks = BookmarkStore.findByUserId(currentUser.id);
      bookmarks.forEach( (bookmark) => {
        if (bookmark.gathering_id === this.state.gathering.id) {
          buttonText = "Remove Bookmark";
        }
      });
    }
    this.setState({ bookmarkText: buttonText });
  },
  _ticketChange(){
    let buttonText = "Buy Ticket";
    let currentUser = SessionStore.currentUser();
    if (currentUser && this.state.gathering) {
      let tickets = TicketStore.findByUserId(currentUser.id);
      tickets.forEach( (ticket) => {
        if (ticket.gathering_id === this.state.gathering.id) {
          buttonText = "Purchased!";
          this.setState({ purchased: true});
        }
      });
    }
    this.setState({ ticketText: buttonText });
  },
  _addTicket(e){
    e.preventDefault();
    let currentUser = SessionStore.currentUser();
    TicketActions.createTicket({attendee_id: currentUser.id, gathering_id: this.state.gathering_id});
  },
  _toggleBookmark(e){
    e.preventDefault();
    let currentUser = SessionStore.currentUser();
    if (this.state.bookmarkText === "Add Bookmark") {
      BookmarkActions.createBookmark({user_id: currentUser.id, gathering_id: this.state.gathering_id});
    } else {
      BookmarkActions.deleteBookmark(this.state.gathering_id, currentUser.id);
    }
  },
  _parseDate(date){
    const monthNames = [
      "January", "February", "March",
      "April", "May", "June", "July",
      "August", "September", "October",
      "November", "December"
    ];

    const parseDate = new Date(date);
    const day = parseDate.getDate();
    const monthIndex = parseDate.getMonth();
    const year = parseDate.getFullYear();

    return `${day} ${monthNames[monthIndex]} ${year})`;
  },
  render(){
    let buttons = "";

    if (SessionStore.isUserLoggedIn()) {
      buttons = (
        <div>
          <button id="buy-ticket"
          onClick={this._addTicket}
          disabled={this.state.purchased}>{this.state.ticketText}</button>
          <button id="add-bookmark"
          onClick={this._toggleBookmark}>{this.state.bookmarkText}</button>
        </div>
      );
    }
    return (

      <div className="gathering-index-show">
        <div className="gathering-index-show-left">

            <h1>{this.state.gathering.artist}</h1>
            <p>{this.state.gathering.location}</p>
            <p>{(this.state.gathering.start_date)} to {(this.state.gathering.end_date)}</p>
            <p>{this.state.gathering.description}</p>
            <p>{this.state.gathering.tix_price}</p>
            <p>{this.state.gathering.goal}</p>
            <p>{this.state.gathering.status}</p>

          </div>
          <div className="gathering-index-show-right">
          <img className="gathering-index-item-image" src={this.state.gathering.image}/>

          {buttons}

          <div>{this.state.category}</div>
        </div>
      </div>
    );
  }
});

module.exports = GatheringIndexShow;
