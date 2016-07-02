"use strict";

const AppDispatcher = require('../dispatcher/dispatcher');
const Store = require('flux/utils').Store;
const CategoryConstants = require('../constants/category_constants');

const CategoryStore = new Store(AppDispatcher);

let _categories = {};

CategoryStore.all = function(){
  return Object.keys(_categories).map( (categoryId) => {
    return _categories[categoryId];
  });
};

CategoryStore.find = function(categoryId){
  return _categories[categoryId];
};

const resetCategories = function(categories) {
  _categories = {};
  categories.forEach( (category) => {
    _categories[category.id] = category;
  });
};

const setCategory = function(category) {
  _categories[category.id] = category;
};

const deleteCategory = function(category) {
  delete _categories[category.id];
};

CategoryStore.__onDispatch = payload => {
  switch (payload.actionType) {
    case CategoryConstants.CATEGORIES_RECEIVED:
    resetCategories(payload.categories);
    CategoryStore.__emitChange();
      break;
    case CategoryConstants.CATEGORY_RECEIVED:
    setCategory(payload.category);
    CategoryStore.__emitChange();
      break;
    case CategoryConstants.CATEGORY_REMOVED:
    deleteCategory(payload.category);
    CategoryStore.__emitChange();
      break;
  }
};

module.exports = CategoryStore;
