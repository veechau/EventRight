# Phase 3: Notebooks and Tags (2 days)

## Rails
### Models
* Category

### Controllers
* Api::CategoriesController (create, destroy, index, show, update)

### Views
* categories/index.json.jbuilder
* categories/show.json.jbuilder


## Flux
### Views (React Components)
* CategoriesIndex
  - CategoryIndexItem
* CategoryForm
* SearchIndex

### Stores
* Category

### Actions
* ApiActions.receiveAllCategories -> triggered by ApiUtil
* ApiActions.receiveSingleCategory
* ApiActions.deleteCategory
* CategoryActions.fetchAllCategories -> triggers ApiUtil
* CategoryActions.fetchSingleCategory
* CategoryActions.createCategory
* CategoryActions.editCategory
* CategoryActions.destroyCategory

### ApiUtil
* ApiUtil.fetchAllCategories
* ApiUtil.fetchSingleCategory
* ApiUtil.createCategory
* ApiUtil.editCategory
* ApiUtil.destroyCategory

## Gems/Libraries
