const React = require('react');
const CategoryStore = require('../../stores/category_store');
const CategoryActions = require('../../actions/category_actions');
const CategoryIndexItem = require('./category_index_item');

const CategoriesIndex = React.createClass({
  getInitialState(){
    return { categories: [] };
  },

  componentDidMount(){
    this.categoryListener = CategoryStore.addListener(this._onChange);
    CategoryActions.fetchCategories();
  },

  componentWillUnmount(){
    this.categoryListener.remove();
  },

  _onChange(){
    this.setState({ categories: CategoryStore.all() });
  },

  render(){
    return (
      <div className="categories-index">
        <ul>
          {this.state.categories.map( (category) => {
            return (
              <li key={category.id}>
                <CategoryIndexItem
                  category={category} />
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
});

module.exports = CategoriesIndex;
