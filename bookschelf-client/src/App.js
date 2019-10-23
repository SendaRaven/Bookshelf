import React from 'react';
import { Col, Row, Layout } from 'antd'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import "./App.css"
import Dashboard from '../src/components/Dashboard';
import Signup from '../src/components/Signup';
import Login from '../src/components/Login';
import Home from '../src/components/Home';
const { Header, Content } = Layout


const currentUser = !true;

export default function ButtonAppBar() {
 
  const handleClick = (e) => {
    e.preventDefault();
    if (!currentUser) {
      this.props.history.push("/login")
    } else {
      this.props.history.push("/dashboard")
    }

  };


  return (
    <div>
      <Router>
        <Layout>
          <Switch>
            <Header>
            <Row type="flex" justify="space-between">
              <Col >
                <Link to="/">Bookshelf</Link>
              </Col>
              <Col>
              <Link to='/dashboard'>Dashboard</Link>
              </Col>
              <Col>
              <Link to='/signup'>Signup</Link>
              </Col>
              <Col>
               <Link to="/login">Log In</Link>

              </Col>
            </Row>
            </Header>

          </Switch>
          <Content>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/login" component={Login} />
              <Route path="/signup" component={Signup} />
              <Route path="/dashboard" component={Dashboard} />
            </Switch>
          </Content >
        </Layout>
      </Router>

    </div>
  );
}