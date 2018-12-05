import React, {Component} from 'react';
import firebase from "firebase";

// Sets up firebase database
const config = {
    apiKey: "AIzaSyD7UxJviUIXoSSfcmdUx-c13mEWbyEOXNY",
    authDomain: "texas-goat-em.firebaseapp.com",
    databaseURL: "https://texas-goat-em.firebaseio.com",
    projectId: "texas-goat-em",
    storageBucket: "texas-goat-em.appspot.com",
    messagingSenderId: "1083809629945"
};

export const getDatabase = () => {
    const app = firebase.initializeApp(config);
    console.log("get database", app.database());
    return app.database();
};
