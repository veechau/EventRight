const React = require('react');
const DatePicker = require('react-datepicker');
const moment = require('moment');


const EndDatePicker = React.createClass({
  displayName: 'End Date',

  getInitialState: function() {
    return {
      end_date: moment()
    };
  },

  handleChange: function(date) {
    this.setState({
      end_date: date
    });
  },

  render: function() {
    return <DatePicker
        className='gathering-form-datetime'
        placeholderText="Click to select a date"
        todayButton={'Today'}
        selected={this.state.end_date}
        onChange={this.handleChange}
        minDate={moment()} />;
  }
});

module.exports = EndDatePicker;
