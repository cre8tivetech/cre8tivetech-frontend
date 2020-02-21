import React, { Component } from "react"
import { navigate } from "gatsby"
import PageEntry from "./pageEntry"
import Layout from "../layout"
import SEO from "../seo"

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
      previousLink = `/page/${pageNumber - 1}`
    }

    return (
      <div onClick={() => navigate(previousLink)}>
        Previous Posts
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
          onClick={() => navigate(`/page/${pageNumber + 1}`)}
        >
          Next Posts
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
    console.log(data.wpgraphql.pages.nodes);
    return (
      <Layout pageNumber={pageNumber} location={{ location }}>
        <SEO title={`Work${blogPageNumber}`} />
          <section className="boxa-hire">
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

            </div>
          </section>
        
      </Layout>
    )
  }
}

export default WorkPage