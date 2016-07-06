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
            {this.state.gathering.title}
            {this.state.gathering.artist}
            {this.state.gathering.location}
            {this.state.gathering.start_date}
            {this.state.gathering.end_date}
            {this.state.gathering.description}
            {this.state.gathering.tix_price}
            {this.state.gathering.goal}
            {this.state.gathering.status}
            {this.state.gathering.category_id}
          </div>
          <div className="gathering-index-show-right">
            <img src={this.state.gathering.image}/>
          </div>
      </div>
    );
  }
});

module.exports = GatheringIndexShow;
