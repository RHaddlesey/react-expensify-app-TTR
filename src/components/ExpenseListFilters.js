import React from 'react';
import { connect } from 'react-redux';
import { DateRangePicker } from 'react-dates';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import { setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate } from '../actions/filters';

class ExpenseListFilters extends React.Component {
	state = {
		calenderFocused: null,
	};
	onDatesChange = ({ startDate, endDate }) => {
		this.props.dispatch(setStartDate(startDate));
		this.props.dispatch(setEndDate(endDate));
	};
	onFocusChange = calendarFocused => {
		this.setState(() => ({ calendarFocused }));
	};
	render() {
		return (
			<div className="content-container">
				<div className="input-group">
					<div className="input-group__item">
						<input
							type="text"
							className="text-input"
							placeholder="Search expenses"
							value={this.props.filters.text}
							onChange={e => {
								this.props.dispatch(setTextFilter(e.target.value));
							}}
						/>
					</div>
					<div className="input-group__item">
						<select
							className="select"
							value={this.props.filters.sortBy}
							onChange={e => {
								if (e.target.value === 'date') {
									this.props.dispatch(sortByDate());
								} else if (e.target.value === 'amount') {
									this.props.dispatch(sortByAmount());
								}
							}}
						>
							<option value="date">Date</option>
							<option value="amount">Amount</option>
						</select>
					</div>
					<div className="input-group__item">
						<DateRangePicker
							startDate={this.props.filters.startDate}
							endDate={this.props.filters.endDate}
							displayFormat="DD/MM/YYYY"
							onDatesChange={this.onDatesChange}
							focusedInput={this.state.calendarFocused}
							onFocusChange={this.onFocusChange}
							showClearDates={true}
							numberOfMonths={1}
							isOutsideRange={() => false}
							startDateId="DrH"
							endDateId="DrHwebDev"
						/>
					</div>
				</div>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		filters: state.filters,
	};
};

export default connect(mapStateToProps)(ExpenseListFilters);

// NOTE <option value="amount">Amount</option> means the option Amount
// will be shown, but the value will be set to lowercase by amount

// a controlled input means the input is controlled by JS

// NOTE ==== I had to add startDateId="uwtqeuy" and endDateId="uwtweqeuy"
// to remove an error. They have no real value, I made it up, but it did clear the error
