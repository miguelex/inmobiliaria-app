import app from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

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
    }
}

export default Firebase;