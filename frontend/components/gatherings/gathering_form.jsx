"use strict";

const React = require('react');
const GatheringActions = require('../../actions/gathering_actions');
const GatheringStore = require('../../stores/gathering_store');
const ErrorStore = require('../../stores/error_store');

const GatheringForm = React.createClass({
  getInitialState(){
    return {
      artist: "",
      location: "",
      end_date: "",
      description: "",
      image: "",
      tix_price: 0,
      funds: 0,
      goal: 0,
      category: ""
    };
  },
  render(){
    return (
      <div>

      </div>
    );
  }
});
