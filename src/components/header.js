import PropTypes from "prop-types"
import React from "react"
import Typed from "react-typed"

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
      <Navbar color="dark" dark expand="md">
        <div className="container">
          <NavbarBrand href="/">
            {" "}
            <Typed strings={[this.props.siteTitle]} typeSpeed={100} />
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink style={{ color: "yellow" }} href="/about">
                  #Javascript
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink style={{ color: "orange" }} href="/about">
                  #HTML
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink style={{ color: "#3C99DC" }} href="/about">
                  #CSS
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink style={{ color: "#66D3FA" }} href="/about">
                  #React
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink style={{ color: "#E11491" }} href="/about">
                  #graphql
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink style={{ color: "#fff" }} href="/about">
                  #Tech
                </NavLink>
              </NavItem>

              <NavItem>
                <NavLink href="/about">About</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/tags">Tags</NavLink>
              </NavItem>
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
