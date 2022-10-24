import firebase from "firebase/compat/app";
import "firebase/compat/storage";
import "firebase/compat/firestore";

export const conn = firebase.initializeApp({
  projectId: "ceprotur",
  appId: "1:415563712741:web:e611e5f1726622407aac0c",
  storageBucket: "ceprotur.appspot.com",
  locationId: "us-central",
  apiKey: "AIzaSyC66ZPEzBBOAZw9EShjyS6QeBetBav9PWo",
  authDomain: "ceprotur.firebaseapp.com",
  messagingSenderId: "415563712741",
});

/*
App information:
  - App ID: 1:415563712741:web:e611e5f1726622407aac0c
  - Display name: ceproturApp

You can run this command to print out your new app's Google Services config:
  firebase apps:sdkconfig WEB 1:415563712741:web:e611e5f1726622407aac0c
*/
