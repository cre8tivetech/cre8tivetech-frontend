import React, { Fragment } from "react"
import { Link, graphql } from "gatsby"
import ablegeniusPortfolio from "../../assets/img/ablegenius-portfolio.png";


const PageEntry = ({ page }) => { 
  console.log(page.projects.link)
  return (
    <Fragment>
      <a target="_blank" href={page.projects.link}>
        <img className="lazyload" data-src={page.featuredImage? page.featuredImage.sourceUrl : ablegeniusPortfolio} alt=""/>
        <div className="project__box-title">
          <h3>{page.title}</h3>
          <p>{page.projects.tags}</p>
        </div>
      </a>
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
      link
    }   
  }
`