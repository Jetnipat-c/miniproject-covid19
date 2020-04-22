import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyCMO8S0_WOsIuitB7UbxHXSiL2XHSc4gNw",
    authDomain: "miniproject-280a1.firebaseapp.com",
    databaseURL: "https://miniproject-280a1.firebaseio.com",
    projectId: "miniproject-280a1",
    storageBucket: "miniproject-280a1.appspot.com",
    messagingSenderId: "87095264779",
    appId: "1:87095264779:web:c303fe490fc5990ee7e90e",
    measurementId: "G-K6BE3W353Q"
  };
  const fire = firebase.initializeApp(firebaseConfig)

  export default fire;