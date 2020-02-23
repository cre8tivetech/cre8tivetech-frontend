import React from "react"
import PropTypes from "prop-types"
// import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Footer from "./footer";
import "./layout.css"

const Layout = ({ children, location }) => {
  return (
      <div>
        <Header path={location} />
        <div className="dark-overlay" />
          {children}
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
