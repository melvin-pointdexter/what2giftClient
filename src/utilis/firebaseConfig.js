import firebase from "firebase";
import "firebase/auth";
import "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAxBt1yhFLqUimk1mw-4i121odmI8UKP4w",
  authDomain: "what2gift-850bd.firebaseapp.com",
  projectId: "what2gift-850bd",
  storageBucket: "what2gift-850bd.appspot.com",
  messagingSenderId: "593100890791",
  appId: "1:593100890791:web:c70919ffa914d0fcd7b182"
};

firebase.initializeApp(firebaseConfig);
export default firebase;