import React from 'react';
import { Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom'

export default function Home() {
    //const classes = useStyles()
    return (
        <div>
            <h1>Bookshelf</h1>
            <h3>The affordable library solution</h3>
            <Link to="/bookshelf">search Books</Link>
        </div >
    )
}
