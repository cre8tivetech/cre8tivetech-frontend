import React, { Component } from "react"
import { graphql, navigate, Link } from "gatsby"
import Loader from 'react-loader-spinner'
import PostEntry from "../pageComponents/postEntry"
import Layout from "../layout"
import SEO from "../seo"

import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"

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
    const loader = (
      <Loader
           type="Puff"
           color="#1d2d5f"
           height={80}
           width={80}
          //  timeout={3000} //3 secs
  
        />
    )
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
          {(data &&
            data.wpgraphql && data.wpgraphql.posts)?
            <div className="blog__nav">
              <Link className="red-underline-from-left" to={`/blog/tag/programming`}>Programming</Link>
              &nbsp;•&nbsp; 
              <Link className="red-underline-from-left" to={`/blog/tag/design`}>Design</Link>
              &nbsp;•&nbsp;  
              <Link className="red-underline-from-left" to={`/blog/tag/business`}>Business</Link>
              &nbsp;•&nbsp; 
              <Link className="red-underline-from-left" to={`/blog/tag/technology`}>Technology</Link>
              &nbsp;•&nbsp; 
              <Link className="red-underline-from-left" to={`/blog/tag/marketing-strategies`}>Marketing Strategies</Link>
              &nbsp;•&nbsp; 
              <Link className="red-underline-from-left" to={`/blog/tag/lifestyle`}>Lifestyle</Link>
            </div>
          : null
          }
            <div className="row">
            {data &&
            data.wpgraphql &&
            data.wpgraphql.posts.nodes.map(post => (
              <div className="col-4 blog__box" key={post.id}>
                <PostEntry post={post} />
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

export default BlogPage