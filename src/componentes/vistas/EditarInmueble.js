import React, { Component } from 'react';
import {consumerFirebase} from '../../server';
import { Paper, Container, Grid, Breadcrumbs, Link, Typography, TextField, Button, Table, TableBody, TableRow, TableCell } from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
import ImageUploader from "react-images-upload";

const style ={
    container : {
        paddingTop: "8px>"
    },
    paper : {
        marginTop : 8,
        display : "flex",
        flexDirection : "column",
        alignItems :"center",
        padding: "20px",
        backgroundColor: "#f5f5f5"
    },
    link : {
        padding: "20px",
        backgroundColor: "#f5f5f5"
    },
    homeIcon: {
        width: 20,
        height : 20,
        marginRight:"4px"
    },
    submit: {
        marginTop: 15,
        marginBottom: 10
    },
    fotoInmueble : {
        height: "100px"
    }
}
class EditarInmueble extends Component {

    state = {
        inmueble : {
            direccion: "",
            ciudad: "",
            pais: "",
            descripcion: "",
            interior: "",
            fotos: []
        }
        
    }

    cambiarDato = e => {
        let inmueble = Object.assign({}, this.state.inmueble);
        inmueble[e.target.name] = e.target.value;
        this.setState({inmueble});

    }

    subirImagenes = imagenes => {

    }

    eliminarFoto = foto => () => {

    }

    render() {
        return (
            <Container style={style.container}>
                <Paper style={style.paper}>
                    <Grid container spacing ={3}>
                        <Grid item sx={12} md ={8}>
                            <Breadcrumbs aria-label="breadcrumb">
                                <Link color="inherit" style={style.link} href="/">
                                    <HomeIcon style={SubtleCrypto.homeIcon}/>
                                    Home
                                </Link>
                                <Typography color="textPrimary">
                                    Editar Inmueble
                                </Typography>
                            </Breadcrumbs>
                        </Grid>
                        <Grid item xs={12} sm={12}>
                            <TextField
                                name="direccion"
                                label="Dirección del inmueble"
                                fullWidth
                                onChange={this.cambiarDato}
                                value={this.state.inmueble.direccion}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                name="ciudad"
                                label="Ciudad"
                                fullWidth
                                onChange={this.cambiarDato}
                                value={this.state.inmueble.ciudad}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                name="pais"
                                label="País"
                                fullWidth
                                onChange={this.cambiarDato}
                                value={this.state.inmueble.pais}
                            />
                        </Grid>
                        <Grid item xs={12} sm={12}>
                            <TextField
                                name="descripcion"
                                label="Descripción"
                                fullWidth
                                rowsMax="4"
                                multiline
                                onChange={this.cambiarDato}
                                value={this.state.inmueble.descripcion}
                            />
                        </Grid>
                        <Grid item xs={12} sm={12}>
                            <TextField
                                name="interior"
                                label="Interior"
                                fullWidth
                                rowsMax="4"
                                multiline
                                onChange={this.cambiarDato}
                                value={this.state.inmueble.interior}
                            />
                        </Grid>
                    </Grid>

                    <Grid container justify="center">
                        <Grid item xs={12} sm={6}>
                            <ImageUploader 
                                key={1000}
                                withIcon={true}
                                buttonText="Selecciones su imagen"
                                onChange={this.subirImagenes}                            
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Table>
                                <TableBody>
                                    {
                                        this.state.inmueble.fotos 
                                        ?this.state.inmueble.fotos.map((foto,i) => (
                                            <TableRow key={i}>
                                                <TableCell align="left">
                                                    <img src={foto} style={style.fotoInmueble} />
                                                </TableCell>
                                                <TableCell align="left">
                                                    <Button
                                                        variant="contained"
                                                        color="secondary"
                                                        size="small"
                                                        onClick={this.eliminarFoto(foto)}
                                                    >
                                                        Eliminar
                                                    </Button>
                                                </TableCell>
                                            </TableRow>
                                        ))
                                        : "" 
                                    }
                                </TableBody>
                            </Table>
                        </Grid>
                    </Grid>
                    <Grid container justify="center">
                        <Grid item xs={12} sm={6}>
                            <Button
                                type="button"
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

export default consumerFirebase(EditarInmueble);