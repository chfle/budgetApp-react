'use strict';

import * as firebase from 'firebase';

const config = {
  apiKey: process.env.FIRE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_DATABASE_URL,
  storageBucket: process.env.FIREBASE_DATABASE_URL,
  messagingSenderId: process.env.FIREBASE_DATABASE_URL,
};

firebase.initializeApp(config);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { database, firebase, googleAuthProvider };
