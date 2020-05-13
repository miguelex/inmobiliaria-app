import app from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';

const config = {
    apiKey: "AIzaSyA2SR1rrco7eGexNwuyrD5KtMD1jAe-zZ0",
    authDomain: "homemadm.firebaseapp.com",
    databaseURL: "https://homemadm.firebaseio.com",
    projectId: "homemadm",
    storageBucket: "homemadm.appspot.com",
    messagingSenderId: "769948928160",
    appId: "1:769948928160:web:a98e9710018bfde56361c5",
    measurementId: "G-E0N8Y0W67H"
  };

class Firebase {

    constructor () {
        app.initializeApp(config);
        this.db = app.firestore();
        this.auth = app.auth();
        this.storage = app.storage();

        this.storage.ref().constructor.prototype.guardarDocumentos = function (documentos) {
            var ref = this;

            return Promise.all(documentos.map(function(file){
                return ref.child(file.alias).put(file).then(snapshot => {
                    return ref.child(file.alias).getDownloadURL();
                })
            }))
        }
    }

    estaIniciado() {
        return new Promise(resolve => {
            this.auth.onAuthStateChanged(resolve)
        })
    }

    guardarDocumento = (nombreDocumento, documento)=> this.storage.ref().child(nombreDocumento).put(documento);

    devolverDocumento = (documentoUrl) => this.storage.ref().child(documentoUrl).getDownloadURL();

    guardarDocumentos = (documentos) => this.storage.ref().guardarDocumentos(documentos);

    eliminarDocumento = documento => this.storage.ref().child(documento).delete();
}

export default Firebase;