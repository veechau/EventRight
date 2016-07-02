const React = require('react');
const ReactRouter = require('react-router');
const hashHistory = ReactRouter.hashHistory;

const CategoriesIndexItem = React.createClass({
  _handleImgClick(){
    hashHistory.push(`categories/${this.props.category.id}`);
  },
  render(){
    return (
        <div className="category-index-item-image"
             onClick={this._handleImgClick}>
          <img src={this.props.category.image}/>
        </div>
    );
  }
});

module.exports = CategoriesIndexItem;
