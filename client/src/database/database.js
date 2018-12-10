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

// Makes sure database is only initialized once
var goatemDb = null;
/**
 * Initializes firebase database
 * @returns {*}
 */
export const getDatabase = () => {
    if (goatemDb == null) {
        const app = firebase.initializeApp(config);
        console.log("get database", app.database());
        goatemDb = app.database();
    }
    return goatemDb;
};
