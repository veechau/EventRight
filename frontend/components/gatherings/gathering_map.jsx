const React = require('react');
const ReactDOM = require('react-dom');

let marker;

function initMap(that) {

  const refs = that.refs;
  const mapRef = refs.gatheringMap;
  const node = ReactDOM.findDOMNode(mapRef);
  const location = {lat: parseFloat(that.props.lat), lng: parseFloat(that.props.lng)};
  var map = new google.maps.Map(node, {
    zoom: 13,
    center: {lat: location.lat, lng: location.lng}
  });

  marker = new google.maps.Marker({
    map: map,
    draggable: true,
    animation: google.maps.Animation.DROP,
    position: {lat: location.lat, lng: location.lng}
  });
  marker.addListener('click', toggleBounce);
}

function toggleBounce() {
  if (marker.getAnimation() !== null) {
    marker.setAnimation(null);
  } else {
    marker.setAnimation(google.maps.Animation.BOUNCE);
  }
}

const GatheringMap = React.createClass({
  componentDidMount() {
    initMap(this);
  },

  render() {
    return (
      <div className='gathering-index-show-bottom'>
        <div id="gathering-map" ref="gatheringMap" />
      </div>
    );
  }
});

module.exports = GatheringMap;
