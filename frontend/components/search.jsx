const React = require('react');
const hashHistory = require('react-router').hashHistory;
const GatheringStore = require('../stores/gathering_store');
const GatheringActions = require('../actions/gathering_actions');

const SearchBar = React.createClass({

  getInitialState(){
    return { searchString: "" };
  },
  componentDidMount(){
    this.gatheringListener = GatheringStore.addListener(this._getGatherings);
    GatheringActions.fetchGatherings();
  },
  componentWillUnmount(){
    this.gatheringListener.remove();
  },
  _handleEnter(e){
    if (e.keyCode == 13){
    }
  },
  render(){
    let _gatherings = [];
    let _searchResults = [];

    this.state.gatherings.forEach( (gathering) => {
      _gatherings.push( {
        artist: gathering.artist,
        url: `/events/${gathering.id}` });
    });

    let searchString = this.state.searchString.trim().toLowerCase();

    if(searchString.length === 0){
      _searchResults = [];
    } else {
      _gatherings = _gatherings.filter(function(gathering){
            return gathering.artist.toLowerCase().match( searchString );
        });
    }

    if (this.state.gatherings.length > 0){
      _searchResults = (
        <div>
          <input  type="text"
                  value={this.state.searchString}
                  onChange={this._handleChange}
                  onKeyPress={this._handleEnter}
                  placeholder="Search by Artists..." />
          <ul>
              { _gatherings.map(function(gathering){
                  return (
                    <li key={gathering.id}>

                      {gathering.name}
                    </li>
                  );
              })}
          </ul>
        </div>
      );
    }

    return (
      <div>
        {_searchResults}
      </div>
    );
    }
});




module.exports = SearchBar;
