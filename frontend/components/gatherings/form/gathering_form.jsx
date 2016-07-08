"use strict";

const React = require('react');
const GatheringActions = require('../../../actions/gathering_actions');
const GatheringStore = require('../../../stores/gathering_store');
const CategoryActions = require('../../../actions/category_actions');
const CategoryStore = require('../../../stores/category_store');
const ErrorActions = require('../../../actions/error_actions');
const ErrorStore = require('../../../stores/error_store');
const SessionStore = require('../../../stores/session_store');

const ReactRouter = require('react-router');
const hashHistory = ReactRouter.hashHistory;

const GatheringForm = React.createClass({

	contextTypes: {
		router: React.PropTypes.object.isRequired
	},

  getInitialState() {
    return {
      artist: "",
      location: "",
      start_date: new Date(),
      end_date: "",
      description: "",
      image: "",
      tix_price: "",
      funds: 0,
      goal: "",
      status: "ongoing",
      category_id: 1,
			categories: []
    };
  },

  componentWillMount(){
    ErrorActions.clearErrors();
  },

  componentDidMount(){
    this.errorListener = ErrorStore.addListener(this.forceUpdate.bind(this));
		this.categoryListener = CategoryStore.addListener(this._categories);
		CategoryActions.fetchCategories();
  },

  componentWillUnmount(){
    this.errorListener.remove();
		this.categoryListener.remove();
	},

	_categories(){
		this.setState({categories: CategoryStore.all() });
	},

  _handleSubmit(e){
    e.preventDefault();

    const formData = {
      artist: this.state.artist,
      location: this.state.location,
      start_date: this.state.start_date,
      end_date: this.state.end_date,
      description: this.state.description,
      image: this.state.image,
      tix_price: this.state.tix_price,
      funds: this.state.funds,
      goal: this.state.goal,
      status: this.state.status,
      category_id: this.state.category_id
    };
    GatheringActions.createGathering(formData);

  },

  fieldErrors(field) {
    const errors = ErrorStore.formErrors("creating event");
    if (!errors[field]) { return; }
    const messages = errors[field].map( (errorMsg, i) => {
      return <li key={ i }>{ errorMsg }</li>;
    });
    return <ul>{ messages }</ul>;
  },

  update(property) {
    return (e) => this.setState({[property]: e.target.value});
  },


  render(){
    return (
      <div className="gathering-form-container">
        <form onSubmit={this._handleSubmit} className="gathering-form-box">

        <div className="gathering-form-header">
          Create an Event
        </div>
          <br/>
          { this.fieldErrors("base") }
          <div className="gathering-form">
            <br />

            <label> Artist:
              { this.fieldErrors("artist") }
              <input type="text"
                value={this.state.artist}
                onChange={this.update("artist")}
                className="gathering-input" />
            </label>

            <br />

            <label> Location:
              { this.fieldErrors("location") }
              <input type="text"
                value={this.state.location}
                onChange={this.update("location")}
                className="gathering-input" />
            </label>

            <br />


            <label> End Date:
              { this.fieldErrors("end_date") }
							<input type="date"
								onChange={this.update("end_date")}
								className="gathering-input" />
            </label>

            <br />

            <label> Description:
              { this.fieldErrors("description") }
              <input type="text"
                value={this.state.description}
                onChange={this.update("description")}
                className="gathering-input" />
            </label>

            <br />

            <label> Image:
              { this.fieldErrors("image") }
              <input type="text"
                value={this.state.image}
                onChange={this.update("image")}
                className="gathering-input" />
            </label>

            <br />

            <label> Ticket Price:
              { this.fieldErrors("tix_price") }
              <input type="number"
                value={this.state.tix_price}
                onChange={this.update("tix_price")}
                className="gathering-input" />
            </label>

            <br />

            <label> Goal:
              { this.fieldErrors("goal") }
              <input type="number"
                value={this.state.goal}
                onChange={this.update("goal")}
                className="gathering-input" />
            </label>

            <br />

            <label> Category:
              { this.fieldErrors("category_id") }
							<select id="category-dropdown"
											className="gathering-input"
											onChange={this.update("category_id")}
											value ={this.state.category_id}>
							{this.state.categories.map ( (category) => {
								return (
									<option value={category.id}
													key={category.id}>{category.title}</option>
								);
							})}

							</select>

            </label>

		        <br />

						<input type="submit" value="Submit" />
					</div>
				</form>
      </div>
    );
  }
});

module.exports = GatheringForm;
