import Rebase from 're-base';
import firebase from 'firebase';

const app = firebase.initializeApp({
  apiKey: "AIzaSyDkr0yUi8C9JEADVYjEnWTjQnkoAZauLZ8",
  authDomain: "catch-of-the-day-shambhavi.firebaseapp.com",
  databaseURL: "https://catch-of-the-day-shambhavi.firebaseio.com"
})

const base = Rebase.createClass(app.database());

export default base;

