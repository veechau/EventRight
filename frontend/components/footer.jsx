const React = require('react');
const Link = require('react-router').Link;

const Footer = React.createClass({
  render() {
    return (
      <div className="footer-container">
        <div className="footer-links">
          <a href="http://www.veronicachau.com/">
          <i className="material-icons md-36">&#xE87C;</i>
          About</a>
        </div>
        <div className="footer-links">
          <a href="https://github.com/veechau/EventRight">
          <img src="https://res.cloudinary.com/vechau/image/upload/c_scale,h_100/v1469542908/github_pjne0n.png"/>
          Learn More</a>
        </div>
        <div className="footer-links">
          <a href="https://github.com/SJern/EventRight">
          <img src="https://res.cloudinary.com/vechau/image/upload/v1470872393/fork_qdvgbj.png"/>
          Our Team</a>
        </div>
        <div className="footer-links">
        <a href="https://www.linkedin.com/in/veronica-chau">
        <img src="https://res.cloudinary.com/vechau/image/upload/c_scale,h_100/v1469542908/linkedin_hqazex.png"/>
        Careers</a>
        </div>
        <div className="footer-links">
          <a href="https://angel.co/veronica-chau">
          <img src="https://res.cloudinary.com/vechau/image/upload/v1470871847/AngelCo_mseq8h.png"/>
          Contact Us</a>
        </div>
      </div>
    );
  }
});

module.exports = Footer;
