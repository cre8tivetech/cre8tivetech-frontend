import React, { Component } from "react";
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
  loader: () => import('../components/pageComponents/packagesPage'),
  loading() {
    return (
      <div className="loader">{loader}</div>
    )
  }
});

class OurPackages extends Component {
  render() {
    const { location } = this.props
    return <LoadableComponent location={location} />;
  }
}

export default OurPackages