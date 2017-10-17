import React, { Component } from 'react';
import FooterBanner from './footer-banner/footer-banner.component'

class Footer extends Component {
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
            <div className="centered clearfix">
                <div className="footer-navigation">
                <div className="footer-links-holder">
                    <h3><a href="">COMPANY INFO</a></h3>
                    <ul className="footer-links">
                    <li><a href="">About Credit Karma</a></li>
                    <li><a href="">Careers</a></li>
                    <li><a href="">Help Center</a></li>
                    <li><a href="">In The News</a></li>
                    <li><a href="">Security Practices</a></li>
                    <li><a href="">Privacy Policy</a></li>
                    <li><a href="">Terma of Use</a></li>
                    </ul>
                </div>
                <div className="footer-links-holder">
                    <h3><a href="">POPULAR OFFERS</a></h3>
                    <ul className="footer-links">
                    <li><a href="">Best Credit Cards From Our Partners</a></li>
                    <li><a href="">Credit Cards for Limited Credit</a></li>
                    <li><a href="">Credit Cards for Poor Credit</a></li>
                    <li><a href="">Credit Cards for Good Credit</a></li>
                    <li><a href="">Personal Loans</a></li>
                    <li><a href="">Auto Insurance</a></li>
                    </ul>
                </div>
                <div className="footer-links-holder">
                    <h3><a href="">CREDIT RESOURCES</a></h3>
                    <ul className="footer-links">
                    <li><a href="">Credit and Finance Articles</a></li>
                    <li><a href="">Credit Karma Community</a></li>
                    <li><a href="">Credit Card Reviews</a></li>
                    <li><a href="">Financial Calculators</a></li>
                    <li><a href="">Credit Karma Blog</a></li>
                    </ul>
                </div>
                <div className="footer-links-holder">
                    <h3><a href="">NOTABLE LINKS</a></h3>
                    <ul className="footer-links">
                    <li><a href="">What is a Good Credit Score?</a></li>
                    <li><a href="">Quick Tips for Your Credit Health</a></li>
                    <li><a href="">Free Credit Report</a></li>
                    <li><a href="">Free Credit Monitoring</a></li>
                    <li><a href="">Free Credit Score</a></li>
                    <li><a href="">Credit Scores</a></li>
                    </ul>
                </div>
            </div>
            </div>
    );
  }
}

export default Footer;
