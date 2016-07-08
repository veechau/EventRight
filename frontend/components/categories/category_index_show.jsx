 /* eslint max-len: "off" */

const React = require('react');
const CategoryStore = require('../../stores/category_store');
const CategoryActions = require('../../actions/category_actions');
const GatheringStore = require('../../stores/gathering_store');
const GatheringActions = require('../../actions/gathering_actions');
const GatheringIndexShow = require('../gatherings/gathering_index_show');

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
  render(){
    return (
      <div>
        <div className="category-index-show">

          <div className="category-index-show-left">
            <img src={this.state.category.image}/>
          </div>

          <div className="category-index-show-right">
            <h1>{this.state.category.title}</h1>
            <p>{this.state.category.description}</p>
          </div>

        </div>

        <div className="category-index-show-events">
          <h3>&darr; Explore {this.state.category.title} Music &darr;</h3>
          {this.state.gatherings.map( (gathering) => {
            return <GatheringIndexShow key={gathering.id} gathering={gathering} />;
          })}
        </div>
      </div>
    );
  }
});

module.exports = CategoryIndexShow;
