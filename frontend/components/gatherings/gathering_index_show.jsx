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
        <div className="gathering-index-show-title">
          {this.state.gathering.title}
        </div>
        <div className="gathering-index-show-artist">
          {this.state.gathering.artist}
        </div>
        <div className="gathering-index-show-location">
          {this.state.gathering.location}
        </div>
        <div className="gathering-index-show-start-date">
          {this.state.gathering.start_date}
        </div>
        <div className="gathering-index-show-end-date">
          {this.state.gathering.end_date}
        </div>
        <div className="gathering-index-show-description">
          {this.state.gathering.description}
        </div>
        <div className="gathering-index-show-image">
          <img src={this.state.gathering.image}/>
        </div>
        <div className="gathering-index-show-ticket-price">
          {this.state.gathering.tix_price}
        </div>
        <div className="gathering-index-show-goal">
          {this.state.gathering.goal}
          </div>
        <div className="gathering-index-show-status">
          {this.state.gathering.status}
        </div>
        <div className="gathering-index-show-category">
          {this.state.gathering.category_id}
        </div>
      </div>
    );
  }
});

module.exports = GatheringIndexShow;
