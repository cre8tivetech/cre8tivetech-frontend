import React from "react"
import Layout from "../layout";
import SEO from "../seo";
import placeHolderImage from '../../assets/img/job.jpg'

const PagePage = props => {
  const {
    location,
    data: {
      wpgraphql: { page },
    },
  } = props
  const { title, content } = page
  const image = page.featuredImage? page.featuredImage.sourceUrl : placeHolderImage
  const mystyle = {
    background: `linear-gradient(180deg, rgba(29,45,95,0.8) 10%, rgba(64,206,227,0.8) 90%), url(${image})`,
    backgroundPosition: 'center, center top',
    backgroundSize: 'cover, cover',
    minHeight: '70vh',
  };
  return (
    <Layout location={location}>
      <SEO title={`Work - ${title}`} />
      <section className="boxa-single-post" style={mystyle}>
        <div className="container">
          <div className="intro">
            <div className="col-6 intro__text">
              <h3 className="l1-txt2 p-b-40"><span dangerouslySetInnerHTML={{ __html: title }} /> <i className="dot-box dot-box_yellow"></i></h3>            
              <div className="single__box-meta">
                <p><span className="author">{page.projects.tags}</span></p>
                <p style={{paddingTop:"50px"}}><span className="author">{page.projects.description}</span></p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="boxb">
        <div className="container">
          <div className="row">
          
              <div className="col-12 single-post_content">
                <div dangerouslySetInnerHTML={{ __html: content }} />
              </div>
          </div>

        </div>
      </section>
    </Layout>
  )
}

export default PagePage