import React, { Component } from 'react';
import FooterBanner from './footer-banner/footer-banner.component';
import FooterLink from './footer-links/footer-links.component';
import FooterNavigation from './footer-navigation/footer-navigation.component';
import FooterCircles from './footer-circle/footer-circle.component';

var small = require('../../images/digicert.png')

class Footer extends Component {
    constructor() {
      super();
		
      this.state = {
         info: 
         [
            {
               "header": "COMPANY INFO",
               "links": ["About Credit Karma", "Careers", "Help Center", "In The News", "Security Practices", "Privacy Policy", "Terma of Use"] 
            }, {
               "header": "POPULAR OFFERS",
               "links": ["Best Credit Cards From Our Partners", "Credit Cards for Limited Credit", "Credit Cards for Poor Credit", "Credit Cards for Good Credit", "Personal Loans", "Auto Insurance"] 
            }, {
               "header": "CREDIT RESOURCES",
               "links": ["Credit and Finance Articles", "Credit Karma Community", "Credit Card Reviews", "Financial Calculators", "Credit Karma Blog"] 
            }, {
               "header": "NOTABLE LINKS",
               "links": ["What is a Good Credit Score?", "Quick Tips for Your Credit Health", "Free Credit Report", "Free Credit Monitoring", "Free Credit Score", "Credit Scores"] 
            },
         ],
         circle: [1, 2, 3, 4, 5]
      }
   }
  render() {
    return (
        <footer>
            <FooterBanner/>
            <FooterLink/>
            <div className="centered clearfix">
                <div className="footer-navigation">
                    {this.state.info.map((info, i) => <FooterNavigation key = {i} 
                     data = {info} />)}
                <div className="footerCircle">
                    {this.state.circle.map((info, i) => <FooterCircles />)}}
                </div>
                <div className="digicertImg"><img   src={require('../../images/digicert.png')}/>
                </div>
                <p className="footText">2007-2016 Credit Karma, Inc. Credit Karma is a registered trademark of Credit Karma Inc. All Rights Reserved. Product name, logo, brands, and other trademarks featured or referred to within Credit Karma are the property of their respective trademark
                    holders. This site may be compensated through third party advertisers.
                </p>
                <p className="footText hidden-xs">iPhone is a trademark of Apple Inc., registered in the U.S. and other countries. App Store is a service mark of Apple Inc.</p>
                <p className="footText hidden-xs">Android is a trademark of Google Inc.</p>
                <p className="footText">The Equifax logo is a registered trademark owned by Equifax in the United States and other countries.</p>
                </div>
            </div>
            </footer>
    );
  }
}

export default Footer;
