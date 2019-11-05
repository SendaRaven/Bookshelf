import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { MemoryRouter } from 'react-router';
import ListGroup from 'react-bootstrap/ListGroup'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookOpen } from '@fortawesome/free-solid-svg-icons';
import Pagination from 'react-bootstrap/Pagination'


function Bookshelf() {

    const [Books, setBooks] = useState({ x: [] });

    useEffect(() => {
        let mounted = true;
        const abortController = new AbortController();

        const fetchBooks = async () => {
            const res = await fetch("http://localhost:3001/books", {
                signal: abortController.signal,
            });
            const bookCollection = await res.json();
            if (mounted) setBooks({ x: bookCollection });
        }
        fetchBooks()
        const cleanup = () => {
            mounted = false;
            abortController.abort();
        };
        return cleanup;
    }, []);
    // console.log("State", Books.x);



    return (

        <ListGroup>

            {/* <ListItem to={`/${Books.x._id}`} color="primary" component={AdapterLink}>Link</ListItem> */}
            {Books.x.map((book, index) => {
                //console.log(index, book);
                // console.log(book.information.title)
                return (

                    <ListGroup.Item
                        action
                        key={index}
                        book={book}
                    >
                        <Link to={`/${book._id}`} {...book}><FontAwesomeIcon icon={faBookOpen} /> {book.information.title}</Link>
                    </ListGroup.Item>
                )
            })}
            <Pagination>
                <Pagination.First />
                <Pagination.Prev />
                <Pagination.Ellipsis />
                <Pagination.Next />
                <Pagination.Last />
            </Pagination>
        </ListGroup >

    )
}
export default Bookshelf;