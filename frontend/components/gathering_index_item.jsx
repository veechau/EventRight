const React = require('react');

const GatheringIndexItem = React.createClass({
  render(){
    // return(
    //   <div className="test">Hello from Gathering Item Index </div>
    // );
    return (
      <div className="gathering-index-container">
        <p>{this.props.gathering.title}</p>
        <p>{this.props.gathering.artist}</p>
        <p>{this.props.gathering.location}</p>
        <p>{this.props.gathering.start_date}</p>
        <p>{this.props.gathering.end_date}</p>
        <p>{this.props.gathering.description}</p>
        <p><img src={this.props.gathering.image}/></p>
        <p>{this.props.gathering.tix_price}</p>
        <p>{this.props.gathering.goal}</p>
        <p>{this.props.gathering.status}</p>
        <p>{this.props.gathering.category_id}</p>
      </div>
    );
  }
});

module.exports = GatheringIndexItem;
