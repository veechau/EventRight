/* eslint max-len: "off" */

const React = require('react');
var Slider = require('react-slick');

const AppSlider = React.createClass({
  render(){
    const settings = {
      className: "app-slider-div",
      adaptiveHeight: false,
      arrows: true,
      dots: true,
      autoplaySpeed: 5000,
      autoplay: true,
      initialSlide: 1,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      swipeToSlide: true,
      variableWidth: false
    };
    return (
      <Slider {...settings}>
        <div>
          <img src="http://res.cloudinary.com/vechau/image/upload/v1467271000/photo-1453090927415-5f45085b65c0_o2iojc.jpg"
          alt="Pick your show" />
          </div>
        <div>
          <img src="http://res.cloudinary.com/vechau/image/upload/v1467272765/photo-1445965752525-ac2d3c195ffe_qdcaum.jpg"
          alt="Fund your artist" />
          </div>
        <div>
          <img src="http://res.cloudinary.com/vechau/image/upload/v1467272522/photo-1450859018738-29f67b1a6102_mmvfxu.jpg"
            alt="Share your music" />
        </div>
        <div>
          <img src="http://res.cloudinary.com/vechau/image/upload/v1467272182/photo-1415886541506-6efc5e4b1786_fmkcyh.jpg"
            alt="Watch them Perform" />
        </div>
          <img src="http://res.cloudinary.com/vechau/image/upload/v1467270960/concert_lwmxi5.jpg" alt="Live your Life" />
        <div>
          <img src="http://res.cloudinary.com/vechau/image/upload/v1467272192/photo-1459749411175-04bf5292ceea_zm9a2g.jpg"
          alt="Join EventRite" />
        </div>
      </Slider>
    );
  }
  });



module.exports = AppSlider;
