import React, { Component } from "react"
import { Link } from "gatsby"

import PageEntry from "./pageEntry"
import Layout from "../layout"
import SEO from "../seo"
import image from "../../assets/img/work.jpg";

class WorkPage extends Component {
  renderPreviousLink = () => {
    const {
      pageContext: { pageNumber },
    } = this.props

    let previousLink = null

    if (!pageNumber) {
      return null
    } else if (1 === pageNumber) {
      previousLink = `/`
    } else if (1 < pageNumber) {
      previousLink = `/work/${pageNumber - 1}`
    }

    return (
      <div
        className="pagination_left" 
      >
        <Link className="red-underline-from-left" to={previousLink}><i className="zmdi zmdi-long-arrow-left"></i> Previous Page</Link>
      </div>
    )
  }

  renderNextLink = () => {
    const {
      pageContext: { hasNextPage, pageNumber },
    } = this.props

    if (hasNextPage) {
      return (
        <div
          className="pagination_right"
        >
          <Link className="red-underline-from-left" to={`/work/${pageNumber + 1}`}>Next Page <i className="zmdi zmdi-long-arrow-right"></i></Link>
        </div>
      )
    } else {
      return null
    }
  }

  render() {
    const {
      data,
      location,
      pageContext: { pageNumber },
    } = this.props
    const blogPageNumber = pageNumber ? ` Page ${pageNumber}` : ``
    const mystyle = {
      // background: `linear-gradient(180deg, rgba(29,45,95,0.8) 10%, rgba(64,206,227,0.8) 90%), url(${image})`,
      background: `var(--primary-color)`,
      backgroundPosition: 'center, center',
      backgroundSize: 'cover, cover',
      backgroundRepeat: 'no-repeat',
      // minHeight: '70vh',
    };
    return (
      <Layout pageNumber={pageNumber} location={{ location }}>
        <SEO title={`Work${blogPageNumber}`} />
          <section className="boxa" style={mystyle}>
            <div className="container">
              <div className="intro">
                <div className="col-6 intro__text">
                  <h3 className="l1-txt2 p-b-40">Our Work <i className="dot-box dot-box_yellow"></i></h3>            
                  <p>
                    Like a trusted friend, we go the extra 
                    mile for our clients, ensuring that their 
                    goals are achieved regardless of project size 
                    or budget.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="boxc">
            <div className="container">

              <div className="row">
              {data &&
              data.wpgraphql && 
              data.wpgraphql.pages.nodes.map(page => (
                <div className="col-6 project__box" key={page.id}>
                  <PageEntry page={page} />
                </div>
              ))
              }
              </div>
              <div className="pagination">
                {this.renderPreviousLink()}
                {this.renderNextLink()}
              </div>

            </div>
          </section>
        
      </Layout>
    )
  }
}

export default WorkPage