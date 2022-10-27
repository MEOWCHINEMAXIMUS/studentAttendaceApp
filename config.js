import firebase from "firebase"

var firebaseConfig = {
  apiKey: "AIzaSyCYOpNgEdL0whMKQMa7BupGnKI206_FDUY",
  authDomain: "schoolattendance-8d426.firebaseapp.com",
  databaseURL: "https://schoolattendance-8d426-default-rtdb.firebaseio.com",
  projectId: "schoolattendance-8d426",
  storageBucket: "schoolattendance-8d426.appspot.com",
  messagingSenderId: "1063220138091",
  appId: "1:1063220138091:web:f9024b4d4e940fa5bc212e"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database()