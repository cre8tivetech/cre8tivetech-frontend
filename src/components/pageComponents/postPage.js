import React, { Fragment, Component } from "react"
import Loader from 'react-loader-spinner'

import Layout from "../layout"
import SEO from "../seo"
import placeHolderImage from '../../assets/img/job.jpg'
import validate from "../validator";
import getFirebase from "../firebase";
import Modal from "./modal";

const renderTermNodes = (nodes, title) => (
  <div>
    {title}
    {` `}
    {nodes.map(term => (
      <div>{term.name}</div>
    ))}
  </div> 
)

const renderTerms = (categoryNodes = [], tagNodes = []) => (
  <Fragment>
    {categoryNodes ? renderTermNodes(categoryNodes, `Categories: `) : null}
    {tagNodes && tagNodes.length ? renderTermNodes(tagNodes, `Tags: `) : null }
  </Fragment>
)

class PostPage extends Component {
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
      showConfirmMsg: false
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
    }, 4000);
  }

  render() {
    const {
      location,
      data: {
        wpgraphql: { post },
      },
    } = this.props
    const { title, content } = post
    const readTime = Math.ceil(content.replace(/(<([^>]+)>)/ig,"").split(' ').length / 300);
    const image = post.featuredImage? post.featuredImage.sourceUrl : placeHolderImage
    const mystyle = {
      background: `linear-gradient(180deg, rgba(29,45,95,0.8) 10%, rgba(64,206,227,0.8) 90%), url(${image})`,
      backgroundPosition: 'center, center top',
      backgroundSize: 'cover, cover',
      minHeight: '70vh',
    };
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
      <Layout location={location}>
        <SEO title={`Blog - ${title}`} />
        <Modal 
          show={this.state.showConfirmMsg} 
          content={modalContent} 
        />
        <section className="boxa-single-post" style={mystyle}>
            <div className="container">
              <div className="intro">
                <div className="col-6 intro__text">
                  <h3 className="l1-txt2 p-b-40"><span dangerouslySetInnerHTML={{ __html: title }} /> <i className="dot-box dot-box_yellow"></i></h3>            
                  <div className="single__box-meta">
                    <p><span className="author">{post.author.name}</span> - {readTime} min read</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="boxb">
            <div className="container">
              <div className="row">
              
                  <div className="col-12 single-post_content">
                  <div dangerouslySetInnerHTML={{ __html: content }} />
                    {post.categories.nodes.length || post.tags.nodes.length
                    ? renderTerms(post.categories.nodes, post.tags.nodes)
                    : null}
                  </div>
              </div>

            </div>
          </section>

          <section className="subscribe_box">
            <div className="container">
              <div className="row">

                <div className="col-12 subscribe">
                  <div className="email-img"></div>
                  <div className="email-subscribe">
                    <p><span className="sub-big sub-bold">Hungry for more related news?</span><br/> Subscribe to our weekly newsletter.</p>
                    <form autocomplete="off" onSubmit={this.handleSubmit}>
                      {/* <div className="form-group">
                        <label htmlFor="name"><i className="zmdi zmdi-account"></i></label>
                        <input 
                          type="text" 
                          name="name"
                          value={this.state.formControls.name.value}
                          placeholder={this.state.formControls.name.placeholder}
                          onChange={this.changeHandler}
                          touched={this.state.formControls.name.touched}
                          valid={this.state.formControls.name.valid}
                        />
                      </div> */}
                      <div className="form-group">
                        <label htmlFor="email"><i className="zmdi zmdi-email"></i></label>
                        <input 
                          type="email" 
                          name="email"
                          value={this.state.formControls.email.value}
                          placeholder={this.state.formControls.email.placeholder}
                          onChange={this.changeHandler}
                          touched={this.state.formControls.email.touched}
                          valid={this.state.formControls.email.valid}
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

      </Layout>
    )
  }
}

export default PostPage