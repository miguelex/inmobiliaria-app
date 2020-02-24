import React, { Component } from 'react';
import { Container, Avatar, Typography, TextField, Grid, Button } from '@material-ui/core';
import LockOutLineIcon from '@material-ui/icons/LockOutlined';

const style = {
    paper: {
        marginTop : 8,
        display : "flex",
        flexDirection : "column",
        alignItems : "center"
    },
    avatar : {
        margin : 8,
        backgroundColor : "#e53935"
    },
    form : {
        width : "100%",
        marginTop : 10
    },
    submit : {
        marginTop : 15,
        marginBottom : 20
    }
}
class RegistrarUsuario extends Component {
    render() {
        return (
            <div>
                <Container maxWidth="md">
                    <div style ={style.paper}>
                        <Avatar style ={style.avatar}>
                            <LockOutLineIcon />
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            Registre su cuenta
                        </Typography>
                        <form style ={style.form}>
                            <Grid container spacing = {2}>
                                <Grid item md = {6}  xs = {12}>
                                    <TextField name="nombre" fullWidth label="Ingrese su nombre" />
                                </Grid>
                                <Grid item md = {6}  xs = {12}>
                                    <TextField name="apellidos" fullWidth label="Ingrese sus apellidos" />
                                </Grid>
                                <Grid item md = {6}  xs = {12}>
                                    <TextField name="email" fullWidth label="Ingrese su correo electrónico" />
                                </Grid>
                                <Grid item md = {6}  xs = {12}>
                                    <TextField type="password" name="password" fullWidth label="Ingrese su password" />
                                </Grid>
                            </Grid>
                            <Grid container justify="center">
                                <Grid item md = {6}  xs = {12}>
                                    <Button type="submit" variant="contained" fullWidth size="large" color="primary" style={style.submit}>
                                        Registrar
                                    </Button>
                                </Grid>
                            </Grid>
                        </form>
                    </div>
                </Container>
            </div>
        );
    }
}

export default RegistrarUsuario;