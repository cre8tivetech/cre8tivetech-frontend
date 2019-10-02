import React, { Component } from "react";
import { Link } from "gatsby";
import axios from "axios";

import mac from "../assets/img/mac.png";
import web from "../assets/img/web-icon.png";
import mobile from "../assets/img/mobile-icon.png";
import software from "../assets/img/software-icon.png";
import brand from "../assets/img/brand-icon.png";
import uix from "../assets/img/uix-icon.png";
import marketing from "../assets/img/marketing-icon.png";
import ablegeniusPortfolio from "../assets/img/ablegenius-portfolio.png";
import toplinePortfolio from "../assets/img/topline-portfolio.png";
import Type from "../components/Type";
import InstagramFeed from "../components/InstagramFeed"
import Layout from "../components/layout"
import SEO from "../components/seo"

class Landing extends Component {
  state = {
    instaFeed: null,
    loading: true
  }
  componentDidMount() {
    window.scrollTo(0, 0);
    const txtElement = document.querySelector(".txt-type");
    const words = [
      "WEBSITE",
      "MOBILE APP",
      "SOFTWARE",
      "BRANDING",
      "UI/UX DESIGN",
      "MARKETING"
    ];
    const wait = 5000;

    // Init TypeWriter
    new Type(txtElement, words, wait);

    // Start instaFeed
    this.instaFeed()
  }

  instaFeed = () =>{
    axios.get(
      `https://api.instagram.com/v1/users/self/media/recent/?access_token=${process.env.GATSBY_INSTAGRAM_ACCESS_TOKEN}&count=8`
    )
      .then(res => {
        const size = 8
        this.setState({
          instaFeed: res.data.data.slice(0, size),
          loading: false
        });
      }).catch(err => console.log(err))
  }

  renderInstaFeed = feed => {
    // if(!this.state.loading)console.log("instaFeed: ",feed.map(c => c.link))
    return (
      feed.map(c => {
        return (
          <InstagramFeed image={c.images.standard_resolution.url} type={c.type} link={c.link} />
        )
      })
    )
    
  }

  render() {
    const { instaFeed, loading } = this.state;

    return (
      <Layout location={this.props.location}>
        <SEO title={`Web Development, Mobile App, Brand Identity, User Experience Design, Software & Digital Marketing`} />
        <section className="boxa">
          <div className="container">
            <div className="row intro">
              <div className="col-6 intro__text">
                <h3 className="l1-txt2 p-b-40">Hi <i className="dot-box"></i></h3>            
                <p>
                  Cre8tive Tech is a digital design 
                  company that fosters synergy between creativity 
                  and technology. We are specialized in the art of 
                  crafting emotive brand identities and developing 
                  engaging web experiences that inspire meaningful 
                  conversation between brands and their consumers.
                </p>
                {/* <div className="play"></div> <p className="play-text">Take a Tour</p> */}
              </div>
              <div className="col-6 intro__adv">
                <div className="intro__adv-img">
                  <img src={mac} alt="" />
                  <div className="intro__adv-head" />
                  <p className="intro__adv-text">
                    WE HELP YOU WITH <br /> YOUR
                    <span className="txt-type" />
                  </p>
                  <Link to="/hire-us"><button className="btn">Request Quote</button></Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="boxb">
          <div className="container boxb__content">

              <h3 className="l1-txt1 txt-center p-b-80">What We Offer <i className="dot-box"></i></h3>

              <div className="row">
                <div className="col-4 services__box">
                  <img src={web} alt=""/>
                  <h2>WEBSITE DEVELOPMENT</h2>
                  <p>Front-end Development <br/> CMS Development <br/> Web Apps</p>
                </div>
                <div className="col-4 services__box">
                  <img src={mobile} alt=""/>
                  <h2>MOBILE APP</h2>
                  <p>Mobile App Design <br/> iOS App Development <br/> Android App Development <br/> Cross-platform Development</p>
                </div>
                <div className="col-4 services__box">
                  <img src={uix} alt=""/>
                  <h2>UIX DESIGN</h2>
                  <p>Prototyping <br/> Content Strategy <br/> Responsive Design</p>
                </div>

                <div className="col-4 services__box">
                  <img src={brand} alt=""/>
                  <h2>BRAND IDENTITY</h2>
                  <p>Visual Identity <br/> Brand Assets <br/> Brand Guidelines</p>
                </div>
                <div className="col-4 services__box">
                  <img src={software} alt=""/>
                  <h2>SOFTWARE</h2>
                  <p>CRM Software <br/> Workflow Management Software <br/> ERP Systems Development <br/> Application Re-Modelling</p>
                </div>
                <div className="col-4 services__box">
                  <img src={marketing} alt=""/>
                  <h2>DIGITAL MARKETING</h2>
                  <p>Search Engine Optimisation(SEO) <br/> Social Media Marketing <br/> Email Marketing <br/> Content Marketing</p>
                </div>
              </div>
              
          </div>
        </section>

        <section className="boxc">
          <div className="container">

            <div className="row">
              <div className="col-6 project__box">
                <img src={ablegeniusPortfolio} alt=""/>
                <div className="project__box-title">
                  <h3>Ablegenius</h3>
                  <p>Branding</p>
                </div>
              </div>

              <div className="col-6 project__box">
                <img src={toplinePortfolio} alt=""/>
                <div className="project__box-title">
                  <h3>Topline Promoters</h3>
                  <p>Branding • UI/UX Design • Web Development</p>
                </div>
              </div>

            </div>

          </div>
        </section>

        <section id="about" className="boxf">
          <div className="container">

            <div className="row">
              <div>
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
                
                <Link to="/about"><button className="about__btn">Know More</button></Link>
              </div>
              

            </div>

          </div>
        </section>

        <section id="stories" className="insta">
          <div className="container">

            <div className="row">

              <div className="col-12">
                <h3 className="l1-txt1 txt-center p-b-80">Our Stories <i className="dot-box"></i></h3>
                <h4>What's happening... <i className="underline-box"></i></h4>
                <p>Follow us on Instagram, Facebook, Linkedin and Medium for inside stories, latest projects, thoughts, and behind the scenes from the Cre8tive Tech media.</p>
              </div>

              {loading? "Instagarm Feed Loading..." : this.renderInstaFeed(instaFeed)}
              
            </div>

          </div>
        </section>

        <section id="contact" className="boxg">
          <div className="container">

            <div className="row">
              <div className="col-6 about">
                <h4>Ready to start a project? <i className="underline-box"></i></h4>
                <p className="p-b-20">Let's build something awesome together!<br/> 
                  Email us at - hello@cre8tivetech.com<br/> or call +2348136217902, +2348151736887</p>

                <h4>Head Office <i className="underline-box"></i></h4>
                <p>No 5 Association Close, Association Estate,<br/> 
                  Mowe, Ogun State,<br/>
                  Nigeria.</p>
                
                  <a href="/hire-us"><button className="contact__btn">Request Quote</button></a>
              </div>
              <div className="col-6 map">
               <a href="https://maps.google.com/maps?q=6.832456,3.433376" target="_blank" rel="noopener noreferrer">
                <img src="https://maps.googleapis.com/maps/api/staticmap?center=6.832456,3.433376&markers=6.832456,3.433376&zoom=14&size=500x500&key=AIzaSyBpy77BL6h2fG8Vbm3dkAqLFFl_lzFdtHc" alt="map" />
              </a>
              </div>

            </div>

          </div>
        </section>

      </Layout>
    );
  }
}

export default Landing;
