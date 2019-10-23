import React, { useState } from 'react'
import { Container, makeStyles, FormControl, InputLabel, Input, InputAdornment, Button, IconButton } from '@material-ui/core'
import { Visibility, VisibilityOff } from '@material-ui/icons'
import clsx from 'clsx';

const useStyle = makeStyles(theme => ({
    container: {
        border: 0,
        borderRadius: 2,
        flexDirection: 'column',
        maxWidth: '80vw',
        minHeight: 'min-content',
        padding: '1vh',
        boxShadow: '5px 5px 5px 3px',
    },
    form: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
    },
    dense: {
        marginTop: theme.spacing(2),
    },
    button: {
        margin: theme.spacing(1)
    }
}))

export default function Login() {

    const classes = useStyle();
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
            <Container className={classes.container}>
                <h4>Login</h4>
                <form className={classes.form} noValidate autoComplete="off" onSubmit={handleSubmit}>


                    <FormControl className={clsx(classes.margin, classes.textField)}
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
                    </Button>
                </form >
            </Container >

        </div >
    )
}
