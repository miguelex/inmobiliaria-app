import React, { useState, useEffect } from "react";
import { useStateValue } from "../../sesion/store";
import {
  Container,
  Typography,
  Grid,
  TextField,
  Avatar,
  Button
} from "@material-ui/core";
import reactFoto from "../../logo.svg";
import { consumerFirebase } from "../../server";
import { openMensajePantalla } from "../../sesion/actions/snackbarAction";
import ImageUploader from "react-images-upload";
import * as uuid from "uuid";

const style = {
  paper: {
    marginTop: 8,
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  form: {
    width: "100%",
    marginTop: 20
  },
  submit: {
    marginTop: 15,
    marginBottom: 20
  }
};

const PerfilUsuario = props => {
  const [{ sesion }, dispatch] = useStateValue();
  const firebase = props.firebase;

  let [estado, cambiarEstado] = useState({
    nombre: "",
    apellidos: "",
    email: "",
    telefono: "",
    id: "",
    foto: ""
  });

  const cambiarDato = e => {
    const { name, value } = e.target;

    cambiarEstado(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const guardarCambios = e => {
    e.preventDefault();

    firebase.db
      .collection("Users")
      .doc(firebase.auth.currentUser.uid)
      .set(estado, { merge: true })
      .then(success => {
        dispatch({
          type: "INICIAR_SESION",
          sesion: estado,
          autenticado: true
        });

        openMensajePantalla(dispatch, {
          open: true,
          mensaje: "Se guardaron los cambio"
        });
      })
      .catch(error => {
        openMensajePantalla(dispatch, {
          open: true,
          mensaje: "Errores guardando los cambios" + error
        });
      });
  };

  useEffect(() => {
    if (estado.id === "") {
      if (sesion) {
        cambiarEstado(sesion.usuario);
      }
    }
  });

  const subirFoto = fotos => {
    //primer paso--> Capturar la imagen
    const foto = fotos[0];
    //segundo paso --> renombrar la imagen
    const claveUnicaFoto = uuid.v4();
    //tercer paso --> Obtener el nombre de la foto
    const nombreFoto = foto.name;
    //cuarto paso --> Obtener la extension de la imagen
    const extensionFoto = nombreFoto.split(".").pop();
    // quinto paso --> Crear el nuevo nombre de la foto -alias
    const alias = (
      nombreFoto.split(".")[0] +
      "_" +
      claveUnicaFoto +
      "." +
      extensionFoto
    )
      .replace(/\s/g, "_")
      .toLowerCase();

    firebase.guardarDocumento(alias, foto).then(metadata => {
      firebase.devolverDocumento(alias).then(urlFoto => {
        estado.foto = urlFoto;

        firebase.db
          .collection("Users")
          .doc(firebase.auth.currentUser.uid)
          .set(
            {
              foto: urlFoto
            },
            { merge: true }
          )
          .then(userDB => {
            dispatch({
              type: "INICIAR_SESION",
              sesion: estado,
              autenticado: true
            });
          });
      });
    });
  };

  let fotoKey = uuid.v4();

  return sesion ? (
    <Container component="main" maxWidth="md" justify="center">
      <div style={style.paper}>
        <Avatar style={style.avatar} src={estado.foto || reactFoto} />
        <Typography component="h1" variant="h5">
          Perfil de cuenta
        </Typography>
        <form style={style.form}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <TextField
                name="nombre"
                variant="outlined"
                fullWidth
                label="Nombre"
                value={estado.nombre}
                onChange={cambiarDato}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                name="apellidos"
                variant="outlined"
                fullWidth
                label="Apellidos"
                value={estado.apellidos}
                onChange={cambiarDato}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                name="email"
                variant="outlined"
                fullWidth
                label="E-Mail"
                value={estado.email}
                onChange={cambiarDato}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                name="telefono"
                variant="outlined"
                fullWidth
                label="Telefono"
                value={estado.telefono}
                onChange={cambiarDato}
              />
            </Grid>
            <Grid item xs={12} md={12}>
              <ImageUploader
                withIcon={false}
                key={fotoKey}
                singleImage={true}
                buttonText="Seleciones su imagen de perfil"
                onChange={subirFoto}
                imgExtension={[".jpg", ".gif", ".png", ".jpeg"]}
                maxFileSize={5242880}
              />
            </Grid>
          </Grid>

          <Grid container justify="center">
            <Grid item xs={12} md={6}>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                size="large"
                color="primary"
                style={style.submit}
                onClick={guardarCambios}
              >
                Guardar cambios
              </Button>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  ) : null;
};

export default consumerFirebase(PerfilUsuario);
