import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

function Header() {
    return (
        <>
            <Navbar bg="dark" expand="lg" variant="dark" className="px-5">
                <NavLink className="font-weight-bold text-white text-decoration-none" to="/"><h3 className="font-weight-bold">Rokib Ahmed</h3></NavLink>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto ">
                        <NavLink className="px-2 font-weight-bold text-white text-decoration-none" to="/">Home</NavLink>
                        <NavLink className="px-2 font-weight-bold text-white text-decoration-none" to="/project">Project</NavLink>
                        <NavLink className="px-2 font-weight-bold text-white text-decoration-none" to="/skill">Skill</NavLink>
                        <NavLink className="px-2 font-weight-bold text-white text-decoration-none" to="/education">Education</NavLink>
                        <NavLink className="px-2 font-weight-bold text-white text-decoration-none" to="#">Resume</NavLink>
                    </Nav>

                </Navbar.Collapse>
            </Navbar>
        </>
    )
}

export default Header
