import React from 'react';

import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
// import "./App.css"
import Dashboard from '../src/components/Dashboard';
import Signup from '../src/components/Signup';
import Login from '../src/components/Login';
import Home from '../src/components/Home';
import Bookshelf from '../src/components/Bookshelf';
import BookView from '../src/components/BookView';

import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from "react-bootstrap/Nav";

export default function ButtonAppBar() {

  return (
    <div>
      <Router>

 
          <Navbar bg="dark" variant="dark">
            <Navbar.Brand /*  href="/" */><Link to="/" >Bookshelf</Link></Navbar.Brand>
            <Nav.Link ><Link to="/Bookshelf">Search Books</Link></Nav.Link>
            {/* <Nav className="mr-auto">
              
              <Nav.Link href="#features">Features</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
            </Nav> */}
            {/* <Form inline>
              <FormControl type="text" placeholder="Search" className="mr-sm-2" />
              <Button variant="outline-info">Search</Button>
            </Form> */}

          </Navbar>

        <Container className="d-flex justify-content-center mt-5">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
            <Route path="/dashboard" component={Dashboard} />
            <Route exact path="/Bookshelf" component={Bookshelf} />
            <Route exact path="/Bookshelf/:id" component={BookView} />
          </Switch>
        </Container>
      </Router>
    </div>
  );
}

