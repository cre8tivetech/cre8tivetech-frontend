import { Link } from "gatsby"
import React, { Component, Fragment } from "react";

import logo from "../assets/img/c8h-logo.png";

class Header extends Component {

  openMobileNav = () => {
    let mainHeader = document.querySelector(".main-header");
    let mobileNav = document.querySelector(".mobile-nav");
    let menu = document.querySelector(".menu");
    let close = document.querySelector(".close");
    mobileNav.classList.add("show");
    mainHeader.classList.add("open");
    menu.classList.add("hide");
    close.classList.add("display");
  }

  closeMobileNav = () => {
    let mainHeader = document.querySelector(".main-header");
    let mobileNav = document.querySelector(".mobile-nav");
    let menu = document.querySelector(".menu");
    let close = document.querySelector(".close");
    mobileNav.classList.remove("show");
    mainHeader.classList.remove("open");
    menu.classList.remove("hide");
    close.classList.remove("display");
  }

  render() {
    
    return (
      <Fragment>
      {/* {console.log(this.props.path.pathname)} */}
      <header className="main-header">
        <div className="container">
          <div className="row main">
            <Link to="/" className="main-header__brand">
              <img className="lazyload" data-src={logo} alt="C8T - Your favorite dev company" />
            </Link>
            <nav className="header-nav">
                  <ul>

                      <li className="list">
                        <Link className="underline-from-left" to={`/#services`}>What We Offer</Link>
                      </li>

                      <li className="list active">
                        <Link className="underline-from-left" to="/about">About Us</Link>
                      </li>
                      
                      <li className="list">
                        <Link className="underline-from-left" to="/work">Work</Link>
                      </li>

                      <li className="list">
                        <Link className="underline-from-left" to="/packages">Our Packages</Link>
                      </li>
                  
                      <li className="list">
                        <Link className="underline-from-left" to="/blog">Blog</Link>
                      </li>

                      <li className="list">
                        <Link className="underline-from-left" to="/hire-us">Let's Talk</Link>
                      </li>
                                   
                  </ul>  
            </nav>
            <i onClick={this.openMobileNav} className="zmdi zmdi-menu menu"></i>
            <i onClick={this.closeMobileNav} className="zmdi zmdi-close close"></i>
          </div>
          <nav className="mobile-nav">
            <ul>

              <li className="list">
                <Link onClick={this.closeMobileNav} className="underline-from-left" to={ `/#services` }>What We Offer</Link>
              </li>

              <li className="list active">
                <Link onClick={this.closeMobileNav} className="underline-from-left" to="/about">About Us</Link>
              </li>
              
              <li className="list">
                <Link onClick={this.closeMobileNav} className="underline-from-left" to="/work">Work</Link>
              </li>
                
              <li className="list">
                <Link onClick={this.closeMobileNav} className="underline-from-left" to="/packages">Our Packages</Link>
              </li>

              <li className="list">
                <Link onClick={this.closeMobileNav} className="underline-from-left" to="/blog">Blog</Link>
              </li>

              <li className="list">
                <Link onClick={this.closeMobileNav} className="underline-from-left" to="/hire-us">Let's Talk</Link>
              </li>

              {/* <Link onClick={this.closeMobileNav} to="/hire-us">
                {this.props.path.pathname === "/hire-us"?
                    <button className="nav-btn red">Hire Us</button>
                : 
                    <button className="nav-btn">Hire Us</button>
                }
              </Link> */}
            </ul>
          </nav>
        </div>
      </header>
      </Fragment>
    );
  }
}

export default Header
