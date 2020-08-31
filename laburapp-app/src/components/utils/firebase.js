const firebase = require("firebase");
require("firebase/firestore");

var firebaseConfig = {
  apiKey: "AIzaSyCrgUvtYaBzwYUujnOqy-sTX5F4Ggb_jq8",
  authDomain: "laburapp-31ba4.firebaseapp.com",
  databaseURL: "https://laburapp-31ba4.firebaseio.com",
  projectId: "laburapp-31ba4",
  storageBucket: "laburapp-31ba4.appspot.com",
  messagingSenderId: "258089238741",
  appId: "1:258089238741:web:6873134c7eaa61fd0c225c"
};
// Initialize Firebase
export default firebase.initializeApp(firebaseConfig);