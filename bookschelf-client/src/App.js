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

export default function ButtonAppBar() {

  return (
    <div>
      <Router>

        <Switch>
          <Navbar bg="dark" variant="dark">
            <Navbar.Brand /*  href="/" */><Link to="/Bookshelf" >Bookshelf</Link></Navbar.Brand>
            {/* <Nav className="mr-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#features">Features</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
            </Nav> */}
            {/* <Form inline>
              <FormControl type="text" placeholder="Search" className="mr-sm-2" />
              <Button variant="outline-info">Search</Button>
            </Form> */}
          </Navbar>
          {/* <AppBar position="static">
            <Toolbar>
              <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" className={classes.title}>
                <Link to="/Bookshelf" >Bookshelf</Link>
              </Typography>
              <Button color="inherit">Login</Button>
            </Toolbar>
          </AppBar> */}
        </Switch>
        <Container className="d-flex justify-content-center mt-5">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/Bookshelf" component={Bookshelf} />
            <Route path="/:id" component={BookView} />
          </Switch>
        </Container>
      </Router>
    </div>
  );
}

