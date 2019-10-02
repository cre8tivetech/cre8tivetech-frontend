import React, { Component } from "react"
// import { Link } from "gatsby"

import NameInput from "../components/FormInput/NameInput";
import TextInput from "../components/FormInput/TextInput";
import EmailInput from "../components/FormInput/EmailInput";
import BudgetInput from "../components/FormInput/BudgetInput";
import validate from "../components/validator";
import messagesRef from "../components/firebase";
import Layout from "../components/layout"
import SEO from "../components/seo"


class HireUs extends Component {

  state = {
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
      budget: {
        value: '',
        placeholder: "1000",
        valid: true,
        touched: false,
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
      }
    }
  }

  componentDidMount() {
    window.scrollTo(0, 0);
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
      formIsValid: formIsValid
    });
  
  }

  triggerConfirmMsg = () => {
    if (this.state.formIsValid) {
      this.setState({
        showConfirmMsg: true
      })
    }
  }

  handleSubmit = event => {
    event.preventDefault();
    const data = {
      name: this.state.formControls.name.value,
      email: this.state.formControls.email.value,
      budget: this.state.formControls.budget.value,
      message: this.state.formControls.textarea.value,
    }

    // Sending Message to Firebase
    let newmessagesRef = messagesRef.push();
    newmessagesRef.set(data)
    // console.log(data)

    const updatedControls = {
      ...this.state.formControls
    };

    const formIsValid = false

    for (let inputIdentifier in updatedControls) {
      updatedControls[inputIdentifier].value = '';
      updatedControls[inputIdentifier].valid = false;
      updatedControls[inputIdentifier].touched = false;
    }

    // Clear Form Input
    this.setState({
      formControls: updatedControls,
      formIsValid: formIsValid,
      trySubmit: true
    });
    this.triggerConfirmMsg()
  }

  render() {

    return (
      <Layout location={this.props.location}>
        <SEO title="Hire Us For Your Software & Branding Solutions" />

        <section className="request">
          <div className="container">

            <h3 className="l1-txt2 p-t-80 p-b-80">Hire Us <i className="dot-box"></i></h3>

            <div className="row form">
              <div className="col-12">
                
                <form autocomplete="off" onSubmit={this.handleSubmit} className="request-form" id="request-form">
                <h4>Hi! How can we help you? <i className="underline-box"></i></h4>
                  <p className="p-b-0">HI! MY NAME IS <span className="required">*</span></p>
                  <NameInput 
                    value={this.state.formControls.name.value}
                    placeholder={this.state.formControls.name.placeholder}
                    onChange={this.changeHandler}
                    touched={this.state.formControls.name.touched}
                    valid={this.state.formControls.name.valid}
                  />

                  <p className="p-b-0">I NEED HELP WITH <span className="required">*</span></p>
                  <TextInput
                    value={this.state.formControls.textarea.value}
                    placeholder={this.state.formControls.textarea.placeholder}
                    onChange={this.changeHandler}
                    touched={this.state.formControls.textarea.touched}
                    valid={this.state.formControls.textarea.valid}
                  />

                  <p className="p-b-0">I HAVE A BUDGET OF</p>
                  <BudgetInput
                    value={this.state.formControls.budget.value}
                    placeholder={this.state.formControls.budget.placeholder}
                    onChange={this.changeHandler}
                    touched={this.state.formControls.budget.touched}
                    valid={this.state.formControls.budget.valid} 
                  />

                  <p className="p-b-0">MY EMAIL ADDRESS IS <span className="required">*</span></p>
                  <EmailInput
                    value={this.state.formControls.email.value}
                    placeholder={this.state.formControls.email.placeholder}
                    onChange={this.changeHandler}
                    touched={this.state.formControls.email.touched}
                    valid={this.state.formControls.email.valid} 
                  />

                  <div className="form-group">
                      <input type="submit" name="send" id="send" disabled={!this.state.formIsValid} value="Send"/>
                      {this.state.showConfirmMsg? (<p className="success">Thanks for your Message!</p>) : null}
                  </div>
                </form>
              </div>

            </div>

          </div>
        </section>

        <section className="boxg">
          <div className="container">

            <div className="row">
              <div className="col-6 about">
                <h4>Ready to start a project? <i className="underline-box"></i></h4>
                <p className="p-b-20">Let's build something awesome together!<br/> 
                  Email us at - hello@cre8tivetech.com<br/> or call +2348136217902</p>

                <h4>Head Office <i className="underline-box"></i></h4>
                <p>No 5 Association Close, Association Estate,<br/> 
                  Mowe, Ogun State,<br/>
                  Nigeria.</p>
                
                  <a href="/hire-us"><button className="contact__btn">Request Quote</button></a>
              </div>
              <div className="col-6 map">
                <img src="https://maps.googleapis.com/maps/api/staticmap?center=6.810720,3.436600&markers=6.810720,3.436600&zoom=14&size=500x500&key=AIzaSyBpy77BL6h2fG8Vbm3dkAqLFFl_lzFdtHc" alt="map" />
              </div>

            </div>

          </div>
        </section>

      </Layout>
    );
  }
}

export default HireUs;

