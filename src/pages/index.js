import React, { Component } from "react";
import MyLoadable from '../components/loader';
import Loader from 'react-loader-spinner'

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
    const { data } = this.props
    console.log(data);
    if (data.wpgraphql) {
      return <LoadableComponent data={data}/>;
    }
  }
}

export default Home;

export const query = graphql`
  { 
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
            name
            content
            tags
            description
          }   
        }
      }
    }
  }
`