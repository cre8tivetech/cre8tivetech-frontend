import React, { useState, useEffect } from "react"
import { Link } from "gatsby"

import PackagesEntry from "./packagesEntry"
import Layout from "../layout"
import SEO from "../seo"
import Packages from "../../../packages";

const OurPackagesPage = ({ location }) => {
  const [page, setPage] = useState('branding')
  const { branding, web, socialMedia } = Packages;
  useEffect(() => {
    if (location.hash === "" || location.hash === "#branding")
    setPage('branding')
    if (location.hash === "#web-development")
    setPage('web-development')
    if (location.hash === "#social-media")
    setPage('social-media')
  }, [])
  console.log(location.hash);
  console.log('page: ', page);
  const mystyle = {
    // background: `linear-gradient(180deg, rgba(29,45,95,0.8) 10%, rgba(64,206,227,0.8) 90%), url(${image})`,
    background: `var(--primary-color)`,
    backgroundPosition: 'center, center',
    backgroundSize: 'cover, cover',
    backgroundRepeat: 'no-repeat',
    // minHeight: '70vh',
  };
  return (
    <Layout location={location}>
      <SEO title="Select one of our packages - Branding, Web Development and Social Media Management" />
        <section className="boxa" style={mystyle}>
          <div className="container">
            <div className="intro">
              <div className="col-6 intro__text">
                <h3 className="l1-txt2 p-b-40">Packages <i className="dot-box dot-box_yellow"></i></h3>            
                <p>
                  Select one of our packages:<br/> 
                  - Branding<br/>
                  - Web Development<br/>
                  - Social Media Management<br/>
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="boxc">
        <div className="container">
          <nav className="packages-nav">
            <ul>
              <li>
                <Link
                  className={page === 'branding' ? 'active red-underline-from-left' : 'red-underline-from-left'}
                  onClick={() => setPage('branding')}
                  to="/packages/#branding"
                >
                  Branding
                </Link>
              </li>
              <li>
                <Link
                  className={page === 'web-development'? 'active red-underline-from-left' : 'red-underline-from-left'}
                  onClick={() => setPage('web-development')}
                  to="/packages/#web-development"
                >
                  Web Development
                </Link>
              </li>
              <li>
                <Link
                  className={page === 'social-media' ? 'active red-underline-from-left' : 'red-underline-from-left'}
                  onClick={() => setPage('social-media')}
                  to="/packages/#social-media"
                >
                  Social Media Management
                </Link>
              </li>
            </ul>
          </nav>
            {page === 'branding' &&
              <PackagesEntry _package={branding} title='branding' />
            }
            {page === 'web-development' &&
              <PackagesEntry _package={web} title='web-development' />
            }

          </div>
        </section>
      
    </Layout>
  )
}

export default OurPackagesPage;