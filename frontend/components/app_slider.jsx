const React = require('react');

const AppSlider = React.createClass({
  render(){
    return (
      <div id="photobanner-container">
        <div class="photobanner">
        	<img class="first-picture-photobanner" src="http://res.cloudinary.com/vechau/image/upload/v1467271000/photo-1453090927415-5f45085b65c0_o2iojc.jpg" alt="Pick your show" />
        	<img src="http://res.cloudinary.com/vechau/image/upload/v1467272765/photo-1445965752525-ac2d3c195ffe_qdcaum.jpg" alt="Fund your artist" />
        	<img src="http://res.cloudinary.com/vechau/image/upload/v1467272522/photo-1450859018738-29f67b1a6102_mmvfxu.jpg" alt="Share your music" />
          <img src="http://res.cloudinary.com/vechau/image/upload/v1467272182/photo-1415886541506-6efc5e4b1786_fmkcyh.jpg" alt="Watch them Perform" />
          <img src="http://res.cloudinary.com/vechau/image/upload/v1467270960/concert_lwmxi5.jpg" alt="Live your Life" />
        	<img src="http://res.cloudinary.com/vechau/image/upload/v1467272192/photo-1459749411175-04bf5292ceea_zm9a2g.jpg" alt="Join EventRite" />
        </div>
    </div>
    );
  }
});

module.exports = AppSlider;
