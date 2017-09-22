import * as firebase from 'firebase'

const configFirebase = { 
    apiKey: "AIzaSyC1XPkZ693vuWGDTZ5Zkhf1RZDQ1uw0VsE",
    authDomain: "gggg-4bdf2.firebaseapp.com",
    databaseURL: "https://gggg-4bdf2.firebaseio.com",
    projectId: "gggg-4bdf2",
    storageBucket: "gggg-4bdf2.appspot.com",
    messagingSenderId: "991642809055"
}
const _f = firebase.initializeApp(configFirebase)

export default _f;