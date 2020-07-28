import React, { Component } from "react"
import { Link } from "gatsby"
import PostEntry from "../pageComponents/postEntry"
import Layout from "../layout"
import SEO from "../seo"

class BlogPage extends Component {
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
      previousLink = `/blog/${pageNumber - 1}`
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
          <Link className="red-underline-from-left" to={`/blog/${pageNumber + 1}`}>Next Page <i className="zmdi zmdi-long-arrow-right"></i></Link>
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
    console.log(data)
    const blogPageNumber = pageNumber ? ` Page ${pageNumber}` : ``
    return (
      <Layout pageNumber={pageNumber} location={{ location }}>
        <SEO title={`Blog${blogPageNumber}`} />
        <section className="boxa-blog">
          <div className="container">
            <div className="intro">
              <div className="col-6 intro__text">
                <h3 className="l1-txt2 p-b-40">Blog <i className="dot-box dot-box_yellow"></i></h3>            
                <p>
                  Learn read and see big ideas from design to programming, 
                  marketing strategies, and our lifestyle.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="boxc">
          <div className="container">
            <div className="blog">
            {data &&
            data.wpgraphql &&
            data.wpgraphql.posts.nodes.map(post => (
              <div className="col-4 blog__box" key={post.id}>
                <PostEntry post={post} />
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

export default BlogPage