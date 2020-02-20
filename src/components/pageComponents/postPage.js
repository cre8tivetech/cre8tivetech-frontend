import React, { Fragment } from "react"
import Layout from "../layout"
import SEO from "../seo"
import placeHolderImage from '../../assets/img/job.jpg'

const renderTermNodes = (nodes, title) => (
  <div>
    {title}
    {` `}
    {nodes.map(term => (
      <div>{term.name}</div>
    ))}
  </div>
)

const renderTerms = (categoryNodes = [], tagNodes = []) => (
  <Fragment>
    {categoryNodes ? renderTermNodes(categoryNodes, `Categories: `) : null}
    {tagNodes && tagNodes.length ? renderTermNodes(tagNodes, `Tags: `) : null }
  </Fragment>
)

const PostPage = props => {
  const {
    location,
    data: {
      wpgraphql: { post },
    },
  } = props
  const { title, content } = post
  const readTime = Math.ceil(content.replace(/(<([^>]+)>)/ig,"").split(' ').length / 300);
  const image = post.featuredImage? post.featuredImage.sourceUrl : placeHolderImage
  const mystyle = {
    background: `linear-gradient(180deg, rgba(29,45,95,0.8) 10%, rgba(64,206,227,0.8) 90%), url(${image})`,
    backgroundPosition: 'center, center top',
    backgroundSize: 'cover, cover',
    minHeight: '70vh',
  };
  return (
    <Layout location={location}>
      <SEO title={`Blog - ${title}`} />
      <section className="boxa-single-post" style={mystyle}>
          <div className="container">
            <div className="row intro">
              <div className="col-6 intro__text">
                <h3 className="l1-txt2 p-b-40"><span dangerouslySetInnerHTML={{ __html: title }} /> <i className="dot-box dot-box_yellow"></i></h3>            
                <div className="single__box-meta">
                  <p><span className="author">{post.author.name}</span> - {readTime} min read</p>
                </div>
                {/* <div className="play"></div> <p className="play-text">Take a Tour</p> */}
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="boxb">
          <div className="container">
            <div className="row">
            
                <div class="col-12 single-post_content">
                <div dangerouslySetInnerHTML={{ __html: content }} />
                  {post.categories.nodes.length || post.tags.nodes.length
                  ? renderTerms(post.categories.nodes, post.tags.nodes)
                  : null}
                </div>
            </div>

          </div>
        </section>

        <div>
          
        </div>

    </Layout>
  )
}

export default PostPage