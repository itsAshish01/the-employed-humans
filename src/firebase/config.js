import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyAftEiXDOSj1qGzWsteS5vuC2isGcYMahQ',
  authDomain: 'theemployedhumans.firebaseapp.com',
  projectId: 'theemployedhumans',
  storageBucket: 'theemployedhumans.appspot.com',
  messagingSenderId: '310287083839',
  appId: '1:310287083839:web:1aa1c6fa06c523d992cb8a',
};

// init firebase
firebase.initializeApp(firebaseConfig);

// init services
const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();
const projectStorage = firebase.storage();

// init timestamp
const timestamp = firebase.firestore.Timestamp;

export { projectFirestore, projectAuth, timestamp, projectStorage };
