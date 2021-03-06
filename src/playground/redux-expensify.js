console.log('DrH Webdev');

import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';

// ADD_EXPENSE
const addExpense = ({ description = '', note = '', amount = 0, createdAt = 0 } = {}) => ({
	type: 'ADD_EXPENSE',
	expense: {
		id: uuid(),
		description,
		note,
		amount,
		createdAt,
	},
});

// REMOVE EXPENSE
const removeExpense = ({ id } = {}) => ({
	type: 'REMOVE_EXPENSE',
	id,
});

//EDIT EXPENSE
const editExpense = (id, updates) => ({
	type: 'EDIT_EXPENSE',
	id,
	updates,
});

// SET_TEXT_FILTER
const setTextFilter = (text = '') => ({
	type: 'SET_TEXT_FILTER',
	text,
});

// SORT_BY_DATE
const sortByDate = () => ({
	type: 'SORT_BY_DATE',
});

// SORT_BY_AMOUNT
const sortByAmount = () => ({
	type: 'SORT_BY_AMOUNT',
});

// SET_START_DATE
const setStartDate = startDate => ({
	type: 'SET_START_DATE',
	startDate,
});

// SET_END_DATE
const setEndDate = endDate => ({
	type: 'SET_END_DATE',
	endDate,
});

// ========REDUCERS =========

// EXPENSES REDUCER

const expensesReducerDefaultState = [];

const expensesReducer = (state = expensesReducerDefaultState, action) => {
	switch (action.type) {
		case 'ADD_EXPENSE':
			return [...state, action.expense];
		case 'REMOVE_EXPENSE':
			return state.filter(({ id }) => id !== action.id);
		case 'EDIT_EXPENSE':
			return state.map(expense => {
				if (expense.id === action.id) {
					return {
						...expense,
						...action.updates,
					};
				} else {
					return expense;
				}
			});
		default:
			return state;
	}
};

// FILTERS REDUCER

const filtersReducerDefaultState = {
	text: '',
	sortBy: 'date',
	startDate: undefined,
	endDate: undefined,
};

const filtersReducer = (state = filtersReducerDefaultState, action) => {
	switch (action.type) {
		case 'SET_TEXT_FILTER':
			return { ...state, text: action.text };
		case 'SORT_BY_DATE':
			return { ...state, sortBy: 'date' };
		case 'SORT_BY_AMOUNT':
			return { ...state, sortBy: 'amount' };
		case 'SET_START_DATE':
			return { ...state, startDate: action.startDate };
		case 'SET_END_DATE':
			return { ...state, endDate: action.endDate };
		default:
			return state;
	}
};

// TIMESTAMPS (milliseconds) they sart at zero wich is
// January 1st 1970 (unix epoch)

// GET VISIBLE EXPENSES
const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
	return expenses
		.filter(expense => {
			const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
			const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
			const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());

			return startDateMatch && endDateMatch && textMatch;
		})
		.sort((a, b) => {
			if (sortBy === 'date') {
				return a.createdAt < b.createdAt ? 1 : -1;
			} else if (sortBy === 'amount') {
				return a.amount < b.amount ? 1 : -1;
			}
		});
};
// return a.createdAt < b.createdAt ? 1 : -1; is filtering by the newest date

// STORE CREATION

const store = createStore(
	combineReducers({
		expenses: expensesReducer,
		filters: filtersReducer,
	})
);

store.subscribe(() => {
	const state = store.getState();
	const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
	console.log(visibleExpenses);
});

const expenseOne = store.dispatch(addExpense({ description: 'Rent', amount: 100, createdAt: -81000 }));
const expenseTwo = store.dispatch(addExpense({ description: 'Coffee', amount: 300, createdAt: -1000 }));

// // EXPENSEREDUCER DISPATCHERS
// store.dispatch(removeExpense({ id: expenseOne.expense.id }));
// store.dispatch(editExpense(expenseTwo.expense.id, { amount: 500 }));
// // FILTERREDUCER DISPATCHERS
// store.dispatch(setTextFilter('fe'));
// store.dispatch(setTextFilter());
store.dispatch(sortByAmount());
// store.dispatch(sortByDate());
// store.dispatch(setStartDate(1125));
// store.dispatch(setStartDate());
// store.dispatch(setEndDate(1250));
// store.dispatch(setEndDate());

// combine reducers allows us to set several reducers and combine them,
// rather than just create one long complicated reducer

// note the amount is in pence as this negates decimals and all that jazz!

// filters = this sets up search criteria for later, so we can filter the output by 'rent' etc

// here, clearly, we have a complex set of state that we need to manage.
// we also need to
// ADD_EXPENSE
// REMOVE_EXPENSE
// EDIT_EXPENSE
// these are just for the expense array - we also have the filter array etc
// SET_TEXT_FILTER
// SORT_BY_DATE
// SORT_BY_AMOUNT
// SET_START_DATE
// SET_END_DATE

// so above we have an array = expenses and an object = filters
// so we need two reducers, one for each
// they will both be created as if the other does not exist, but in the end
// we will combine both to create 1 complete store!
