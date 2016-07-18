 /* eslint max-len: "off" */

const React = require('react');
const CategoryStore = require('../../stores/category_store');
const CategoryActions = require('../../actions/category_actions');
const GatheringStore = require('../../stores/gathering_store');
const GatheringActions = require('../../actions/gathering_actions');
const GatheringIndexShow = require('../gatherings/gathering_index_show');
const hashHistory = require('react-router').hashHistory;

const CategoryIndexShow = React.createClass({
  getInitialState(){
    return { category: {}, gatherings: [] };
  },
  componentDidMount(){
    this.categoryIndexShowListener = CategoryStore.addListener(this._onChange);
    this.gatheringIndexShowListener = GatheringStore.addListener(this._onGatheringChange);
    CategoryActions.getCategory(this.props.params.catId);
    GatheringActions.fetchGatherings();
  },
  componentWillUnmount(){
    this.categoryIndexShowListener.remove();
    this.gatheringIndexShowListener.remove();
  },
  _onChange(){
    this.setState({ category: CategoryStore.find(this.props.params.catId) });
  },
  _onGatheringChange(){
    this.setState({ gatherings: GatheringStore.findByCategoryId(this.props.params.catId) });
  },
  _handleImgClick(){
    hashHistory.push(`events/${this.state.gathering.id}`);
  },
  render(){
    $(window).scrollTop();
    return (
      <div>
        <div className="category-index-show">

          <div
            className="category-index-show-left"
            onClick={this._handleImgClick}>
            <img src={this.state.category.image}/>
          </div>

          <div className="category-index-show-right">
            <h1>{this.state.category.title}</h1>
            <p>{this.state.category.description}</p>
          </div>

        </div>

        <div className="category-index-show-events">
          {this.state.gatherings.map( (gathering) => {
            return <GatheringIndexShow key={gathering.id} gathering={gathering} />;
          })}
        </div>
      </div>
    );
  }
});

module.exports = CategoryIndexShow;
