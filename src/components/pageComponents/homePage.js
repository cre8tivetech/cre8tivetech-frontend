import React, { Component } from "react";
import { Link } from "gatsby";
import axios from "axios";

import mac from "../../assets/img/mac.png";
import web from "../../assets/img/web-icon.png";
import mobile from "../../assets/img/mobile-icon.png";
import software from "../../assets/img/software-icon.png";
import brand from "../../assets/img/brand-icon.png";
import uix from "../../assets/img/uix-icon.png";
import marketing from "../../assets/img/marketing-icon.png";
import image from "../../assets/img/home.jpg";
import Type from "../Type";
import InstagramFeed from "../InstagramFeed";
import Layout from "../layout";
import SEO from "../seo";
import PageEntry from "./pageEntry";
import BlogFeed from "./blogFeed";

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
    const { data } = this.props

    const mystyle = {
      background: `linear-gradient(180deg, rgba(29,45,95,0.8) 10%, rgba(64,206,227,0.8) 90%), url(${image})`,
      backgroundPosition: 'center, center top',
      backgroundSize: 'cover, cover',
      backgroundRepeat: 'no-repeat',
      minHeight: '70vh',
    };
    return (
      <Layout location={this.props.location}>
        <SEO title={`Web Development, Mobile App, Brand Identity, User Experience Design, Software & Digital Marketing`} />
        <section className="box-home" style={mystyle}>
          <div className="container">
            <div className="row intro">
              <div className="col-6 intro__text">
                <h3 className="l1-txt2 p-b-40">Hi <i className="dot-box dot-box_yellow"></i></h3>            
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
                  <img className="lazyload" data-src={mac} alt="" />
                  <div className="intro__adv-head" />
                  <p className="intro__adv-text">
                    WE CAN HELP<br/> YOU WITH <br /> YOUR
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

              <h3 className="l1-txt1 txt-center p-b-80">What We Offer <i className="dot-box dot-box_yellow"></i></h3>

              <div className="row">
                <div className="col-4 services__box">
                  <img className="lazyload" data-src={web} alt=""/>
                  <h2>WEBSITE DEVELOPMENT</h2>
                  <p>Front-end Development <br/> CMS Development <br/> Web Apps</p>
                </div>
                <div className="col-4 services__box">
                  <img className="lazyload" data-src={mobile} alt=""/>
                  <h2>MOBILE APP</h2>
                  <p>Mobile App Design <br/> iOS App Development <br/> Android App Development <br/> Cross-platform Development</p>
                </div>
                <div className="col-4 services__box">
                  <img className="lazyload" data-src={uix} alt=""/>
                  <h2>UIX DESIGN</h2>
                  <p>Prototyping <br/> Content Strategy <br/> Responsive Design</p>
                </div>

                <div className="col-4 services__box">
                  <img className="lazyload" data-src={brand} alt=""/>
                  <h2>BRAND IDENTITY</h2>
                  <p>Visual Identity <br/> Brand Assets <br/> Brand Guidelines</p>
                </div>
                <div className="col-4 services__box">
                  <img className="lazyload" data-src={software} alt=""/>
                  <h2>SOFTWARE</h2>
                  <p>CRM Software <br/> Workflow Management Software <br/> ERP Systems Development <br/> Application Re-Modelling</p>
                </div>
                <div className="col-4 services__box">
                  <img className="lazyload" data-src={marketing} alt=""/>
                  <h2>DIGITAL MARKETING</h2>
                  <p>Search Engine Optimisation(SEO) <br/> Social Media Marketing <br/> Email Marketing <br/> Content Marketing</p>
                </div>
              </div>
              
          </div>
        </section>

        <section className="boxc boxc_red-bg">
          <div className="container">

          <h3 className="l1-txt1 txt-center p-t-80 p-b-80">Our Work <i className="dot-box dot-box_blue"></i></h3>
          <div className="row">
            {data &&
            data.wpgraphql &&
            data.wpgraphql.pages.nodes.map(page => (
              <div className="col-6 project__box" key={page.id}>
                <PageEntry page={page} />
              </div>
            ))
            }
            {/* :
              <div className="col-6 project__box">
                {loader}
              </div>
            } */}
            <Link to="/work"><button className="about__btn">See All Work ➜</button></Link>
          </div>

          </div>
        </section>

        <section id="about" className="boxf">
          <div className="container">

            <div className="row">
              <div>
                <h3 className="l1-txt1 txt-center p-t-80 p-b-40">About Us <i className="dot-box dot-box_yellow"></i></h3>
                <h4>At Cre8tive Tech <i className="underline-box"></i></h4>
                <p>We are focused on the provision of digital 
                  and IT solutions, aimed at driving the effective 
                  operation and growth hack of various brands. 
                  We invest in our collaborative workspace community, 
                  to ensure a continuous stream of inspiration. 
                  By investing in an environment that breeds creativity, 
                  we inspire ourselves to develop flexible solutions that 
                  ensure a seamless workflow, for brands. At Cre8tive Tech, 
                  we are not just dreamers, we deliver!</p>
                
                <Link to="/about"><button className="about__btn">Read More ➜</button></Link>
              </div>
              

            </div>

          </div>
        </section>

        <section id="stories" className="insta">
          <div className="container">

            <div className="row">

              <div className="col-12">
                <h3 className="l1-txt1 txt-center p-t-40 p-b-40">Our Stories <i className="dot-box dot-box_yellow"></i></h3>
              </div>

              <div className="blog">
                {data &&
                data.wpgraphql &&
                data.wpgraphql.posts.nodes.map(post => (
                  <div className="col-4 blog__box" key={post.id}>
                    <BlogFeed post={post} />
                  </div>
                ))
                }
              </div>

              {/* {loading? "Instagram Feed Loading..." : this.renderInstaFeed(instaFeed)} */}
              
            </div>

          </div>
        </section>

      </Layout>
    );
  }
}

export default Landing;


