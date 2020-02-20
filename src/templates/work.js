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
  loader: () => import('../components/pageComponents/workPage'),
  loading() {
    return (
      <div className="loader">{loader}</div>
    )
  }
});

class Work extends Component {
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

export default Work

export const query = graphql`
  query GET_PAGES($ids: [ID]) {
    wpgraphql {
      pages(where: { in: $ids }) {
        nodes {
          ...PageEntryFragment
        }
      }
    }
  }
`