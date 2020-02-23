import React from "react"
import { Link } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import image from "../assets/img/404.jpg"


const NotFoundPage = (props) => {
  const mystyle = {
    background: `linear-gradient(180deg, rgba(29,45,95,0.8) 10%, rgba(64,206,227,0.8) 90%), url(${image})`,
    backgroundPosition: 'center, center top',
    backgroundSize: 'cover, cover',
    minHeight: '70vh',
  };
  return (
    <Layout location={props.location}>
      <SEO title="404 - Not found" />
      <section className="boxa-single-post" style={mystyle}>
        <div className="container">
          <div className="intro">
            <div className="col-6 intro__text">
              <h3 className="l1-txt2 p-b-40">404 - NOT FOUND <i className="dot-box dot-box_yellow"></i></h3>            
              <div className="single__box-meta">
                <p><span className="author">You just hit a route that doesn&#39;t exist... the sadness.</span></p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="boxb">
        <div className="container">
          <div className="row">
          
              <div className="col-12 box-404">
                <p style={{textAlign:"center"}}>You can check 
                  out our <Link className="red-underline-from-left" to="/work">latest work</Link>, <Link className="red-underline-from-left" to="/work">blog post</Link>, or just <Link className="red-underline-from-left" to="/work">say hello!</Link></p>
              </div>
          </div>

        </div>
      </section>
    </Layout>
  )

}

export default NotFoundPage
