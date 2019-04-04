import Rebase from "re-base";
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCKkpp_WnEDBASEBNpRUfPQLU8B8G1sCkU",
  authDomain: "catch-of-the-day-ignacio.firebaseapp.com",
  databaseURL: "https://catch-of-the-day-ignacio.firebaseio.com"
});

const base = Rebase.createClass(firebaseApp.database());

//This is a named export
export { firebaseApp };

//This is a default export
export default base;