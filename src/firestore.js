import firebase from 'firebase/app'
import 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: 'AIzaSyB84Tm4QvEwcTf8BzqFCtK7nMZjZNGp7SA',
    authDomain: 'fitoled-store.firebaseapp.com',
    databaseURL: 'https://fitoled-store.firebaseio.com',
    projectId: 'fitoled-store',
    storageBucket: 'fitoled-store.appspot.com',
    messagingSenderId: '40341111138',
    appId: '1:40341111138:web:a7aab8d1dac17bb0bbec3b',
    measurementId: 'G-BTDG114JFS'
}

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default firebase.firestore()