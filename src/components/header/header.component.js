import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <nav class="navbar navbar-default navbar-fixed-top">
        <div class="container bodyContainer">
            <div class="navbar-header">
                <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                <a class="navbar-brand" href="#"><img src="images/CK-Logo.png" />
                </a>
            </div>
            <div id="navbar" class="navbar-collapse collapse">
                <ul class="nav navbar-nav">
                    <li class="dropdown active">
                        <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Credit Cards <span class="glyphicon glyphicon-menu-down"></span></a>
                        <ul class="dropdown-menu">
                            <li><a href="#">Menu Item</a></li>
                            <li><a href="#">Menu Item</a></li>
                            <li><a href="#">Menu Item</a></li>
                        </ul>
                    </li>
                    <li><a href="#about">Loans</a></li>
                    <li class="dropdown">
                        <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Loans<span class="glyphicon glyphicon-menu-down"></span></a>
                        <ul class="dropdown-menu">
                            <li><a href="#">Menu Item</a></li>
                            <li><a href="#">Menu Item</a></li>
                            <li><a href="#">Menu Item</a></li>
                        </ul>
                    </li>
                    <li><a href="#contact">Auto</a>
                    </li>
                    <li class="dropdown">
                        <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Resources <span class="glyphicon glyphicon-menu-down"></span></a>
                        <ul class="dropdown-menu">
                            <li><a href="#">Menu Item</a></li>
                            <li><a href="#">Menu Item</a></li>
                            <li><a href="#">Menu Item</a></li>
                            <li role="separator" class="divider"></li>
                            <li class="dropdown-header">Menu Item</li>
                            <li><a href="#">Menu Item</a></li>
                            <li><a href="#">Menu Item</a></li>
                        </ul>
                    </li>
                    <li><a href="#contact">Tax</a>
                    </li>
                </ul>
                <ul class="nav navbar-nav navbar-right hidden-md-down">
                    <li><a href="#">How it works <span class="divider"></span></a></li>
                    <li><a href="#">Help center <span class="divider"></span></a></li>
                    <li><a href="#">Log in <span class="divider"></span></a></li>
                    <li><a href="#">Sign up for free</a></li>
                </ul>
            </div>
            <div class="container topNavContainer">
                <ul class="mobileTopNav">
                    <li class="first"><a href="#">Sign up</a></li>
                    <li><a href="#">Log in</a></li>
                </ul>
            </div>
        </div>
    </nav>
    );
  }
}

export default Header;
