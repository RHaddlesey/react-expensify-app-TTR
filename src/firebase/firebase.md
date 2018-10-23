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

// child_added
// database.ref('expenses').on('child_added', snapshot => {
// 	console.log(snapshot.key, snapshot.val());
// });

// child_changed
// database.ref('expenses').on('child_changed', snapshot => {
// 	console.log(snapshot.key, snapshot.val());
// });

// child_removed
// database.ref('expenses').on('child_removed', (snapshot) => {
// 	console.log(snapshot.key, snapshot.val());
// });

// CHILD added, removed and changed.
// removed and changed only fire when there has been a change
// added fires for every change past and present 

// database.ref('expenses').on('value', snapshot => {
// 	const expenses = [];

// 	snapshot.forEach(childSnapshot => {
// 		expenses.push({
// 			id: childSnapshot.key,
// 			...childSnapshot.val(),
// 		});
// 	});

// 	console.log(expenses);
// });

// database.ref('expenses').push({
// 	description: 'Rent',
// 	note: '',
// 	amount: 109500,
// 	createdAt: 24234234324,
// });
// database.ref('expenses').push({
// 	description: 'Phone',
// 	note: '',
// 	amount: 5700,
// 	createdAt: 24234234324,
// });
// database.ref('expenses').push({
// 	description: 'Food',
// 	note: '',
// 	amount: 1095,
// 	createdAt: 24234234324,
// });

// learning notes

// database.ref('notes').push({
// 	title: 'To Do',
// 	body: 'Go for a run',
// });

// database.ref().on('value', snapshot => {
// 	const val = snapshot.val();
// 	console.log(`${val.name} is a ${val.job}`);
// });
// by using .on - we can monitor the changes to the database and get them instantly

// getting data one time
// database
// 	.ref()
// 	.once('value')
// 	.then(snapshot => {
// 		const val = snapshot.val();
// 		console.log(val);
// 	})
// 	.catch(() => {
// 		console.log('Error fetching data', e);
// 	});

// database
// 	.ref()
// 	.set({
// 		name: 'Richard Haddlesey',
// 		age: 48,
// 		isSingle: false,
// 		location: {
// 			city: 'Weymouth',
// 			County: 'Dorset',
// 		},
// 	})
// 	.then(() => {
// 		console.log('Data is saved');
// 	})
// 	.catch(() => {
// 		console.log('This failed.', e);
// 	});

// database
// 	.ref('isSingle')
// 	.remove()
// 	.then(() => {
// 		console.log('Data was removed');
// 	})
// 	.catch(e => {
// 		console.log('Did not remove data', e);
// 	});

// database.ref().update({
// 	job: 'soft dev',
// 	'location/city': 'London',
// 	'location/County': 'Surrey',
// });
