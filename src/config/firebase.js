import Rebase from 're-base';
import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyBY68Qx0ulVoSCjIgbgF2c_rL1GFxFl5z0",
    authDomain: "angular5crud-76e23.firebaseapp.com",
    databaseURL: "https://angular5crud-76e23.firebaseio.com",
    projectId: "angular5crud-76e23",
    storageBucket: "angular5crud-76e23.appspot.com",
    messagingSenderId: "87282046383"
};
const app = firebase.initializeApp(config);
const base = Rebase.createClass(app.database());

export { base };