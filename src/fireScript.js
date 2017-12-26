import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyAZK5MLOQbYTfDNUY_3CGFxyGnA1-UtkxQ",
  authDomain: "cover-up-shop.firebaseapp.com",
  databaseURL: "https://cover-up-shop.firebaseio.com",
  projectId: "cover-up-shop",
  storageBucket: "cover-up-shop.appspot.com",
  messagingSenderId: "970750564432"
};

const fire = firebase.initializeApp(config);

export default fire;