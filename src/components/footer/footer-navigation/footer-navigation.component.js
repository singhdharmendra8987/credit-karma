import React, { Component } from 'react';
class FooterNavigation extends Component {

  render() {
    return (
       <div className="footer-links-holder">
            <h3><a href="">{this.props.data.header}</a></h3>
            <ul className="footer-links">
                {this.props.data.links.map((links, i) => <li><a href="">{links}</a></li>)}
            </ul>
        </div>
    );
  }
}

export default FooterNavigation;
