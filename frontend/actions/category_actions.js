"use strict";

const AppDispatcher = require('../dispatcher/dispatcher');
const CategoryConstants = require('../constants/category_constants');
const CategoryApiUtil = require('../util/categories_api_util');
const ErrorActions = require('./error_actions');
const hashHistory = require('react-router').hashHistory;

const CategoryActions = {

  // Client-side

  fetchCategories(){
    CategoryApiUtil.fetchCategories(
      CategoryActions.receiveAll,
      ErrorActions.setErrors);
  },

  getCategory(id){
    CategoryApiUtil.getCategory(
      id,
      CategoryActions.receiveCategory,
      ErrorActions.setErrors);
  },

  createCategory(category){
    CategoryApiUtil.createCategory(
      category,
      CategoryActions.receiveCategory,
      ErrorActions.setErrors);
  },

  editCategory(category){
    CategoryApiUtil.updateCategory(
      category,
      CategoryActions.receiveCategory,
      ErrorActions.setErrors);
  },

  deleteCategory(id){
    CategoryApiUtil.deleteCategory(
      id,
      CategoryActions.removeCategory,
      ErrorActions.setErrors);
  },

  // Server-side
  receiveAll(categories){
    AppDispatcher.dispatch({
      actionType: CategoryConstants.CATEGORIES_RECEIVED,
      categories: categories
    });
  },
  receiveCategory(category){
    AppDispatcher.dispatch({
      actionType: CategoryConstants.CATEGORY_RECEIVED,
      category: category
    });
  },
  removeCategory(category){
    AppDispatcher.dispatch({
      actionType: CategoryConstants.CATEGORY_REMOVED,
      category: category
    });
  }

};

module.exports = CategoryActions;
