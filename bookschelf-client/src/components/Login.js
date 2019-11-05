import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';


export default function Login() {


    const [values, setValues] = useState({
        name: '',
        password: '',
        showPassword: false,
    });

    const handleChange = prop => event => {
        setValues({ ...values, [prop]: event.target.value });
    };
    const handleClickShowPassword = () => {
        setValues({ ...values, showPassword: !values.showPassword });
    };

    const handleMouseDownPassword = event => {
        event.preventDefault();
    };

    const handleSubmit = event => {
        event.preventDefault();
        console.log("Hey");

    };

    return (
        <div>
            <Container /* className="{classes.container}" */>
                <h4>Login</h4>
                <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter name" onChange={handleChange("name")} required />
                    </Form.Group>

                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" onChange={handleChange("email")} required />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <InputGroup>
                            <Form.Control value={values.password} type={values.showPassword ? 'text' : 'password'} placeholder="Password" onChange={handleChange("password")} required />                            <InputGroup.Append>
                                <InputGroup.Text
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                >
                                    {values.showPassword ? <FontAwesomeIcon icon={faEye} /> : <FontAwesomeIcon icon={faEyeSlash} />}
                                </InputGroup.Text>
                            </InputGroup.Append>
                        </InputGroup>
                    </Form.Group>
                    {/* <Form.Group controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group> */}
                    <Button variant="primary" type="submit">
                        Submit
  </Button>
                </Form>



                {/* <FormControl className={clsx(classes.margin, classes.textField)}
                        margin="dense">

                        <InputLabel htmlFor="name">Name</InputLabel>
                        <Input
                            id='name'
                            value={values.name}
                            onChange={handleChange('name')}
                        />
                    </FormControl>
                    <FormControl className={clsx(classes.margin, classes.textField)}
                        margin="dense">

                        <InputLabel htmlFor="adornment-password">Password</InputLabel>
                        <Input
                            id="adornment-password"
                            type={values.showPassword ? 'text' : 'password'}
                            value={values.password}
                            onChange={handleChange('password')}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                        onMouseDown={handleMouseDownPassword}
                                    >
                                        {values.showPassword ? <Visibility /> : <VisibilityOff />}
                                    </IconButton>
                                </InputAdornment>
                            }
                        />
                    </FormControl >
                    <Button type='submit' className={classes.button} variant="contained" color='primary'>
                        Login
                    </Button> */}

            </Container >

        </div >
    )
}
