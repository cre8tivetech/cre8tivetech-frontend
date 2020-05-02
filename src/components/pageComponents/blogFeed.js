import React, { Fragment } from "react"
import { Link, graphql } from "gatsby"
import config from "../../../config"
import ablegeniusPortfolio from "../../assets/img/ablegenius-portfolio.png";

const BlogFeed = ({ post }) => {

  // Get read time from the post content - 300 words per min
  const readTime = Math.ceil(post.content.replace(/(<([^>]+)>)/ig,"").split(' ').length / 300);

  return (
    <Fragment>
      <Link to={`/blog/${post.uri}`}>
        <div className="blog__box-image">
          <img className="lazyload" data-src={post.featuredImage? post.featuredImage.sourceUrl : ablegeniusPortfolio} alt=""/>
        </div>
        <div className="blog__box-meta">
          <p><span className="author">{post.author.name}</span> - {readTime} min read</p>
        </div>
        <div className="blog__box-title">
          <h3>
            <span
              dangerouslySetInnerHTML={{
                __html: post.title
              }}
            />
          </h3>
        </div>
      </Link>
    </Fragment>
  )
}

export default BlogFeed