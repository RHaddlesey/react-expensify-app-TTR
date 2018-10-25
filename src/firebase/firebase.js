import * as firebase from 'firebase';

const config = {
	apiKey: 'AIzaSyAP2I82yrBy5AR0Stwg_q5Bz5cr5zC3TeM',
	authDomain: 'expensify-7769b.firebaseapp.com',
	databaseURL: 'https://expensify-7769b.firebaseio.com',
	projectId: 'expensify-7769b',
	storageBucket: 'expensify-7769b.appspot.com',
	messagingSenderId: '1079220786862',
};

firebase.initializeApp(config);

const database = firebase.database();

const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default };

// then we pass the provider as a function to auth.js and app.js
// as an onAuthStateChange
