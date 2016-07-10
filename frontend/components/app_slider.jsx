/* eslint max-len: "off" */
'use strict';

const React = require('react');
const Carousel = require('nuka-carousel');


const Decorators = [
  {
    component: React.createClass({
      render() {
        return (
          <button
            style={this.getButtonStyles(this.props.currentSlide === 0)}
            onClick={this.props.previousSlide}></button>
        );
      },
      getButtonStyles(disabled) {
        return {
          border: 0,
          background: 'rgba(0,0,0,0.4)',
          color: 'white',
          padding: 0,
          outline: 0,
          opacity: disabled ? 0.3 : 1,
          cursor: 'pointer'
        };
      }
    }),
    position: 'BottomLeft'
  },
  {
    component: React.createClass({
      render() {
        return (
          <button
            style={this.getButtonStyles(this.props.currentSlide + this.props.slidesToScroll >= this.props.slideCount)}
            onClick={this.props.nextSlide}></button>
        );
      },
      getButtonStyles(disabled) {
        return {
          border: 0,
          background: 'rgba(0,0,0,0.4)',
          color: 'white',
          padding: 0,
          outline: 0,
          opacity: disabled ? 0.3 : 1,
          cursor: 'pointer'
        };
      }
    }),
    position: 'BottomRight'
  }
];


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
          className="app-slider-div"
          decorators={Decorators}
          dragging={true}
          slidesToShow={1}
          speed={200}
          autoplay={true}
          frameOverflow={'hidden'}
          wrapAround={true}
          height={"100%"}
          >
          <div>
          <img src="https://res.cloudinary.com/vechau/image/upload/c_scale,h_1600/v1467271000/AppSlider/photo-1453090927415-5f45085b65c0_o2iojc.jpg"
          onLoad={this.handleImageLoaded}
          onError={this.handleImageErrored}/></div>
          <div><img src="https://res.cloudinary.com/vechau/image/upload/c_scale,h_1600/v1467272765/AppSlider/photo-1445965752525-ac2d3c195ffe_qdcaum.jpg"
          onLoad={this.handleImageLoaded}
          onError={this.handleImageErrored}/></div>
          <div><img src="https://res.cloudinary.com/vechau/image/upload/v1467272522/AppSlider/photo-1450859018738-29f67b1a6102_mmvfxu.jpg"
          onLoad={this.handleImageLoaded}
          onError={this.handleImageErrored}/></div>
          <div><img src="https://res.cloudinary.com/vechau/image/upload/c_scale,h_1600/v1467272182/AppSlider/photo-1415886541506-6efc5e4b1786_fmkcyh.jpg"
          onLoad={this.handleImageLoaded}
          onError={this.handleImageErrored}/></div>
          <div><img src="https://res.cloudinary.com/vechau/image/upload/v1467270960/AppSlider/concert_lwmxi5.jpg"
          onLoad={this.handleImageLoaded}
          onError={this.handleImageErrored}/></div>
          <div><img src="https://res.cloudinary.com/vechau/image/upload/c_scale,h_1600/v1467272192/AppSlider/photo-1459749411175-04bf5292ceea_zm9a2g.jpg"
          onLoad={this.handleImageLoaded}
          onError={this.handleImageErrored}/></div>
        </Carousel>

    );
  }
});


module.exports = AppSlider;
