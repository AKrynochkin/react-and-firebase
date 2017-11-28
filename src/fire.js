import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyBpbweMP5MtTGOjoTInqlsyeno0O0FbwUY",
    authDomain: "first-react-app-a21.firebaseapp.com",
    databaseURL: "https://first-react-app-a21.firebaseio.com",
    projectId: "first-react-app-a21",
    storageBucket: "first-react-app-a21.appspot.com",
    messagingSenderId: "697448471027"
};

const fire = firebase.initializeApp(config);

export default fire;