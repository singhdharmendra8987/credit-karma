import React, { Component } from 'react';

class Header extends Component {
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
               "header": "COMPANY INFO",
               "links": ["What is a Good Credit Score?", "Quick Tips for Your Credit Health", "Free Credit Report", "Free Credit Monitoring", "Free Credit Score", "Credit Scores"] 
            },
         ]
      }
   }

  render() {
    return (
      <nav className="navbar navbar-default navbar-fixed-top">
        <div className="container-fluid bodyContainer">
            <div className="navbar-header">
                <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                </button>
                <a className="navbar-brand" href="#"><img src={require('../../images/CK-Logo.png')} />

                </a>
            </div>
            <div id="navbar" className="navbar-collapse collapse">
                <ul className="nav navbar-nav">
                    <li className="dropdown active">
                        <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Credit Cards <span className="glyphicon glyphicon-menu-down"></span></a>
                        <ul className="dropdown-menu">
                            <li><a href="#">Menu Item</a></li>
                            <li><a href="#">Menu Item</a></li>
                            <li><a href="#">Menu Item</a></li>
                        </ul>
                    </li>
                    <li><a href="#about">Loans</a></li>
                    <li className="dropdown">
                        <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Loans<span className="glyphicon glyphicon-menu-down"></span></a>
                        <ul className="dropdown-menu">
                            <li><a href="#">Menu Item</a></li>
                            <li><a href="#">Menu Item</a></li>
                            <li><a href="#">Menu Item</a></li>
                        </ul>
                    </li>
                    <li><a href="#contact">Auto</a>
                    </li>
                    <li className="dropdown">
                        <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Resources <span className="glyphicon glyphicon-menu-down"></span></a>
                        <ul className="dropdown-menu">
                            <li><a href="#">Menu Item</a></li>
                            <li><a href="#">Menu Item</a></li>
                            <li><a href="#">Menu Item</a></li>
                            <li role="separator" className="divider"></li>
                            <li className="dropdown-header">Menu Item</li>
                            <li><a href="#">Menu Item</a></li>
                            <li><a href="#">Menu Item</a></li>
                        </ul>
                    </li>
                    <li><a href="#contact">Tax</a>
                    </li>
                </ul>
                <ul className="nav navbar-nav navbar-right hidden-md-down">
                    <li><a href="#">How it works <span className="divider"></span></a></li>
                    <li><a href="#">Help center <span className="divider"></span></a></li>
                    <li><a href="#">Log in <span className="divider"></span></a></li>
                    <li><a href="#">Sign up for free</a></li>
                </ul>
            </div>
            <div className="container topNavContainer">
                <ul className="mobileTopNav">
                    <li className="first"><a href="#">Sign up</a></li>
                    <li><a href="#">Log in</a></li>
                </ul>
            </div>
        </div>
    </nav>
    );
  }
}

export default Header;
