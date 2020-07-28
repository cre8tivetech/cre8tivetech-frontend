import React, { Fragment, Component } from "react"
import { Link } from "gatsby";

import Layout from "../layout"
import SEO from "../seo"
import placeHolderImage from '../../assets/img/job.jpg'

const renderTermNodes = (nodes, title) => (
  <p>
    {title}
    {` `}
    {nodes.map((term, index) => (
      <span className="author">{term.name}
      {index !== (nodes.length - 1) && <>&nbsp;•&nbsp;</>}
      </span>
    ))}
  </p> 
)

const renderTags = (tagNodes = []) => (
  <Fragment>
    {tagNodes && tagNodes.length ? renderTermNodes(tagNodes, `Tags: `) : null }
  </Fragment>
)

const renderCategories = (categoryNodes = []) => (
  <Fragment>
    {categoryNodes ? renderTermNodes(categoryNodes, `Categories: `) : null}
  </Fragment>
)

class PostPage extends Component {

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
      // backgroundColor: `var(--primary-color-trans)`,
      backgroundPosition: 'center, center top',
      backgroundSize: 'cover, cover',
      minHeight: '70vh',
    };
    return (
      <Layout location={location}>
        <SEO title={`Blog - ${title}`} />
       
        <section className="boxa-single-post" style={mystyle}>
            <div className="container">
              <div className="intro">
                <div className="col-6 intro__text">
                  <h3 className="l1-txt2 p-b-40"><span dangerouslySetInnerHTML={{ __html: title }} /> <i className="dot-box dot-box_yellow"></i></h3>            
                  <div className="single__box-meta">
                    <p><span className="author">{post.author.name}</span> - {readTime} min read</p>
                    {renderCategories(post.categories.nodes)}
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
                    {post.tags.nodes.length
                    ? renderTags(post.tags.nodes)
                    : null}
                  </div>
              </div>
              <div className="pagination">
                <div className="pagination_left">
                  <Link className="red-underline-from-left" to="work"><i className="zmdi zmdi-long-arrow-left"></i> Back To Blog Page</Link>
                </div>
              </div>

            </div>
          </section>

      </Layout>
    )
  }
}

export default PostPage