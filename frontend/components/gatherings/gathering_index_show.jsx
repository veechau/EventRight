/* eslint max-len: "off" */

const React = require('react');
const Line = require('rc-progress').Line;
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
const SessionModal = require('../auth/session_modal');
const hashHistory = require('react-router').hashHistory;

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
              ticketText: "Reserve Ticket",
              bookmarkText: "Add Bookmark",
              purchased: false,
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
    let buttonText = "Reserve Ticket";
    let currentUser = SessionStore.currentUser();
    if (currentUser && this.state.gathering) {
      let tickets = TicketStore.findByUserId(currentUser.id);
      tickets.forEach( (ticket) => {
        if (ticket.gathering_id === this.state.gathering.id) {
          buttonText = "Tickets Reserved!";
          GatheringStore.updateFund(this.state.gathering);
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
  _handleImgClick(){
    hashHistory.push(`events/${this.state.gathering.id}`);
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

    return `${day} ${monthNames[monthIndex]} ${year}`;
  },
  _directLogIn(){
    hashHistory.push('/login');
  },
  render(){
    let percentage = (parseInt(100 * this.state.gathering.funds) / (this.state.gathering.goal)).toString();

    let containerStyle = {
      "width": "100%"
    };

    let buttons = (
      <div className="gathering-buttons">
        <button
          className="gathering-button"
          disabled={false}
          onClick={this._directLogIn}>
          Reserve Ticket
        </button>
        <button
          className="gathering-button"
          disabled={false}
          onClick={this._directLogIn}>
          Add Bookmark
        </button>
      </div>
    );

    if (SessionStore.isUserLoggedIn()) {
      buttons = (
        <div className="gathering-buttons">
          <button className="gathering-button"
          onClick={this._addTicket}
          disabled={this.state.purchased}>{this.state.ticketText}</button>
          <button className="gathering-button"
          onClick={this._toggleBookmark}>{this.state.bookmarkText}</button>
        </div>
      );
    }
    return (

      <div className="gathering-index-show">
        <div className="gathering-index-show-left">

            <h1 id="event-header">{this.state.gathering.artist}</h1>
            <p id="event-location">{this.state.gathering.location}</p>
            <div id="event-description">
            <p>{this.state.gathering.description}</p>
            </div>
            <p className="event-fund">Event Progress</p>
            <div id="event-progress" style={containerStyle}>
                <Line percent={percentage}
                      strokeWidth="4"
                      trailWidth="4"
                      strokeColor="#F6682F"
                     />
            </div>
            <p className="event-fund">GA TICKET: ${this.state.gathering.tix_price}</p>
            <p className="event-fund">FUNDS TO DATE: ${this.state.gathering.funds}</p>
            <p className="event-fund">GOAL: ${this.state.gathering.goal}</p>
            <p className="event-fund">CAMPAIGN DATE: {this._parseDate(this.state.gathering.start_date)} until {this._parseDate(this.state.gathering.end_date)}</p>
            <p className="event-fund">FUNDING STATUS: {this.state.gathering.status}</p>

          </div>
          <div className="gathering-index-show-right">
          <img  className="gathering-index-item-image"
                onClick={this._handleImageClick}
                src={this.state.gathering.image}/>

          {buttons}

          <div className="event-genre">Genre: {this.state.category}</div>
        </div>
      </div>
    );
  }
});

module.exports = GatheringIndexShow;
