/* eslint max-len: "off" */

const React = require('react');
const GatheringStore = require('../../stores/gathering_store');
const GatheringActions = require('../../actions/gathering_actions');

const GatheringIndexShow = React.createClass({
  getInitialState(){
    return { gathering: {} };
  },
  componentWillMount(){
    GatheringActions.getGathering(this.props.params.eventId);
  },
  componentDidMount(){
    this.gatheringIndexShowListener = GatheringStore.addListener(this._onChange);
  },
  componentWillUnmount(){
    this.gatheringIndexShowListener.remove();
  },
  _onChange(){
    this.setState({ gathering: GatheringStore.find(this.props.params.eventId) });
  },
  render(){
    return (
      <div className="gathering-index-show">
        <div className="gathering-index-show-left">

            <h1>{this.state.gathering.artist}</h1>
            <p>{this.state.gathering.location}</p>
            <p>{Date.parse(this.state.gathering.start_date)} to {Date.parse(this.state.gathering.end_date)}</p>
            <p>{this.state.gathering.description}</p>

          </div>
          <div className="gathering-index-show-right">
          <img className="gathering-index-item-image" src={this.state.gathering.image}/>
          <p>{this.state.gathering.tix_price}</p>
          <p>{this.state.gathering.goal}</p>
          <p>{this.state.gathering.status}</p>
          <button>Buy Ticket</button>
          <button>Bookmark Event</button>
          <div>{this.state.gathering.category_id}</div>
        </div>
      </div>
    );
  }
});

module.exports = GatheringIndexShow;
