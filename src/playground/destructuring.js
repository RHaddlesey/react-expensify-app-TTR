console.log('destructuring');

const person = {
	name: 'Richard',
	age: 28,
	location: {
		city: 'Weymouth',
		temp: 40,
	},
};

// OLD WAY
// const name = person.name;
// const age = person.age;

// NEW WAY = ES6 destructuring

const { name = 'Anonymous', age } = person;

console.log(`${name} is ${age}.`);

if (person.location.city && person.location.temp) {
	console.log(`It's ${person.location.temp} degrees in ${person.location.city}.`);
}

// this is better by destructuring the array
// const { city, temp: temperature } = person.location;
// if (city && temperature) {
// 	console.log(`It's ${temperature} degrees in ${city}.`);
// }
// note we can bring in the variable temp and rename it to
// something with more meaning temp: temperature! In doing so,
// we no longer have access to temp as it is now the const temperature
// also = const { name = 'Anonymous', age } = person;
// says, if there is no value for name - default it to anonymous
// So, if I comment out name - anonymous will print to the console.

// CHALLENGE

const book = {
	title: 'Ego is the enemy',
	author: 'Ryan Holiday',
	publisher: {
		name: 'Penguin',
	},
};

const { name: publisherName = 'Self-Published' } = book.publisher;

if (publisherName) {
	console.log(publisherName);
} //Penguin, Self-Published

// ARRAY DESTRUCTURING MAN

const address = ['1299 Dorchester Road', 'Weymouth', 'Dorset', 'DT10AA'];

const [, city, , postcode, country = 'the UK'] = address;
// you do not need to deconstruct and name every value in the array, but
// you must place in the comma to assign the right name to the right value.

console.log(`You are in ${city}, ${postcode} in ${country}`);

///////

const item = ['Coffee (hot)', '£2.00', '£2.50', '£2.75', 'Coffee (iced)', '£2.50', '£3.25', '£3.50'];

const [hotDrink, , medium, , coldDrink, , , large] = item;

console.log(`A medium ${hotDrink} costs = ${medium} and a large ${coldDrink} costs = ${large}`);
