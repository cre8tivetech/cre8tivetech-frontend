import React from "react"
import PropTypes from "prop-types"
// import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Footer from "./footer";
import "./layout.css"

const Layout = (props) => {
  return (
      <div>
        <Header path={props.location} />
        <div className="dark-overlay" />
        {props.children}
        <Footer />
      </div>
  )
}

Layout.defaultProps = {
  location: {}
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  location: PropTypes.objectOf(PropTypes.object)
}

export default Layout
