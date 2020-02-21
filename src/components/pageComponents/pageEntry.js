import React, { Fragment } from "react"
import { Link, graphql } from "gatsby"
import ablegeniusPortfolio from "../../assets/img/ablegenius-portfolio.png";


const PageEntry = ({ page }) => {
  return (
    <Fragment>
      <Link to={`/work/${page.uri}`}>
        <img className="lazyload" data-src={page.featuredImage? page.featuredImage.sourceUrl : ablegeniusPortfolio} alt=""/>
        <div className="project__box-title">
          <h3>{page.title}</h3>
          <p>{page.projects.tags}</p>
        </div>
      </Link>
    </Fragment>
  )
}

export default PageEntry

export const query = graphql`
  fragment PageEntryFragment on WPGraphQL_Page {
    id
    title
    content
    uri
    featuredImage{
      sourceUrl
    }
    projects{
      tags
    }   
  }
`