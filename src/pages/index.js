import React, { Component } from "react";
import { graphql } from 'gatsby';
import MyLoadable from '../components/loader';
import Loader from 'react-loader-spinner'

import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import '../components/loader.css';

const loader = (
  <Loader
       type="Puff"
       color="#1d2d5f"
       height={80}
       width={80}
    />
)

const LoadableComponent = MyLoadable({
  loader: () => import('../components/pageComponents/homePage'),
  loading() {
    return (
      <div className="loader">{loader}</div>
    )
  }
});

class Home extends Component {
  render() {
    const { data, location } = this.props
    if (data.wpgraphql) {
      return <LoadableComponent data={data} location={location}/>;
    }
  }
}

export default Home;

export const query = graphql`
  query { 
    wpgraphql {
      pages(first: 2) {
        nodes {
          id
          title
          content
          uri
          featuredImage{
            sourceUrl
          }
          projects{
            tags
            description
          }   
        }
      }
      posts(first: 3) {
        nodes {
          title
          content
          uri
          featuredImage{
            sourceUrl
          }
          author {
            name
          }
        }
      }
    }
  }
`