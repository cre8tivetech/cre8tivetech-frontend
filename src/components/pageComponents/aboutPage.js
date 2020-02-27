import React, { Component } from "react";

import uche from "../../assets/img/uche.png";
import gyft from "../../assets/img/gyft.png";
import josh from "../../assets/img/josh.png";
import presh from "../../assets/img/presh.png";
import codeene from "../../assets/img/codeene.png";
import ablegenius from "../../assets/img/ablegenius.png";
import restable from "../../assets/img/restable.png";
import topline from "../../assets/img/topline.png";
import fix25 from "../../assets/img/fix25.png";
import Layout from "../layout"
import SEO from "../seo"
import './about.css'
import image from "../../assets/img/about.jpg";

class AboutPage extends Component {
  state = {
    showVideo: false
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  openVideoModal = () => {
    let videoPlayer = document.querySelector(".video-player");
    let darkModal = document.querySelector(".dark-modal");
    let closeVideo = document.querySelector(".close-video");
    videoPlayer.classList.add("show-player");
    this.setState({ showVideo: true });
    darkModal.classList.add("open-modal");
    closeVideo.classList.add("display-close-video");
  }

  closeVideoModal = () => {
    let videoPlayer = document.querySelector(".video-player");
    let darkModal = document.querySelector(".dark-modal");
    let closeVideo = document.querySelector(".close-video");
    videoPlayer.classList.remove("show-player");
    this.setState({ showVideo: false });
    darkModal.classList.remove("open-modal");
    closeVideo.classList.remove("display-close-video");
  }

  render() {
    const mystyle = {
      background: `linear-gradient(180deg, rgba(29,45,95,0.8) 10%, rgba(64,206,227,0.8) 90%), url(${image})`,
      backgroundPosition: 'center, center',
      backgroundSize: 'cover, cover',
      backgroundRepeat: 'no-repeat',
      minHeight: '70vh',
    };
    return (
        <Layout location={this.props.location}>
        <SEO title="Take a Tour and Learn Page Us - Your Branding and Software Agency" />
        <div className="dark-modal">
          <i onClick={this.closeVideoModal} className="zmdi zmdi-close close-video"></i>
          <div className="video-player">
            { this.state.showVideo ? 
              <p>Sorry Video Is Not Available At The Moment</p>
              // <iframe class="fw-video" 
              //   src="https://www.youtube.com/embed/t4b72JKvko8?autoplay=1" 
              //   width="100%" 
              //   height="100%" 
              //   frameborder="0" 
              //   webkitallowfullscreen="" 
              //   mozallowfullscreen="" 
              //   allowfullscreen=""
              // >
              // </iframe>
            :
              null
            }
          </div>
        </div>
        <section className="boxa" style={mystyle}>
          <div className="container">
            <div className="row intro">
              <div className="col-12 intro__text"> 
              <h3 className="l1-txt2 p-b-40">About Us <i className="dot-box dot-box_yellow"></i></h3>           
              <h4>AT Cre8tive Tech <i className="underline-box"></i></h4>
                <p>We are focused on the provision of digital 
                  and IT solutions, aimed at driving the effective 
                  operation and growth hack of various brands. 
                  We invest in our collaborative workspace community, 
                  to ensure a continuous stream of inspiration. 
                  By investing in an environment that breeds creativity, 
                  we inspire ourselves to develop flexible solutions that 
                  ensure a seamless workflow, for brands. At Cre8tive Tech, 
                  we are not just dreamers, we deliver!</p>
                  <div onClick={this.openVideoModal} className="play"><i class="zmdi zmdi-play"></i></div> <p className="play-text">Take a Tour</p>
              </div>
            </div>
          </div>
        </section>

        <section id="team" className="boxb">
          <div className="container boxb__content">

              <h3 className="l1-txt1 txt-center p-b-80">Team <i className="dot-box dot-box_yellow"></i></h3>

            <div className="row team">
            
                <div class="col-3 team-feed">
                  <div className="team-image">
                    <img className="lazyload" data-src={uche} alt=""/>
                  </div>
                  <div className="team-details">
                    <h3>Nwakwuo Uche K.</h3>
                    <p>CEO</p>
                  </div>
                </div>

                <div class="col-3 team-feed">
                  <div className="team-image">
                    <img className="lazyload" data-src={gyft} alt=""/>
                  </div>
                  <div className="team-details">
                    <h3>Ndu Delight C.K.</h3>
                    <p>COO</p>
                  </div>
                </div>

                <div class="col-3 team-feed">
                  <div className="team-image">
                    <img className="lazyload" data-src={josh} alt=""/>
                  </div>
                  <div className="team-details">
                    <h3>Nwakwuo Joshua E.</h3>
                    <p>CTO</p>
                  </div>
                </div>

                <div class="col-3 team-feed">
                  <div className="team-image">
                    <img className="lazyload" data-src={presh} alt=""/>
                  </div>
                  <div className="team-details">
                    <h3>Balogun Precious O.</h3>
                    <p>Snr. Marketing Manager</p>
                  </div>
                </div>

            </div>

          </div>
        </section>

        <section className="boxf">
          <div className="container">

            <div className="row">
            
                <div className="mission-item">
                  <h4>OUR VISSION <i className="underline-box"></i></h4>
                  <p className="p-b-20">We envision leading Top African Brands by 
                  the hand, to take on new horizons and opportunities, 
                  in a creative digital ecosystem where brand-consumer 
                  connection thrives.</p>
                </div>
                <div className="mission-item">
                  <h4>OUR MISSION <i className="underline-box"></i></h4>
                  <p>To breed and employ the creativity of Top Talents 
                    in the delivery of quality and innovative solutions, 
                    which would ensure that effectiveness, efficiency, 
                    and growth are expressly experienced by partner brands.</p>
                </div>

            </div>

          </div>
        </section>

        <section className="boxe">
          <div className="container">

            <h3 className="l1-txt1 txt-center p-b-80">Brands We've Worked With <i className="dot-box dot-box_yellow"></i></h3>

            <div className="row">
              <div className="clients__box">
               <img className="lazyload" data-src={codeene} alt=""/>
              </div>
              <div className="clients__box">
               <img className="lazyload" data-src={ablegenius} alt=""/>
              </div>
              <div className="clients__box">
               <img className="lazyload" data-src={restable} alt=""/>
              </div>
              <div className="clients__box">
               <img className="lazyload" data-src={topline} alt=""/>
              </div>
              <div className="clients__box">
               <img src={fix25} alt=""/>
              </div>

            </div>

          </div>
        </section>

      </Layout>
    );
  }
}

export default AboutPage;
