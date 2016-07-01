const React = require('react');

const GatheringIndexItem = React.createClass({
  getInitialState(){
    return { post: {} };
  },
  componentDidMount(){
    this.gatheringIndexItemListener = GatheringStore.addListener();
  },
  render(){
    
  }
});

module.exports = GatheringIndexItem;
