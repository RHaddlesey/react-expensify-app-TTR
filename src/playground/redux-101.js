import { createStore } from 'redux';

// Action generators - functions that return action objects

const incrementCount = ({ incrementBy = 1 } = {}) => ({
	type: 'INCREMENT',
	incrementBy,
});

const decrementCount = ({ decrementBy = 1 } = {}) => ({
	type: 'DECREMENT',
	decrementBy,
});

const resetCount = () => ({
	type: 'RESET',
});

const setCount = ({ count } = {}) => ({
	type: 'SET',
	count,
});

// reducers
// 1. Reducers are pure functions - the output is only determined by the input
// so we are only bringing in the inputs from state and action. This is pure
// as we are not relying on global functions, variables, values, etc from outside
// the reducer.
// 2. Never change the state or action!

const countReducer = (state = { count: 0 }, action) => {
	switch (action.type) {
		case 'INCREMENT':
			return {
				count: state.count + action.incrementBy,
			};
		case 'DECREMENT':
			return {
				count: state.count - action.decrementBy,
			};
		case 'SET':
			return {
				count: action.count,
			};
		case 'RESET':
			return {
				count: 0,
			};
		default:
			return state;
	}
};

// this is a function that we call a REDUCER
const store = createStore(countReducer);

const unsubscribe = store.subscribe(() => {
	console.log(store.getState());
});

// subscribe watches for changes and then starts the rerender process if the state is changed

// ACTIONS = an object that gets sent to the store. ACTION names are CAPITALISED

// I'd like to increment the count
// store.dispatch({
// 	type: 'INCREMENT',
// 	incrementBy: 5,
// });

store.dispatch(incrementCount({ incrementBy: 5 }));

store.dispatch(incrementCount());

store.dispatch(resetCount());

store.dispatch(decrementCount());

store.dispatch(decrementCount({ decrementBy: 10 }));

store.dispatch(decrementCount({ decrementBy: 5 }));

store.dispatch(setCount({ count: 1010 }));

// here we set up our default state as there is no constructor. Here we set the state of
// count to initialise as 0 (the default if the state is not set elsewhere)
