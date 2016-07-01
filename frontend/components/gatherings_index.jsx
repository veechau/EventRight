const React = require('react');
const GatheringStore = require('../stores/gathering_store');
const GatheringActions = require('../actions/gathering_actions');
const GatheringIndexItem = require('./gathering_index_item');

const App = require('./app_slider');

const AppSlider = require('./app_slider');

const GatheringsIndex = React.createClass({
  getInitialState(){
    return { gatherings: [] };
  },
  componentDidMount(){
    this.gatheringListener = GatheringStore.addListener(this._onChange);
    GatheringActions.fetchGatherings();
  },
  componentWillUnmount(){
    this.gatheringListener.remove();
  },
  _onChange(){
    this.setState({ gatherings: GatheringStore.all() });
  },
  render(){
    return (
      <div className="gatherings-index">
        <ul>
          {this.state.gatherings.map( (gathering) => {
            return (
              <div className="gathering-index-item-image" key={gathering.id}>
                <img src={gathering.image}/>
              </div>
            );
          })}
        </ul>
      </div>
    );
  }
});

module.exports = GatheringsIndex;
