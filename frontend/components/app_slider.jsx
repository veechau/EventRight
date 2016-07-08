/* eslint max-len: "off" */
'use strict';

var React = require('react');

var Carousel = require('nuka-carousel');

const AppSlider = React.createClass({
  mixins: [Carousel.ControllerMixin],
  getInitialState(){
    return { imageStatus: null};
  },
  handleImageLoaded() {
  this.setState({ imageStatus: 'loaded' });
  },
  handleImageErrored() {
    this.setState({ imageStatus: 'failed to load' });
  },
  render() {
    return (

        <Carousel
          dragging={true}
          slidesToShow={1}
          speed={200}
          autoplay={true}
          >
          <div><img src="https://res.cloudinary.com/vechau/image/upload/c_scale,h_1600/v1467271000/AppSlider/photo-1453090927415-5f45085b65c0_o2iojc.jpg"
          onLoad={this.handleImageLoaded.bind(this)}
          onError={this.handleImageErrored.bind(this)}/></div>
          <div><img src="https://res.cloudinary.com/vechau/image/upload/c_scale,h_1600/v1467272765/AppSlider/photo-1445965752525-ac2d3c195ffe_qdcaum.jpg"
          onLoad={this.handleImageLoaded.bind(this)}
          onError={this.handleImageErrored.bind(this)}/></div>
          <div><img src="https://res.cloudinary.com/vechau/image/upload/v1467272522/AppSlider/photo-1450859018738-29f67b1a6102_mmvfxu.jpg"
          onLoad={this.handleImageLoaded.bind(this)}
          onError={this.handleImageErrored.bind(this)}/></div>
          <div><img src="https://res.cloudinary.com/vechau/image/upload/c_scale,h_1600/v1467272182/AppSlider/photo-1415886541506-6efc5e4b1786_fmkcyh.jpg"
          onLoad={this.handleImageLoaded.bind(this)}
          onError={this.handleImageErrored.bind(this)}/></div>
          <div><img src="https://res.cloudinary.com/vechau/image/upload/v1467270960/AppSlider/concert_lwmxi5.jpg"
          onLoad={this.handleImageLoaded.bind(this)}
          onError={this.handleImageErrored.bind(this)}/></div>
          <div><img src="https://res.cloudinary.com/vechau/image/upload/c_scale,h_1600/v1467272192/AppSlider/photo-1459749411175-04bf5292ceea_zm9a2g.jpg"
          onLoad={this.handleImageLoaded.bind(this)}
          onError={this.handleImageErrored.bind(this)}/></div>
        </Carousel>

    );
  }
});

module.exports = AppSlider;
