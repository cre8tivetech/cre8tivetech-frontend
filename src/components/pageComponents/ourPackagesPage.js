import React, { useState, useEffect } from "react"
import { Link } from "gatsby"

// import PageEntry from "./pageEntry"
import Layout from "../layout"
import SEO from "../seo"
// import image from "../../assets/img/work.jpg";

const OurPackagesPage = ({ location }) => {
  const [page, setPage] = useState('branding')
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
                <h3 className="l1-txt2 p-b-40">Our Packages <i className="dot-box dot-box_yellow"></i></h3>            
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
                  className={page === 'branding' ? 'active underline-from-left' : 'underline-from-left'}
                  onClick={() => setPage('branding')}
                  to="/our-packages/#branding"
                >
                  Branding
                </Link>
              </li>
              <li>
                <Link
                  className={page === 'web-development'? 'active underline-from-left' : 'underline-from-left'}
                  onClick={() => setPage('web-development')}
                  to="/our-packages/#web-development"
                >
                  Web Development
                </Link>
              </li>
              <li>
                <Link
                  className={page === 'social-media' ? 'active underline-from-left' : 'underline-from-left'}
                  onClick={() => setPage('social-media')}
                  to="/our-packages/#social-media"
                >
                  Social Media Management
                </Link>
              </li>
            </ul>
          </nav>
            {page === 'branding' &&
              <div id="branding" className="row packages-row">
                <div className="col-4 packages_card">
                  <h3 className="packages__head">Basic</h3>
                  <hr />
                  <ul className="packages__items">
                    <li><i className="zmdi zmdi-check"></i> <p>Logo Design</p></li>
                    <li><i className="zmdi zmdi-check"></i> <p>Business Card Design</p></li>
                    <li><i className="zmdi zmdi-check"></i> <p>Letter Head Design</p></li>
                    <li><i className="zmdi zmdi-check"></i> <p>ID Card Design</p></li>
                    <li><i className="zmdi zmdi-check"></i> <p className="canceled">Calender Design X 5 Copies Print</p></li>
                    <li><i className="zmdi zmdi-check"></i> <p className="canceled">Rollup Banner Design X 1 Print</p></li>
                    <li><i className="zmdi zmdi-check"></i> <p className="canceled">Branded Shirt Design X 10 Pcs Print</p></li>
                    <li><i className="zmdi zmdi-check"></i> <p>E-flyer Design</p></li>
                  </ul>
                  <div className="packages__price">29,999</div>
                  <div className="packages__btn-container">
                    <button className="packages__btn">Select</button>
                  </div>
                </div>
                <div className="col-4 packages_card">
                  <h3 className="packages__head">Standard</h3>
                  <hr />
                  <ul className="packages__items">
                    <li><i className="zmdi zmdi-check"></i> <p>Logo Design</p></li>
                    <li><i className="zmdi zmdi-check"></i> <p>Business Card Design X 100 Copies Print</p></li>
                    <li><i className="zmdi zmdi-check"></i> <p>Letter Head Design X 100 Copies Print</p></li>
                    <li><i className="zmdi zmdi-check"></i> <p>ID Card Design X 2 Copies Print</p></li>
                    <li><i className="zmdi zmdi-check"></i> <p className="canceled">Calender Design X 5 Copies Print</p></li>
                    <li><i className="zmdi zmdi-check"></i> <p className="canceled">Rollup Banner Design X 1 Print</p></li>
                    <li><i className="zmdi zmdi-check"></i> <p className="canceled">Branded Shirt Design X 10 Pcs Print</p></li>
                    <li><i className="zmdi zmdi-check"></i> <p>E-flyer Design</p></li>
                  </ul>
                  <div className="packages__price">79,999</div>
                  <div className="packages__btn-container">
                    <button className="packages__btn">Select</button>
                  </div>
                </div>
                <div className="col-4 packages_card">
                  <h3 className="packages__head">Premium</h3>
                  <hr />
                  <ul className="packages__items">
                    <li><i className="zmdi zmdi-check"></i> <p>Logo Design</p></li>
                    <li><i className="zmdi zmdi-check"></i> <p>Business Card Design X 100 Copies Print</p></li>
                    <li><i className="zmdi zmdi-check"></i> <p>Letter Head Design X 100 Copies Print</p></li>
                    <li><i className="zmdi zmdi-check"></i> <p>ID Card Design X 2 Copies Print</p></li>
                    <li><i className="zmdi zmdi-check"></i> <p>Calender Design X 5 Copies Print</p></li>
                    <li><i className="zmdi zmdi-check"></i> <p>Rollup Banner Design X 1 Print</p></li>
                    <li><i className="zmdi zmdi-check"></i> <p>Branded Shirt Design X 10 Pcs Print</p></li>
                    <li><i className="zmdi zmdi-check"></i> <p>E-flyer Design</p></li>
                  </ul>
                  <div className="packages__price">165,999</div>
                  <div className="packages__btn-container">
                    <button className="packages__btn">Select</button>
                  </div>
                </div>
              </div>
            }
            <div className="pagination">
            </div>

          </div>
        </section>
      
    </Layout>
  )
}

export default OurPackagesPage