import React from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
import 'react-dates/initialize';

// const date = new Date();
const now = moment();
console.log(now.format('Do, MMM YYYY'));

export default class ExpenseForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			description: props.expense ? props.expense.description : '',
			note: props.expense ? props.expense.note : '',
			amount: props.expense ? (props.expense.amount / 100).toString() : '',
			createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
			calendarFocused: false,
			error: '',
		};
	}
	onDescriptionChange = e => {
		const description = e.target.value;
		this.setState(() => ({ description }));
	};
	onNoteChange = e => {
		const note = e.target.value;
		this.setState(() => ({ note }));
	};
	onAmountChange = e => {
		const amount = e.target.value;

		if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
			this.setState(() => ({ amount }));
		}
	};
	onDateChange = createdAt => {
		if (createdAt) {
			this.setState(() => ({ createdAt }));
		}
	};
	onFocusChange = ({ focused }) => {
		this.setState(() => ({ calendarFocused: focused }));
	};
	onSubmit = e => {
		e.preventDefault();

		if (!this.state.description || !this.state.amount) {
			this.setState(() => ({ error: 'Please provide description and amount!' }));
		} else {
			this.setState(() => ({ error: '' }));
			this.props.onSubmit({
				description: this.state.description,
				amount: parseFloat(this.state.amount, 10) * 100,
				createdAt: this.state.createdAt.valueOf(),
				note: this.state.note,
			});
		}
	};
	render() {
		return (
			<form className="form" onSubmit={this.onSubmit}>
				{this.state.error && <p className="form__error">{this.state.error}</p>}
				<input
					type="text"
					placeholder="Description"
					autoFocus
					className="text-input"
					value={this.state.description}
					onChange={this.onDescriptionChange}
				/>
				<input
					type="text"
					placeholder="Amount"
					className="text-input"
					value={this.state.amount}
					onChange={this.onAmountChange}
				/>
				<SingleDatePicker
					date={this.state.createdAt}
					onDateChange={this.onDateChange}
					focused={this.state.calendarFocused}
					onFocusChange={this.onFocusChange}
					numberOfMonths={1}
					isOutsideRange={() => false}
					displayFormat="DD/MM/YYYY"
				/>
				<textarea
					placeholder="Add a note for your expense (optional)"
					className="textarea"
					value={this.state.note}
					onChange={this.onNoteChange}
				/>
				<div>
					<button className="button">Save Expense</button>
				</div>
			</form>
		);
	}
}

// if there is no amount || or we have a match
// !amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)
// digit in the range {1 to infinity} decimal followed by only 2 digits
// amount: parseFloat(this.state.amount, 10) *100, = set the amount to use base
// 10 numbers and multiply by 100 so we can work in pounds.
// createdAt: this.state.createdAt.valueOf(), = valueOf() is the unix millisecond
// time stamp for moment as JavaScript works in milliseconds too.
// this means we will have a meaningful date.
