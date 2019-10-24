import React from 'react';

import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
// import "./App.css"
import Dashboard from '../src/components/Dashboard';
import Signup from '../src/components/Signup';
import Login from '../src/components/Login';
import Home from '../src/components/Home';
import Bookshelf from '../src/components/Bookshelf'


import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  container: {
    minHeight: '92vmin',
    border: '1px dashed red',
    paddingTop: '10vh',
    justifyContent: 'center',
    textAlign: 'center',
    color: 'grey'
  }
}));


export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Router>

        <Switch>
          <AppBar position="static">
            <Toolbar>
              <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" className={classes.title}>
               <Link to="/Bookshelf" >Bookshelf</Link>
          </Typography>
              <Button color="inherit">Login</Button>
            </Toolbar>
          </AppBar>
        </Switch>
        <Container maxWidth="md" className={classes.container}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/Bookshelf" component={Bookshelf}/>
          </Switch>
        </Container>
      </Router>
    </div>
  );
}



                  // <Link to="/">Bookshelf</Link>

                  // <Link to='/dashboard'>Dashboard</Link>

                  // <Link to='/signup'>Signup</Link>

                  // <Link to="/login">Log In</Link>
