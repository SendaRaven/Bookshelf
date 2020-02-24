import React from 'react'
import Nav from "react-bootstrap/Nav";
import Navbar from 'react-bootstrap/Navbar';
import { Link, useParams } from 'react-router-dom'
import { currentUser, logout } from './api';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'

const handleLogout = () => {
    logout();
    this.props.history.push('/')
}




export default function Navigation() {
    const isLoggedIn = !!currentUser();
    const leftMenu = () => {

        const hideMenu = ['/login', "/signup"].includes(url);
        if (hideMenu) {
            return null
        }
        return (
            <Col sm="auto" className="d-flex align-items-center" >
                {!isLoggedIn && <Link to="/login">Log In</Link>}
                {isLoggedIn && <Link to="/" onClick={handleLogout}>Log Out</Link>}
            </Col>
        )
    }
    const url = useParams();
    return (
        <Navbar bg="dark" variant="dark" >
            <Row row className="w-100 justify-content-between">
                <Col className="flex-grow-2">
                    <Navbar.Brand /*  href="/" */><Link to="/" >Bookshelf</Link></Navbar.Brand>
                    <Link to="/Bookshelf">Search Books</Link>
                    {/* <Nav className="mr-auto">
          
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Nav> */}
                    {/* <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-info">Search</Button>
        </Form> */}
                </Col>
                {leftMenu()}
            </Row>
        </Navbar>
    )
}
