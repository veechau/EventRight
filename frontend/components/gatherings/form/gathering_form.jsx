"use strict";

const React = require('react');
const ReactDOM = require('react-dom');
const GatheringActions = require('../../../actions/gathering_actions');
const GatheringStore = require('../../../stores/gathering_store');
const CategoryActions = require('../../../actions/category_actions');
const CategoryStore = require('../../../stores/category_store');
const ErrorActions = require('../../../actions/error_actions');
const ErrorStore = require('../../../stores/error_store');
const SessionStore = require('../../../stores/session_store');

const ReactRouter = require('react-router');
const hashHistory = ReactRouter.hashHistory;

function initMap(that) {
	const refs = that.refs;
	const mapRef = refs.map;
	const node = ReactDOM.findDOMNode(mapRef);
	var map = new google.maps.Map(node, {
		center: {lat:37.773972, lng:-122.431297},
		zoom: 13
	});

	const pacInputRef = refs.pacInput;
	const input = ReactDOM.findDOMNode(pacInputRef);

	const types = ReactDOM.findDOMNode(refs.typeSelector);
	map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);
	map.controls[google.maps.ControlPosition.TOP_LEFT].push(types);
	var autocomplete = new google.maps.places.Autocomplete(input);
	autocomplete.bindTo('bounds', map);

	var infowindow = new google.maps.InfoWindow();
	var marker = new google.maps.Marker({
		map: map,
		anchorPoint: new google.maps.Point(0, -29)
	});

	autocomplete.addListener('place_changed', function() {
		infowindow.close();
		marker.setVisible(false);
		var place = autocomplete.getPlace();
		if (!place.geometry) {
			window.alert("Autocomplete's returned place contains no geometry");
			return;
		}

		// If the place has a geometry, then present it on a map.
		if (place.geometry.viewport) {
			map.fitBounds(place.geometry.viewport);
		} else {
			map.setCenter(place.geometry.location);
			map.setZoom(17);  // Why 17? Because it looks good.
		}
		marker.setIcon(/** @type {google.maps.Icon} */({
			url: place.icon,
			size: new google.maps.Size(71, 71),
			origin: new google.maps.Point(0, 0),
			anchor: new google.maps.Point(17, 34),
			scaledSize: new google.maps.Size(35, 35)
		}));
		marker.setPosition(place.geometry.location);
		marker.setVisible(true);

		var address = '';
		if (place.address_components) {
			address = [
				(place.address_components[0] && place.address_components[0].short_name || ''),
				(place.address_components[1] && place.address_components[1].short_name || ''),
				(place.address_components[2] && place.address_components[2].short_name || '')
			].join(' ');
			that.setState({location: address});
		}

		infowindow.setContent('<div><strong>' + place.name + '</strong><br>' + address);
		infowindow.open(map, marker);
	});

	// Sets a listener on a radio button to change the filter type on Places
	// Autocomplete.
	function setupClickListener(ref, types) {
		const radioButton = ReactDOM.findDOMNode(ref);
		radioButton.addEventListener('click', function() {
			autocomplete.setTypes(types);
		});
	}

	setupClickListener(refs.changetypeAll, []);
	setupClickListener(refs.changetypeEstablishment, ['establishment']);
	setupClickListener(refs.changetypeAddress, ['address']);
	setupClickListener(refs.changetypeGeocode, ['geocode']);
	that.setState({map: map});
}





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

		initMap(this);
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
				<div className="gathering-form-header">
					Create an Event
				</div>
				<input id="pac-input" ref="pacInput" className="controls" type="text"
				placeholder="Enter location here"/>
				<div id="type-selector" ref="typeSelector" className="controls">
					<input type="radio" name="type" ref="changetypeAll" defaultChecked/>
					<label htmlFor="changetype-all">All</label>

					<input type="radio" name="type" ref="changetypeEstablishment"/>
					<label htmlFor="changetype-establishment">Establishments</label>

					<input type="radio" name="type" ref="changetypeAddress"/>
					<label htmlFor="changetype-address">Addresses</label>

					<input type="radio" name="type" ref="changetypeGeocode"/>
					<label htmlFor="changetype-geocode">Geocodes</label>
				</div>
				<div id="map" ref='map' />
        <form onSubmit={this._handleSubmit} className="gathering-form-box">

          <br/>
          { this.fieldErrors("base") }
					<br/>
          <div className="gathering-form">

            <label> Artist:
              <input type="text"
                value={this.state.artist}
                onChange={this.update("artist")}
                className="gathering-input" />
            </label>
						{ this.fieldErrors("artist") }

            <br />

            <label> Location:
              <input type="text" disabled
                value={this.state.location}
                onChange={this.update("location")}
                className="gathering-input" />
            </label>
						{ this.fieldErrors("location") }

            <br />


            <label> End Date:
							<input type="date"
								onChange={this.update("end_date")}
								className="gathering-input" />
            </label>
						{ this.fieldErrors("end_date") }

            <br />

            <label> Description:
              <input type="text"
                value={this.state.description}
                onChange={this.update("description")}
                className="gathering-input" />
            </label>
						{ this.fieldErrors("description") }

            <br />

            <label> Image:
              <input type="text"
                value={this.state.image}
                onChange={this.update("image")}
                className="gathering-input" />
            </label>
						{ this.fieldErrors("image") }

            <br />

            <label> Ticket Price:
              <input type="number"
                value={this.state.tix_price}
                onChange={this.update("tix_price")}
                className="gathering-input" />
            </label>
						{ this.fieldErrors("tix_price") }

            <br />

            <label> Goal:
              <input type="number"
                value={this.state.goal}
                onChange={this.update("goal")}
                className="gathering-input" />
            </label>
						{ this.fieldErrors("goal") }

            <br />

            <label> Category:
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
						{ this.fieldErrors("category_id") }

		        <br />

						<input type="submit" value="Submit" />
					</div>
				</form>
      </div>
    );
  }
});

module.exports = GatheringForm;
