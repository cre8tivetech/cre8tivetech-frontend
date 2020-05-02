import React, { Component, Fragment } from "react";

import image from '../../assets/img/sent.png';


class Modal extends Component {
  state = {
    showModal: false
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.show) {
      this.setState({
        showModal: true
      })
    }
  }

  render () {
    const modal = (
      <Fragment>
        <div className="modal-box">
          <i onClick={this.props.closeModal} className="zmdi zmdi-close modal-close"></i>
          <img className="lazyload" data-src={image} alt="sent" />
          <h2>THANK YOU.</h2>
          {this.props.content}
          <span className="modal-tel">+234 8136 217 902</span>
          <h3>Follow Us</h3>
          <div className="modal-socials">
            <span className="modal-social">
              <a target='blank' href="https://fb.me/cre8tivetech">
                <i className="zmdi zmdi-facebook"></i>
              </a>
            </span>

            <span className="modal-social">
              <a target='blank' href="https://www.instagram.com/cre8tive_tech">
                <i className="zmdi zmdi-instagram"></i>
              </a>
            </span>
            
            <span className="modal-social">
              <a target='blank' href="https://twitter.com/cre8tive_tech">
                <i className="zmdi zmdi-twitter"></i>
              </a>
            </span>

            <span className="modal-social">
              <a target='blank' href="https://www.linkedin.com/company/cre8tivetech">
                <i className="zmdi zmdi-linkedin"></i>
              </a>
            </span>

            <span className="modal-social">
              <a target='blank' href="https://github.com/cre8tivetech">
                <i className="zmdi zmdi-github"></i>
              </a>
            </span>

            <span className="modal-social">
              <a target='blank' href="https://www.youtube.com/channel/UCEki9HP1nFCbOJS3a4J5J5Q">
                <i className="zmdi zmdi-youtube-play"></i>
              </a>
            </span>      
          </div>
        </div>
      </Fragment>
    )
    console.log('show: ',this.props.show);
    console.log('showModel: ',this.state.showModal)
    return this.props.show ? modal : null
  }
}

export default Modal