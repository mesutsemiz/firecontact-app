import firebase from "firebase/app";
import "firebase/database"

const firebaseConfig = {

    apiKey: "AIzaSyDJKCBXqPd7W-6ItIrFYl-2AihNvDDFgZ0",
    authDomain: "firecontact-in-class-780de.firebaseapp.com",
    projectId: "firecontact-in-class-780de",
    storageBucket: "firecontact-in-class-780de.appspot.com",
    messagingSenderId: "896191734087",
    appId: "1:896191734087:web:d555c80077536bdd7dac62"
  
  };
  
  firebase.initializeApp(firebaseConfig);
  export default firebase









// import firebase from "firebase/app";
// import "firebase/database";

// const devConfig = {
//   apiKey: process.env.REACT_APP_API_KEY,
//   authDomain: process.env.REACT_APP_AUTH_DOMAIN,
//   projectId: process.env.REACT_APP_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
//   appId: process.env.REACT_APP_APP_ID,
// };

// const prodConfig = {};

// const firebaseConfig = process.env.NODE_ENV === "development" ? devConfig : prodConfig;

// firebase.initializeApp(firebaseConfig);

// export default firebase;
