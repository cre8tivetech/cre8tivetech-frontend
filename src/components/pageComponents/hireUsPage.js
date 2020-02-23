import React, { Component } from "react"
import Loader from 'react-loader-spinner'
// import { Link } from "gatsby";

import NameInput from "../FormInput/NameInput";
import PhoneInput from "../FormInput/PhoneInput";
import DateInput from "../FormInput/DateInput";
import TextInput from "../FormInput/TextInput";
import EmailInput from "../FormInput/EmailInput";
import BudgetInput from "../FormInput/BudgetInput";
import validate from "../validator";
import getFirebase from "../firebase";
import Layout from "../layout"
import SEO from "../seo"
import Modal from "./modal";

import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"


class HireUsPage extends Component {

  state = {
    database: null,
    messagesRef: null,
    trySubmit: false,

    formIsValid: false,

    showConfirmMsg: false,

    formControls: {
      email: {
        value: '',
        placeholder: "Please enter your email address",
        valid: false,
        touched: false,
        validationRules: {
          minLength: 4,
          isEmail: true,
          isRequired: true
        }
      },
      name: {
        value: '',
        placeholder: "Please enter your name",
        valid: false,
        touched: false,
        validationRules: {
          minLength: 3,
          isRequired: true
        }
      },
      phone: {
        value: '',
        placeholder: "Please enter your phone number",
        valid: false,
        touched: false,
        validationRules: {
          minLength: 3,
          isRequired: true
        }
      },
      date: {
        value: '',
        placeholder: "Please enter date or timeframe",
        valid: false,
        touched: false,
        validationRules: {
          minLength: 3,
          isRequired: true
        }
      },
      budget: {
        value: '',
        placeholder: "1000",
        valid: false,
        touched: false,
        validationRules: {
          isRequired: true
        }
      },
      textarea: {
        value: '',
        placeholder: "Please provide details",
        valid: false,
        touched: false,
        validationRules: {
          minLength: 1,
          isRequired: true
        }
      },
      uix: {
        checkBtn: true,
        checked: false,
        valid: true,
        validationRules: {
          isRequired: false
        }
      },
      web: {
        checkBtn: true,
        checked: false,
        valid: true,
        validationRules: {
          isRequired: false
        }
      },
      app: {
        checkBtn: true,
        checked: false,
        valid: true,
        validationRules: {
          isRequired: false
        }
      },
      branding: {
        checkBtn: true,
        checked: false,
        valid: true,
        validationRules: {
          isRequired: false
        }
      },
      marketing: {
        checkBtn: true,
        checked: false,
        valid: true,
        validationRules: {
          isRequired: false
        }
      },
      others: {
        checkBtn: true,
        checked: false,
        valid: true,
        validationRules: {
          isRequired: false
        }
      }
    }
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    const lazyApp = import('@firebase/app')
    const lazyDatabase = import('@firebase/database')

    Promise.all([lazyApp, lazyDatabase]).then(([firebase]) => {
      const database = getFirebase(firebase).database()
      
      //Reference messeges collection
      const messagesRef = getFirebase(firebase).database().ref('messeges');

      this.setState({
        database,
        messagesRef
      })
    })
  }

  changeHandler = event => {
    const name = event.target.name;
    const value = event.target.value;

    // Change Select Input Color to blue when its changed
    const select = document.querySelector("#budget");  
    if (name === 'budget') {
      select.style.color = '#1d2d5f'
    }
  
    const updatedControls = {
      ...this.state.formControls
    };
    const updatedFormElement = {
      ...updatedControls[name]
    };
    updatedFormElement.value = value;
    updatedFormElement.touched = true;
    if (updatedFormElement.checkBtn) {
      updatedFormElement.checked = !updatedFormElement.checked;
    }
    
    
    updatedFormElement.valid = validate(value, updatedFormElement.validationRules);

    updatedControls[name] = updatedFormElement;

    let formIsValid = true;

    for (let inputIdentifier in updatedControls) {
      formIsValid = updatedControls[inputIdentifier].valid && formIsValid;
    }
    
    this.setState({
      formControls: updatedControls,
      formIsValid: formIsValid,
      showConfirmMsg: false
    });
    
    // console.log(updatedControls);
  }

  closeModal = () => {
    
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
      name: this.state.formControls.name.value,
      email: this.state.formControls.email.value,
      budget: this.state.formControls.budget.value,
      phone: this.state.formControls.phone.value,
      dateToComplete: this.state.formControls.date.value,
      projectType: {
        uix: this.state.formControls.uix.checked,
        web: this.state.formControls.web.checked,
        app: this.state.formControls.app.checked,
        branding: this.state.formControls.branding.checked,
        marketing: this.state.formControls.marketing.checked,
        others: this.state.formControls.others.checked,
      },
      message: this.state.formControls.textarea.value,
    }

    // Sending Message to Firebase
    let newmessagesRef = this.state.messagesRef.push();
    newmessagesRef.set(data)
    console.log(data)

    const updatedValidControls = {
        ...this.state.formControls
    };

    setTimeout(() => { 
      this.triggerConfirmMsg()
      // Clear Form Input
      for (let inputIdentifier in updatedValidControls) {
        if (updatedValidControls[inputIdentifier].checkBtn) {
          updatedValidControls[inputIdentifier].checked = false;
        }
        else {
          updatedValidControls[inputIdentifier].value = '';
          updatedValidControls[inputIdentifier].valid = false;
          updatedValidControls[inputIdentifier].touched = false;
        }
      }
      this.setState({
        formControls: updatedValidControls,
      });
    }, 4000);
  }

  render() {
    const modalContent = <p>
        Your message has been recieved and we will be contacting you shortly to follow-up. 
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
      <Layout location={this.props.location}>
        <SEO title="Hire Us For Your Software & Branding Solutions" />
        <Modal 
          show={this.state.showConfirmMsg} 
          content={modalContent} 
        />
        <section className="boxa-hire">
          <div className="container">
            <div className="intro">
              <div className="col-6 intro__text">
                <h3 className="l1-txt2 p-b-40">Let's Talk <i className="dot-box dot-box_yellow"></i></h3>            
                <p>
                  Got a challenge?<br/> Need to brainstorm on ideas?<br/> Want to chat about your project?<br/><br/>
                  Let's get to work! Please answer a couple of 
                  short questions about you and your project.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="request">
          <div className="container">

            <div className="row form">
              <div className="col-12">
                
                <form autocomplete="on" onSubmit={this.handleSubmit} className="request-form" id="request-form">
                <h4>Hi! How can we help you? <i className="underline-box"></i></h4>
                  <p className="p-b-0">HI! MY NAME IS <span className="required">*</span></p>
                  <NameInput 
                    value={this.state.formControls.name.value}
                    placeholder={this.state.formControls.name.placeholder}
                    onChange={this.changeHandler}
                    touched={this.state.formControls.name.touched}
                    valid={this.state.formControls.name.valid}
                  />

                  <p className="p-b-0">MY EMAIL ADDRESS IS <span className="required">*</span></p>
                  <EmailInput
                    value={this.state.formControls.email.value}
                    placeholder={this.state.formControls.email.placeholder}
                    onChange={this.changeHandler}
                    touched={this.state.formControls.email.touched}
                    valid={this.state.formControls.email.valid} 
                  />

                  <p className="p-b-0">MY PHONE NUMBER IS <span className="required">*</span></p>
                  <PhoneInput 
                    value={this.state.formControls.phone.value}
                    placeholder={this.state.formControls.phone.placeholder}
                    onChange={this.changeHandler}
                    touched={this.state.formControls.phone.touched}
                    valid={this.state.formControls.phone.valid}
                  />

                  <p className="p-b-0">I NEED HELP WITH <span className="required">*</span></p>
                  <TextInput
                    value={this.state.formControls.textarea.value}
                    placeholder={this.state.formControls.textarea.placeholder}
                    onChange={this.changeHandler}
                    touched={this.state.formControls.textarea.touched}
                    valid={this.state.formControls.textarea.valid}
                  />

                  <p className="p-b-0">PROJECT TYPE</p>
                  <div className="form-group pj-type">
                    <div>
                      <input 
                        type="checkbox" 
                        id="uix" 
                        name="uix" 
                        checked={this.state.formControls.uix.checked} 
                        onChange={this.changeHandler} 
                        value="UIX"
                      />
                      <label for="uix"> UX/UI design</label>
                    </div>
                    <div className="">
                      <input 
                        type="checkbox" 
                        id="web" 
                        name="web" 
                        checked={this.state.formControls.web.checked} 
                        onChange={this.changeHandler} 
                        value="Web"
                      />
                      <label for="web"> Web Design & Development</label>
                    </div>
                    <div className="">
                      <input 
                        type="checkbox" 
                        id="app" 
                        name="app" 
                        checked={this.state.formControls.app.checked} 
                        onChange={this.changeHandler} 
                        value="App"
                      />
                      <label for="app"> Custom Software & App Development</label>
                    </div>
                    <div className="">
                      <input 
                        type="checkbox" 
                        id="branding" 
                        name="branding" 
                        checked={this.state.formControls.branding.checked} 
                        onChange={this.changeHandler} 
                        value="Branding"
                      />
                      <label for="branding"> Branding & Identity (Logo, Id card, ...)</label>
                    </div>
                    <div className="">
                      <input 
                        type="checkbox" 
                        id="marketing" 
                        name="marketing" 
                        checked={this.state.formControls.marketing.checked} 
                        onChange={this.changeHandler} 
                        value="Marketing"
                      />
                      <label for="marketing"> Digital Marketing & Lead Generation</label>
                    </div>
                    <div className="">
                      <input 
                        type="checkbox" 
                        id="others" 
                        name="others" 
                        checked={this.state.formControls.others.checked} 
                        onChange={this.changeHandler} 
                        value="others"
                      />
                      <label for="others"> Others</label>
                    </div>
     
                  </div>

                  <p className="p-b-0">MY GOAL IS TO HAVE THIS COMPLETED BY OR NEAR <span className="required">*</span></p>
                  <DateInput 
                    value={this.state.formControls.date.value}
                    placeholder={this.state.formControls.date.placeholder}
                    onChange={this.changeHandler}
                    touched={this.state.formControls.date.touched}
                    valid={this.state.formControls.date.valid}
                  />

                  <p className="p-b-0">I HAVE A BUDGET OF <span className="required">*</span></p>
                  <BudgetInput
                    value={this.state.formControls.budget.value}
                    onChange={this.changeHandler}
                    touched={this.state.formControls.budget.touched}
                    valid={this.state.formControls.budget.valid}
                  />


                  <div className="form-group send-btn">
                      <input type="submit" name="send" id="send" disabled={!this.state.formIsValid} value="Send"/>
                      {this.state.trySubmit ? loader : null}
                  </div>
                </form>
              </div>

            </div>

          </div>
        </section>

      </Layout>
    );
  }
}

export default HireUsPage;

