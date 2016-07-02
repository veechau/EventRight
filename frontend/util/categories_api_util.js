"use strict";


const CategoryApiUtil = {

  fetchCategories(success, error){
    $.ajax({
      url: '/api/categories',
      type: 'GET',
      success,
      error(xhr) {
        const errors = xhr.responseJSON;

        error("events", errors);
      }
    });
  },

  getCategory(id, success, error){
    $.ajax({
      url: `/api/categories/${id}`,
      type: 'GET',
      success,
      error(xhr) {
        const errors = xhr.responseJSON;

        error("event", errors);
      }
    });
  },

  createCategory(category, success, error){
    $.ajax({
      url: '/api/categories',
      type: 'POST',
      data: category,
      success,
      error(xhr) {
        const errors = xhr.responseJSON;

        error("creating event", errors);
      }
    });
  },

  updateCategory(category, success, error){
    $.ajax({
      url: `/api/categories/${category.id}`,
      type: 'PATCH',
      data: category,
      success,
      error(xhr) {
        const errors = xhr.responseJSON;

        error("editing event", errors);
      }
    });
  },

  deleteCategory(id, success, error){
    $.ajax({
      url: `/api/categories/${id}`,
      type: 'DELETE',
      success,
      error(xhr) {
        const errors = xhr.responseJSON;

        error("deleting event", errors);
      }
    });
  },
};


module.exports = CategoryApiUtil;
