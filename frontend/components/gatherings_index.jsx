const React = require('react');
const ReactRouter = require('react-router');
const hashHistory = ReactRouter.hashHistory;
const GatheringStore = require('../stores/gathering_store');
const GatheringActions = require('../actions/gathering_actions');
const GatheringIndexItem = require('./gathering_index_item');

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
  _handleImgClick(){
    hashHistory.push();
  },
  render(){
    return (
      <div className="gatherings-index">
        <ul>
          {this.state.gatherings.map( (gathering) => {
            return (
              <li key={gathering.id}>
                <GatheringIndexItem
                  gathering={gathering}
                  onClick={this._handleImgClick}/>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
});

module.exports = GatheringsIndex;
