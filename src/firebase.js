import firebase from 'firebase/app'
import 'firebase/database'

const firebaseConfig = {
      apiKey: "AIzaSyD451hLDnk-yVkungcEgp55q72-64MvyI8",
      authDomain: "markdow-94130.firebaseapp.com",
      databaseURL: "https://markdow-94130.firebaseio.com",
      projectId: "markdow-94130",
      storageBucket: "",
      messagingSenderId: "153681970224",
      appId: "1:153681970224:web:0b2038a214d25139"
    }

    firebase.initializeApp(firebaseConfig)

    export default firebase.database()