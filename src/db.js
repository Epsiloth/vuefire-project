import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDtMaKy6Ikj9Bc52GeqoHIOeARCbyninxE",
  authDomain: "vue-firebase-fff76.firebaseapp.com",
  databaseURL: "https://vue-firebase-fff76.firebaseio.com",
  projectId: "vue-firebase-fff76",
  storageBucket: "vue-firebase-fff76.appspot.com",
  messagingSenderId: "806937488637",
  appId: "1:806937488637:web:668939c6d9184fff296294"
};

// Get a Firestore instance
export const db = firebase
  .initializeApp(firebaseConfig)
  .firestore()

// Export types that exists in Firestore
// This is not always necessary, but it's used in other examples
const { Timestamp, GeoPoint } = firebase.firestore
export { Timestamp, GeoPoint }