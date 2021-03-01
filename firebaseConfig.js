// firebaseConfig.js
const firebase = require('firebase');
const admin = require('firebase-admin');
const serviceAccount = require("./key.json");
require('dotenv').config();

// Set up Firebase Configuration
const firebaseConfig = {
    apiKey: process.env.APIKEY,
    authDomain: process.env.AUTHDOMAIN,
    databaseURL: process.env.DATABASEURL,
    projectId: process.env.PROJECTID,
    storageBucket: process.env.STORAGEBUCKET,
    messagingSenderId: process.env.MESSAGINGSENDERID,
    appId: process.env.APPID,
    measurementId: process.env.MEASUREMENTID
  };
firebase.initializeApp(firebaseConfig);
const firebaseApp = admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });

const db = admin.firestore();
db.settings({
  timestampsInSnapshots: true
});

module.exports = {db, firebaseApp}