import React, { Component, Fragment } from "react";
import { Link } from 'gatsby';
import Loader from 'react-loader-spinner'

import validate from "../components/validator";
import getFirebase from "../components/firebase";
import Modal from "./pageComponents/modal";

class Footer extends Component {
  state = {
    database: null,
    newslettersRef: null,
    trySubmit: false,

    formIsValid: false,

    showConfirmMsg: false,

    formControls: {
      email: {
        value: '',
        placeholder: "your@email.com",
        valid: false,
        touched: false,
        validationRules: {
          minLength: 4,
          isEmail: true,
          isRequired: true
        }
      },
      // name: {
      //   value: '',
      //   placeholder: "Enter Your Name",
      //   valid: false,
      //   touched: false,
      //   validationRules: {
      //     minLength: 3,
      //     isRequired: true
      //   }
      // },
    } 
  }

  componentDidMount() {
    const lazyApp = import('@firebase/app')
    const lazyDatabase = import('@firebase/database')

    Promise.all([lazyApp, lazyDatabase]).then(([firebase]) => {
      const database = getFirebase(firebase).database()
      
      //Reference messeges collection
      const newslettersRef = getFirebase(firebase).database().ref('newsletter');

      this.setState({
        database,
        newslettersRef
      })
    })
  }

  changeHandler = event => {
    const name = event.target.name;
    const value = event.target.value;
  
    const updatedControls = {
      ...this.state.formControls
    };
    const updatedFormElement = {
      ...updatedControls[name]
    };
    updatedFormElement.value = value;
    updatedFormElement.touched = true;
    
    updatedFormElement.valid = validate(value, updatedFormElement.validationRules);

    updatedControls[name] = updatedFormElement;

    let formIsValid = true;

    for (let inputIdentifier in updatedControls) {
      formIsValid = updatedControls[inputIdentifier].valid && formIsValid;
    }
    
    this.setState({
      formControls: updatedControls,
      formIsValid: formIsValid,
      // showConfirmMsg: false
    });    
  }

  triggerConfirmMsg = () => {
    const body = document.querySelector('body');
    const darkOverlay = document.querySelector('.dark-overlay');
    body.style.overflow = 'hidden';
    darkOverlay.style.height = '100vh';
    this.setState({
      showConfirmMsg: true,
      trySubmit: false
    })
  }

  handleSubmit = event => {
    event.preventDefault();

    const formIsValid = false

    // Disable send button
    this.setState({
      formIsValid: formIsValid,
      trySubmit: true,
    });

    const data = {
      // name: this.state.formControls.name.value,
      email: this.state.formControls.email.value,
    }

    // Sending Message to Firebase
    let newNewslettersRef = this.state.newslettersRef.push();
    newNewslettersRef.set(data)
    console.log(data)

    const updatedValidControls = {
        ...this.state.formControls
    };

    setTimeout(() => { 
      this.triggerConfirmMsg()
      // Clear Form Input
      for (let inputIdentifier in updatedValidControls) {
        updatedValidControls[inputIdentifier].value = '';
        updatedValidControls[inputIdentifier].valid = false;
        updatedValidControls[inputIdentifier].touched = false;
      }
      this.setState({
        formControls: updatedValidControls,
      });
    }, 3000);
  }

  closeModal = () => {
    const body = document.querySelector('body');
    const darkOverlay = document.querySelector('.dark-overlay');
    if (darkOverlay) {
      body.style.overflow = 'auto';
      darkOverlay.style.height = '0'
      this.setState({
        showConfirmMsg: false,
      })
    }
  }

  render() {
    const modalContent = <p>
        Your subscription has been successfully confirmed. 
        If you would like to speak to someone immediately feel free to call.
    </p>
    const loader = (
      <Loader
          type="Puff"
          color="#1d2d5f"
          height={30}
          width={30}
        />
    )
    return (
      <Fragment>
        <Modal
          closeModal={this.closeModal}
          show={this.state.showConfirmMsg} 
          content={modalContent} 
        />

        <section className="subscribe_box">
          <div className="container">
            <div className="row">

              <div className="col-12 subscribe">
                <div className="email-img"></div>
                <div className="email-subscribe">
                  <h3 className="sub-big sub-bold">SUBSCRIBE TO OUR NEWSLETTER <i className="dot-box dot-box_blue"></i></h3><br/> 
                  <p>Be the first to know 
                    about the latest posts, updates and 
                    exclusive promotions from us. No spam, we guarantee!
                  </p>
                  <form autoComplete="off" onSubmit={this.handleSubmit}>
                    <div className="form-group">
                      <label htmlFor="email"><i className="zmdi zmdi-email"></i></label>
                      <input 
                        type="email" 
                        name="email"
                        value={this.state.formControls.email.value}
                        placeholder={this.state.formControls.email.placeholder}
                        onChange={this.changeHandler}
                        touched={toString(this.state.formControls.email.touched)}
                        valid={toString(this.state.formControls.email.valid)}
                      />
                    </div>
                    <div className="form-group subscribe-btn">
                      <input name="btn" type="submit" disabled={!this.state.formIsValid} value="SUBSCRIBE"></input>
                      {this.state.trySubmit ? loader : null}
                    </div>
                  </form>
                </div>
              </div>

            </div>

          </div>
        </section>
        
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