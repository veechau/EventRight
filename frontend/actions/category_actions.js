"use strict";

const AppDispatcher = require('../dispatcher/dispatcher');
const CategoryConstants = require('../constants/category_constants');
const CategoryApiUtil = require('../util/categories_api_util');
const ErrorActions = require('./error_actions');
const hashHistory = require('react-router').hashHistory;

const CategoryActions = {

  // Client-side

  fetchCategories(){
    CategoryApiUtil.fetchAllCategories(
      CategoryActions.receiveAll,
      ErrorActions.setErrors);
  },

  getCategory(){
    CategoryApiUtil.getCategory(
      CategoryActions.receiveCategory,
      ErrorActions.setErrors);
  },

  createCategory(){
    CategoryApiUtil.createCategory(
      CategoryActions.receiveCategory,
      ErrorActions.setErrors);
  },

  editCategory(){
    CategoryApiUtil.updateCategory(
      CategoryActions.receiveCategory,
      ErrorActions.setErrors);
  },

  deleteCategory(){
    CategoryApiUtil.deleteCategory(
      CategoryActions.removeCategory,
      ErrorActions.setErrors);
  },

  // Server-side
  receiveAll(categories){
    AppDispatcher.dispatch({
      actionType: CategoryConstants.GATHERINGS_RECEIVED,
      categories: categories
    });
  },
  receiveCategory(category){
    AppDispatcher.dispatch({
      actionType: CategoryConstants.GATHERING_RECEIVED,
      category: category
    });
  },
  removeCategory(category){
    AppDispatcher.dispatch({
      actionType: CategoryConstants.GATHERING_REMOVED,
      category: category
    });
  }

};

module.exports = CategoryActions;
