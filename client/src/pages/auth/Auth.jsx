import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Avatar, Button, Paper, Grid, Typography, Container } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'

import useStyles from './AuthStyle';
import Input from './Input';
import { loginUser, registerUser } from '../../actions/auth';
import { useNavigate } from 'react-router-dom';

const initialState = { firstName: '', lastName: '', email: '', password: '', confirmPassword: '' }

const Auth = () => {
    const classes = useStyles();
    const [form, setForm] = useState(initialState);
    const [ showPassword, setShowPassword ] = useState(false);
    const [ isSignUp, setIsSignUp ] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (isSignUp) {
            dispatch(registerUser(form, navigate));
          } else {
            dispatch(loginUser(form, navigate));
          }
    };

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    };

    const handleShowPassword = () => {
        setShowPassword((prevShowPassword) => !prevShowPassword)
    };

    const switchMode = () => {
        setForm(initialState);
        console.log(form);
        setIsSignUp((prevIsSignUp) => !prevIsSignUp);
        setShowPassword(false);
    };

    return (
        <Container component="main" maxWidth="xs">
            <Paper className={classes.paper} elevation={3}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography variant='h5'>{isSignUp ? 'S\'inscrire' : 'Se Connecter'}</Typography>
                <form className={classes.form} onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                        {
                            isSignUp && (
                                <>
                                    <Input name='firstName' label='Prénom' handleChange={handleChange} autoFocus half/>
                                    <Input name='lastName' label='Nom de Famille' handleChange={handleChange} half/>
                                </>
                            )
                        }
                        <Input name='email' label='Adresse E-Mail' handleChange={handleChange} type="email"/>
                        <Input name='password' label='Mot de Passe' handleChange={handleChange} type={ showPassword ? "text" : "password" } handleShowPassword={handleShowPassword}/>
                        { isSignUp && <Input name='confirmPassword' label='Confirmation du Mot de Passe' handleChange={handleChange} type="password"/> }
                    </Grid>
                    <Button type="submit" fullWidth variant='contained' color='primary' className={classes.submit}>
                        { isSignUp ? 'S\'inscrire' : 'Se Connecter' }
                    </Button>
                    <Grid container justifyContent='flex-end'>
                        <Grid item>
                            <Button onClick={switchMode}>
                                { isSignUp ? `Déjà un compte ? Se Connecter` : 'Pas de compte ? S\'inscrire' }
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </Paper>
        </Container>
    )
}

export default Auth