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
  loader: () => import('../components/pageComponents/pagePage'),
  loading() {
    return (
      <div className="loader">{loader}</div>
    )
  }
});

class Page extends Component {
  render() {
    const {
      data,
      location,
      pageContext,
    } = this.props
    console.log(this.props);
    if (data.wpgraphql) {
      return <LoadableComponent data={data} location={location} pageContext={pageContext} />;
    }
  }
}

export default Page

export const pageQuery = graphql`
  query($id: ID!) {
    wpgraphql {
      page(id: $id) {
        title
        content
        uri
        featuredImage{
          sourceUrl
        }
        projects {
          description
          tags
        }
      }
    }
  }
`