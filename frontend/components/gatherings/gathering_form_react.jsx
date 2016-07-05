const React = require('react');
const DateTimeField = require('react-bootstrap-datetimepicker');
const FormGroup = require('react-bootstrap').FormGroup;
const FormControl = require('react-bootstrap').FormControl;
const ControlLabel = require('react-bootstrap').ControlLabel;
const HelpBlock = require('react-bootstrap').HelpBlock;

const SessionStore = require('../../stores/session_store');

const MagicForm = React.createClass({

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

  getValidationState() {
    // const length = this.state.value.length;
    // if (length > 10) return 'success';
    // else if (length > 5) return 'warning';
    // else if (length > 0) return 'error';
  },

  handleChange(e) {
  this.setState({ value: e.target.value });
  },

  __changeSelection: function(e) {
        var id = e.target.getAttribute('data-id');
        var state = this.state.data.map(function(d) {
            return {
                id: d.id,
                selected: (d.id === id ? !d.selected : d.selected)
            };
        });

        this.setState({ data: state });

    },
    __changeAllChecks: function(e) {
        var value = this.refs.globalSelector.getDOMNode().checked;
        var state = this.state.data.map(function(d) {
            return { id: d.id, selected: value };
        });

        this.setState({ data: state });
    },

    update(property) {
      return (e) => this.setState({[property]: e.target.value});
    },

  render(){
    return (
      <div>
        <h1>Profile</h1>
          <br />
        <form>
          <FormGroup
            controlId="formBasicText"
            validationState={this.getValidationState()}
            >
            <ControlLabel>Artist: </ControlLabel>
            <FormControl
              type="text"
              value={this.state.artist}
              placeholder="Enter text"
              onChange={this.update("artist")}
              />

              <br />
            <ControlLabel>Location: </ControlLabel>
              <br />
            <textarea
              type="text"
              value={this.state.location}
              placeholder="123 Fake Street, San Francisco, CA 94107"
              rows="2"
              onChange={this.update("location")}
              />

              <br />
            <ControlLabel>End Date</ControlLabel>
            <DateTimeField/>
            <FormControl
              type="datetime"
              value={this.state.end_date}
              placeholder="Enter crowdfunding end date"
              onChange={this.update("end_date")}
              />

              <br />
            <ControlLabel>Description</ControlLabel>
            <FormControl
              type="text"
              value={this.state.description}
              placeholder="Event Description"
              onChange={this.update("description")}
              />

              <br />
            <ControlLabel>Image</ControlLabel>
            <FormControl
              type="text"
              value={this.state.image}
              placeholder="Image URL"
              onChange={this.update("image")}
              />

              <br />
            <ControlLabel>Ticket Price</ControlLabel>
            <FormControl
              type="number"
              value={this.state.tix_price}
              placeholder="Enter price"
              onChange={this.update("tix_price")}
              />

              <br />
            <ControlLabel>Goal</ControlLabel>
            <FormControl
              type="number"
              value={this.state.goal}
              placeholder="Enter crowdfunding goal"
              onChange={this.update("goal")}
              />

              <br />
            <ControlLabel>Category</ControlLabel>
            <select
              type="number"
              value={this.state.category_id}
              placeholder="Enter crowdfunding goal"
              onChange={this.update("category_id")}>
              <option value="1">Category 1</option>
              <option value="2">Category 2</option>
              <option value="3">Category 3</option>
              </select>

              <br />
            <FormControl.Feedback />
            <HelpBlock> </HelpBlock>
          </FormGroup>
        </form>
      </div>
    );
  }
});

module.exports = MagicForm;