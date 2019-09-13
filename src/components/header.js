import PropTypes from "prop-types"
import React from "react"
import Typed from "react-typed"
import logo from "../images/logo.png"
import Drop from "./subcomp/dropdown"
import Dark from "./subcomp/darkToggler"

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap"

class Header extends React.Component {
  constructor(props) {
    super(props)

    this.toggle = this.toggle.bind(this)
    this.state = {
      isOpen: false,
    }
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    })
  }
  render() {
    return (
      <Navbar className="mainnav" color="dark" dark expand="md">
        <div className="container">
          <img className="navlogo" src={logo} alt="" />
          <NavbarBrand href="/">
            {" "}
            <Typed strings={[this.props.siteTitle]} typeSpeed={100} />
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="mainnavlist" navbar>
              <NavItem>
                <NavLink style={{ color: "yellow" }} href="/tag/javascript">
                  #Javascript
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink style={{ color: "orange" }} href="/tag/html">
                  #HTML
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink style={{ color: "#3C99DC" }} href="/tag/css">
                  #CSS
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink style={{ color: "#66D3FA" }} href="/tag/react">
                  #React
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink style={{ color: "#E11491" }} href="/tag/graphql">
                  #graphql
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink style={{ color: "#fff" }} href="/tag/tech">
                  #Tech
                </NavLink>
              </NavItem>

              <Drop></Drop>
              <Dark></Dark>
            </Nav>
          </Collapse>
        </div>
      </Navbar>
    )
  }
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
