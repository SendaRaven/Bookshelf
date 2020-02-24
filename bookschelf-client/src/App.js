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

import Container from 'react-bootstrap/Container';
import Navigation from './components/Navigation';


export default function ButtonAppBar() {

  return (
    <div>
      <Router>
        <Navigation />

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

