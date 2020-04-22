  
import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyDNzT9X8tRzAzytQXF0mNZMQPeAIKLspYg",
    authDomain: "miniproject-covid19.firebaseapp.com",
    databaseURL: "https://miniproject-covid19.firebaseio.com",
    projectId: "miniproject-covid19",
    storageBucket: "miniproject-covid19.appspot.com",
    messagingSenderId: "946021138508",
    appId: "1:946021138508:web:b2c3d856aaffc1ecfff4e9",
    measurementId: "G-N0125PMWTT"
  };
  const fire = firebase.initializeApp(firebaseConfig)

  export default fire;