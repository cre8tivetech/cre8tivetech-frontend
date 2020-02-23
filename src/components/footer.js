import React, { Component, Fragment } from "react";
import { Link } from 'gatsby';

class Footer extends Component {
  render() {
    return (
      <Fragment>
        
        <section id="contact" className="boxg">
          <div className="container boxg__content">

            <div className="sub-footer">
              <div className="col-4 sub-footer_box">
                <h4>Ready to start a project? <i className="underline-box"></i></h4>
                <p className="p-b-20">Let's build something awesome together!<br/> 
                  Email us at - hello@cre8tivetech.com<br/> or call +2348136217902, +2348151736887</p>

              </div>

              <div className="col-4 sub-footer_box">

                <h4>Head Office <i className="underline-box"></i></h4>
                <p>No 5 Association Close, Association Estate,<br/> 
                  Mowe, Ogun State,<br/>
                  Nigeria.</p>
              </div>

              <div className="col-4 sub-footer_box">
                <h4>Quick Links <i className="underline-box"></i></h4>
                <div className="sub-footer_links">
                  <ul>
                    <li className="list">
                      <Link className="underline-from-left" to={`about/#team`}>Team</Link>
                    </li>
                    <li className="list">
                      <Link className="underline-from-left" to="/work">Our Work</Link>
                    </li>
                    <li className="list">
                      <Link className="underline-from-left" to="/about">About Us</Link>
                    </li>
                    <li className="list">
                      <Link className="underline-from-left" to="/hire-us">Hire Us</Link>
                    </li>
                    
                  </ul>

                  <ul>
                    <li className="list">
                      <Link className="underline-from-left" to={`/#services`}>Services</Link>
                    </li>
                    <li className="list">
                      <Link className="underline-from-left" to="/blog">Blog</Link>
                    </li>
                    <li className="list">
                      <Link className="underline-from-left" to="/privacy-policy">Privacy</Link>
                    </li>
                  </ul>
                </div>
                
              </div>

              <div className="col-12 sub-footer_box">
                <a href="/hire-us"><button className="contact__btn">Request Quote ➜</button></a>
              </div>

            </div>

          </div>
        </section>      
      
        <footer className="main-footer">
          <div className="container">
          
            <div className="row">

              <div className="col-9 copyright">
                <p>&copy; 2019 Cre8tive Tech</p>
              </div>

              <div className="col-3 socials">
                <a className="underline-from-left" target='blank' href="https://fb.me/cre8tivetech">
                  <i className="zmdi zmdi-facebook"></i>
                </a>
                <a className="underline-from-left" target='blank' href="https://www.instagram.com/cre8tive_tech">
                  <i className="zmdi zmdi-instagram"></i>
                </a>
                <a className="underline-from-left" target='blank' href="https://twitter.com/cre8tive_tech">
                  <i className="zmdi zmdi-twitter"></i>
                </a>
                <a className="underline-from-left" target='blank' href="https://www.linkedin.com/company/cre8tivetech">
                  <i className="zmdi zmdi-linkedin"></i>
                </a>
                <a className="underline-from-left" target='blank' href="https://github.com/cre8tivetech">
                  <i className="zmdi zmdi-github"></i>
                </a>
                <a className="underline-from-left" target='blank' href="https://www.youtube.com/channel/UCEki9HP1nFCbOJS3a4J5J5Q">
                  <i className="zmdi zmdi-youtube-play"></i>
                </a>

                
              </div>
            </div>
            
          </div>
        </footer>
      </Fragment>
    )
  }
}

export default Footer
