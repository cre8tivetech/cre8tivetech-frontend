import React from "react"
import Layout from "../layout";
import SEO from "../seo";

const PagePage = props => {
  const {
    location,
    data: {
      wpgraphql: { page },
    },
  } = props
  const { title, content } = page
  return (
    <Layout location={location}>
      <SEO title={`Work - ${page.title}`} />
        <div dangerouslySetInnerHTML={{ __html: content }} />
        <p>Single Page {title}</p>     
    </Layout>
  )
}

export default PagePage