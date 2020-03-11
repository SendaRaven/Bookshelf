import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { login } from "./api";
import { useHistory } from "react-router-dom";
import Alert from 'react-bootstrap/Alert'


export default function Login() {

    let history = useHistory();
    const [status, setStatus] = useState({});

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

    const handleSubmit = async event => {
        event.preventDefault();
        try {
            let res = await login(values.email, values.password);
            console.log(res);
            
            if (!res.token) {
                throw Error(res.message);
            } else {
                setStatus({
                    "Status": "Success",
                    "message": `Welcome ${res.username}!`
                });
                history.push("/")
            }
        }
        catch (error) {
            setStatus({
                "Status": "Error!",
                "message": error.message
            })
            console.log(error);
        }
    };

    const handleSignUp = () => {
        history.push("/signup");
    };

    const AlertMessage = () => {
        if (status.Status) {


            return (
                <Alert variant={status.Status === "Error!" ? "danger" : "success"}>
                    <Alert.Heading>
                        {status.Status}
                    </Alert.Heading>
                    <p>{status.message}</p>
                </Alert>

            )
        }
        return null;
    };

    return (
        <div>
            <Container /* className="{classes.container}" */>
                <h4>Login</h4>
                <AlertMessage />
                <Form onSubmit={handleSubmit} className="mb-2">

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
                    <Button variant="primary" type="submit" block>
                        Submit
                    </Button>

                </Form>
                <Button onClick={handleSignUp} variant="danger" block>SignUp</Button>
            </Container >

        </div >
    )
}
