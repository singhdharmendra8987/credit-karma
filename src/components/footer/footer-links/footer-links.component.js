import React, { Component } from 'react';
class FooterLink extends Component {
  render() {
    return (
       <div className="smallDeviceFooter">
            <ul className="footer-links">
            <li><a href="">About Credit Karma</a></li>
            <li><a href="">Security</a></li>
            <li><a href="">Practices</a></li>
            <li><a href="">Privacy Policy</a></li>
            <li><a href="" className="noBorder">Terms of Use</a></li>
            </ul>
        </div>
    );
  }
}

export default FooterLink;
