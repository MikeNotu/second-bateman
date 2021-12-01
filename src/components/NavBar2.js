import React, { useState } from "react"
import { Link } from 'react-router-dom'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  //   NavbarText,
} from "reactstrap"

const NavBar2 = (props) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => setIsOpen(!isOpen)

  return (
    <div>
      <Navbar 
      dark 
      expand="md" 
      className="navbar-custom" 
    //   fixed="top"
      >

<div className="container-fluid flex-test">

    <div>
    <NavbarBrand className="container-fluid">
    <Link to="/" className="logo-text pulse">Michael Bateman</Link>
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />    </div>

    <div className="">
    <Collapse isOpen={isOpen} navbar>
          <Nav  navbar>

            <NavItem >
            <Link to="/" className="nav-link text-white nav-text pulse" >Home</Link>
            </NavItem>
            <NavItem >
            <Link to="/testo" className="nav-link text-white nav-text pulse" >Projects</Link>
            </NavItem>
            <NavItem >
            <Link to="/testo" className="nav-link text-white nav-text pulse" >About Me</Link>
            </NavItem>
            <NavItem>
              <NavLink href="https://www.linkedin.com/in/michael-bateman-979695194/" className="text-white nav-text pulse">
                My LinkedIn
              </NavLink>
            </NavItem>

            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret className="text-white nav-text pulse">
                GitHub
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem
                  href="https://github.com/MikeNotu"
                  className="dark-text"
                >
                  My GitHub
                </DropdownItem>
                <DropdownItem
                  href="https://github.com/MikeNotu/second-bateman"
                  className="dark-text"
                >
                  This Project's Repository
                </DropdownItem>{" "}
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Collapse>
    </div>

    </div>


      </Navbar>
    </div>
  )
}

export default NavBar2