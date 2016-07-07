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
    return { gathering_id: eventId, category: "", gathering: GatheringStore.find(eventId) };
  },
  componentWillMount(){
    CategoryActions.fetchCategories();
  },
  componentDidMount(){
    this.categoryStoreListener = CategoryStore.addListener(this._categoryChange);
    this.gatheringStoreListener = GatheringStore.addListener(this._gatheringChange);
    this.ticketStoreListener = TicketStore.addListener(this._ticketChange);
  },
  componentWillUnmount(){
    this.categoryStoreListener.remove();
    this.gatheringStoreListener.remove();
    this.ticketStoreListener.remove();
  },
  _categoryChange(){
    this.setState({category: CategoryStore.find(this.state.gathering.category_id).title});
  },
  _gatheringChange(){
    this.setState({gathering: {fund: (this.state.gathering.funds + this.state.gathering.tix_price)}});
  },
  _ticketChange(){

  },
  _addTicket(e){
    e.preventDefault();
    // console.log(this.state.gathering.funds);
    let currentUser = SessionStore.currentUser();
    // console.log(currentUser);
    TicketActions.createTicket({attendee_id: currentUser.id, gathering_id: this.state.gathering_id});
    // console.log(currentUser);
    // console.log(this.state.gathering.tix_price);
    // console.log(this.state.gathering.funds);
  },
  _addBookmark(e){

    e.preventDefault();
    let currentUser = SessionStore.currentUser();
    BookmarkActions.createBookmark({user_id: currentUser.id, gathering_id: this.state.gathering_id});
  //   $('#add-bookmark').text("Remove Bookmark");
  //   $('#add-bookmark').change(this._removeBookmark);
  // },
  // _removeBookmark(e) {
  //   $('#add-bookmark').text("Add Bookmark");
  //   $('#add-bookmark').change(this._addBookmark);
  },
  render(){
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
          <button id="buy-ticket"
                  onClick={this._addTicket}
                  disabled={!SessionStore.isUserLoggedIn()}>Buy Ticket</button>
          <button id="add-bookmark"
                  onClick={this._addBookmark}
                  disabled={!SessionStore.isUserLoggedIn()}>Bookmark Event</button>
          <div>{this.state.category}</div>
        </div>
      </div>
    );
  }
});

module.exports = GatheringIndexShow;
