import React, { Component } from 'react';
import { Container, Paper, Grid, Breadcrumbs, Link, Typography, TextField, Button } from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';

const style = {
    container : {
        paddingTop : '8px'
    },

    paper : {
        marginTop : 8,
        display :"flex",
        flexDirection : 'column',
        alignItem : 'center',
        padding : '20px',
        backgroundColor : '#f5f5f5'
    },

    link : {
        display : 'flex'
    },
    
    homeIcon : {
        width : 20,
        height  : 20,
        marginRight : '4px' 
    },

    submit : {
        marginTop : 15,
        marginBottom : 10
    }
}

class NuevoInmueble extends Component {
    render() {
        return (
            <Container style = {style.container}>
                <Paper style = {style.paper}>
                    <Grid container spacing ={3}>
                        <Grid item xs={12} md={8}>
                            <Breadcrumbs aria-label ="breadcrumb">
                                <Link color="inherit" style={style.link} href="/">
                                    <HomeIcon style={style.homeIcon} />
                                    Home
                                </Link>
                                <Typography color="textPrimary">Nuevo Inmueble</Typography>
                            </Breadcrumbs>
                        </Grid>
                        <Grid item xs={12} md={12}>
                            <TextField
                                name="direccion"
                                label="Direccion del inmueble"
                                fullWidth
                            />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <TextField
                                name="ciudad"
                                label="Ciudad"
                                fullWidth
                            />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <TextField
                                name="pais"
                                label="País"
                                fullWidth
                            />
                        </Grid>
                        <Grid item xs={12} md={12}>
                            <TextField
                                name="descripcion"
                                label="Descripcion del inmueble"
                                fullWidth
                                multiline
                            />
                        </Grid>
                        <Grid item xs={12} md={12}>
                            <TextField
                                name="dinterior"
                                label="Interior del inmueble"
                                fullWidth
                                multiline
                            />
                        </Grid>
                    </Grid>

                    <Grid container justify="center">
                        <Grid item xs={12} md={6}>
                            <Button
                                type="buttoon"
                                fullWidth
                                variant="contained"
                                size="large"
                                color="primary"
                                style={style.submit}
                            >
                                Guardar
                            </Button>
                        </Grid>
                    </Grid>
                    
                </Paper>

            </Container>
        );
    }
}

export default NuevoInmueble;