import React, {useState} from 'react'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'

const SearchBar = () => {

    const [values, setValues] = useState({
        name: '',
        password: '',
        showPassword: false,
    });

    const handleChange = prop => event => {
        setValues({ ...values, [prop]: event.target.value });
    };

    const handleSubmit = () => {
        
    }

    return (
        <Form inline onSubmit={handleSubmit}>
            <FormControl type="text" placeholder="Book search" className="mr-sm-2" onChange={handleChange("keyword")}/>
            <Button variant="outline-primary">Search</Button>
        </Form>
    )
}

export default SearchBar
