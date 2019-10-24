import React, {useEffect, useState} from 'react'
import {getBooks} from './api';
import {ListItem, List} from '@material-ui/core'

export default function Bookshelf() {
    console.log(getBooks());
    
     let[Books, setBooks] = useState(0);
    useEffect(() => {
        setBooks = getBooks()
      })
;


   
    return (
        <div>
      

           {Books}
               
        </div>
    )
}
