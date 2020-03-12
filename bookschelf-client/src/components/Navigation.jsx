import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import { Link, useLocation } from 'react-router-dom'
import { useHistory } from "react-router-dom";
import { currentUser, logout } from './api';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row'
import SearchBar from './SearchBar';

export default function Navigation() {
    const isLoggedIn = !!currentUser();
    let history = useHistory();
    let location = useLocation();

    const handleLogout = () => {
        logout();
        history.push('/')
        console.log("goodbye");

    }

    const leftMenu = () => {

        const hideMenu = ['/login', "/signup"].includes(location.pathname);
        console.log(location);

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

    const searchBar = () => {
        let showMenu = ["/Bookshelf"].includes(location.pathname);
        if (showMenu) {
            return <SearchBar/>
        }
        return null;
    }


    return (
        <Navbar bg="dark" variant="dark" >
            <Row row className="w-100 justify-content-between">
                <Col className="flex-grow-2">
                    <Navbar.Brand /*  href="/" */><Link to="/" >Bookshelf</Link></Navbar.Brand>
                    <Link to="/Bookshelf">Search Books</Link>
                    {/* <Nav className="mr-auto">
          
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Nav> */}</Col>
                {searchBar()}
                {leftMenu()}
            </Row>
        </Navbar>
    )
}
