import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { Row, Col } from "reactstrap"
import "bootstrap/dist/css/bootstrap.css"

import Header from "./header"
import Footer from "./footer"
import SideBar from "../components/SideBar"

import ScrollButton from "../components/subcomp/scrollbutton"

const Layout = ({ children, pageTitle, tweaks }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <ScrollButton></ScrollButton>
      <div
        style={{
          marginLeft: 20,
          marginRight: 20,
          marginTop: 10,
        }}
      >
        <main>
          <h1 dir="rtl" className="text-center mb-4 mt-4">
            {pageTitle}
          </h1>
          <Row>
            <Col className={tweaks} md="9">
              {children}
            </Col>
            <Col md="3" className=" sidebar mt-4 mb-4">
              <SideBar></SideBar>
            </Col>
          </Row>
        </main>
        {/* <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer> */}
      </div>

      <Footer></Footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
