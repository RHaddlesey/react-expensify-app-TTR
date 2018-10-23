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

database
	.ref()
	.set({
		name: 'Richard Haddlesey',
		age: 48,
		isSingle: false,
		location: {
			city: 'Weymouth',
			County: 'Dorset',
		},
	})
	.then(() => {
		console.log('Data is saved');
	})
	.catch(() => {
		console.log('This failed.', e);
	});

//database.ref().set('this is my data.');

database.ref('age').set(47);
database.ref('location/city').set('Poole');
// database.ref('attributes/height').set('5 foot 10 inches');
// database.ref('attributes/build').set('heavy');
database
	.ref('attributes')
	.set({
		height: 184,
		build: 'heavy man',
	})
	.then(() => {
		console.log('2nd worked');
	})
	.catch(e => {
		console.log('2nd failed', e);
	});

// adding * as means we load in all the library to the new variable named firebase
// we can then call any method off the import by firebase.nameOfMethod

// if we leave set empty set() then it completely resets the root of the database to the new
// data, so it does not add or append, it simply resets the whole thing.
// however - database.ref('age').set(47); will change just the data set at
// ref('age') to the new value set(47)
// database.ref('location/city').set('Poole'); will set the data on city - inside location

// this is all done asynchronous! So we need to look at promises in ES6
