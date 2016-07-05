"use strict";

const React = require('react');
const GatheringActions = require('../../actions/gathering_actions');
const GatheringStore = require('../../stores/gathering_store');
const ErrorActions = require('../../actions/error_actions');
const ErrorStore = require('../../stores/error_store');
const SessionStore = require('../../stores/session_store');
const EndDatePicker = require('./date_picker');

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
      tix_price: 0,
      funds: 0,
      goal: 0,
      status: "ongoing",
      organizer_id: SessionStore.currentUser.id,
      category_id: ""
    };
  },

  componentWillMount(){
    ErrorActions.clearErrors();
  },

  componentDidMount(){
    this.errorListener = ErrorStore.addListener(this.forceUpdate.bind(this));
  },

  componentWillUnmount(){
    this.errorListener.remove();
    this.sessionListener.remove();
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
      tix_price: parseInt(this.state.tix_price),
      funds: parseInt(this.state.funds),
      goal: parseInt(this.state.goal),
      status: this.state.status,
      organizer_id: this.state.organizer_id,
      category_id: this.state.category_id
    };

    GatheringActions.createGathering(formData);

  },

  fieldErrors(field) {
    const errors = ErrorStore.formErrors("create_event");

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

              { this.fieldErrors("start_date") }
              <input type="hidden"
                value={this.state.start_date}
                onChange={this.update("start_date")}
                className="gathering-input" />


            <label> End Date:
              { this.fieldErrors("end_date") }
							<EndDatePicker />
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

              { this.fieldErrors("status") }
              <input type="hidden"
                value={this.state.status}
                onChange={this.update("status")}
                className="gathering-input" />

							{ this.fieldErrors("organizer_id") }
              <input type="hidden"
                value={this.state.organizer_id}
                onChange={this.update("organizer_id")}
                className="gathering-input" />

            <label> Category:
              { this.fieldErrors("category_id") }
              <input type="number"
                value={this.state.category_id}
                onChange={this.update("category_id")}
                className="gathering-input" />
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
