import React from 'react';

import { Link } from 'react-router-dom'

export default function Home() {

    return (
        <div>
            <h1>Bookshelf</h1>
            <h3>The affordable library solution</h3>
            <Link to="/Bookshelf">search Books</Link>
        </div >
    )
}
