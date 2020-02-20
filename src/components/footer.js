import React, { Component, Fragment } from "react";

class Footer extends Component {

  // state = {
  //   // database: null,
  //   // messagesRef: null,
  //   // trySubmit: false,

  //   formIsValid: false,

  //   showConfirmMsg: false,

  //   formControls: {
  //     email: {
  //       value: '',
  //       placeholder: "Please enter your email address",
  //       valid: false,
  //       touched: false,
  //       validationRules: {
  //         minLength: 4,
  //         isEmail: true,
  //         isRequired: true
  //       }
  //     },
  //     name: {
  //       value: '',
  //       placeholder: "Please enter your name",
  //       valid: false,
  //       touched: false,
  //       validationRules: {
  //         minLength: 3,
  //         isRequired: true
  //       }
  //     },
  //   }
  // }

  render() {
    return (
      <Fragment>
        <section id="contact" className="boxg">
          <div className="container boxg__content">

            <div className="row">
              <div className="col-6 about">
                <h4>Ready to start a project? <i className="underline-box"></i></h4>
                <p className="p-b-20">Let's build something awesome together!<br/> 
                  Email us at - hello@cre8tivetech.com<br/> or call +2348136217902, +2348151736887</p>

                <h4>Head Office <i className="underline-box"></i></h4>
                <p>No 5 Association Close, Association Estate,<br/> 
                  Mowe, Ogun State,<br/>
                  Nigeria.</p>
                
                  <a href="/hire-us"><button className="contact__btn">Request Quote ➜</button></a>
              </div>
              <div className="col-6 subscribe">
                <div className="email-img"></div>
                <div className="email-subscribe">
                  <p><span className="sub-big sub-bold">SUBSCRIBE</span><br/> TO OUR <br/><span className="sub-big">NEWSLETTER</span></p>
                  <form>
                    <div className="form-group">
                      <label for="email"><i className="zmdi zmdi-email"></i></label>
                      <input type="email" name="email" placeholder="Enter Your Email"></input>
                    </div>
                    <div className="form-group">
                      <input name="btn" type="submit" value="SUBSCRIBE"></input>
                      {/* {props.showConfirmMsg? (<p className="success">Thanks for your Message!</p>) : null} */}
                    </div>
                  </form>
                </div>
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
