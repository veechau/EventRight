 /* eslint max-len: "off" */

const React = require('react');
const CategoryStore = require('../../stores/category_store');
const CategoryActions = require('../../actions/category_actions');

const CategoryIndexShow = React.createClass({
  getInitialState(){
    return { category: {} };
  },
  componentWillMount(){
    CategoryActions.getCategory(this.props.params.catId);
  },
  componentDidMount(){
    this.categoryIndexShowListener = CategoryStore.addListener(this._onChange);
  },
  componentWillUnmount(){
    this.categoryIndexShowListener.remove();
  },
  _onChange(){
    this.setState({ category: CategoryStore.find(this.props.params.catId) });
  },
  render(){
    return (
      <div className="category-index-show">
        <div className="category-index-show-left">
          <img src={this.state.category.image}/>
        </div>
        <div className="category-index-show-right">
          <h1>{this.state.category.title}</h1>
          <p>{this.state.category.description}</p>
        </div>
      </div>
    );
  }
});

module.exports = CategoryIndexShow;
