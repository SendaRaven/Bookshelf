import React, { useEffect, useState } from 'react'
//import { getBooks } from './api';
import { ListItem, List, ListItemText, ListItemIcon, TablePagination } from '@material-ui/core'
import { Link as RouterLink } from 'react-router-dom';
import { MemoryRouter } from 'react-router';
// import { withRouter } from "react-router";
import LibraryBooksOutlinedIcon from '@material-ui/icons/LibraryBooksOutlined';

function Bookshelf(props) {

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

    const Link = React.useMemo(() => React.forwardRef((props, ref) => {
        return < RouterLink innerRef={ref} {...props} />
    }
    ));

    return (
        <MemoryRouter>
            <List component="nav">

                {/* <ListItem to={`/${Books.x._id}`} color="primary" component={AdapterLink}>Link</ListItem> */}
                {Books.x.map((book, index) => {
                    //console.log(index, book);
                    //console.log(book.information.title);

                    return (
                        <ListItem
                            key={index}
                            {...{to:{ pathname: `/${book._id}`, state: { book: book } }}}
                            book={book}
                            component={Link}
                            button={true}
                            color="primary"
                        >
                         {/* <ListItemIcon>{LibraryBooksOutlinedIcon}</ListItemIcon> */}
                            < ListItemText primary={book.information.title} />
                        </ListItem>
                    );
                })} 
                 
            </List>
          <TablePagination
        component="nav"
        count={1}
        rowsPerPage={10}
        page={0}
        onChangePage={()=>(+1)}
      />
        </MemoryRouter >
    )
}
export default Bookshelf;