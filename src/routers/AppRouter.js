import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import ExpenseDashboardPage from '../components/ExpenseDashboardPage';
import AddExpensePage from '../components/AddExpensePage';
import EditExpensePage from '../components/EditExpensePage';
import Header from '../components/Header';
import HelpPage from '../components/HelpPage';
import NotFoundPage from '../components/NotFoundPage';

const AppRouter = () => (
	<BrowserRouter>
		<div>
			<Header />
			<Switch>
				<Route path="/" component={ExpenseDashboardPage} exact={true} />
				<Route path="/create" component={AddExpensePage} />
				<Route path="/edit/:id" component={EditExpensePage} />
				<Route path="/help" component={HelpPage} />
				<Route component={NotFoundPage} />
			</Switch>
		</div>
	</BrowserRouter>
);

export default AppRouter;

// so routing -- route to this path - then grab this component
// as default we would get "/" show up on every route because every route starts with /
// so if we had routes / /home /home/base  and put /home/base in the browser = \
// all three routes would show. So we can add the prop exact in so that it does not
// matter what the url starts with, only that it is an exact match.
// so we can use Switch to make the router go through one at a time and stop when it finds a match.
// if no match is found, it will stop at the last one and display the 404 message.

// for page links, old HTML would be this way <a href="/">go home!</a> but instead we import LINK
// from route and use Link to because this is client side and will not go to the server like href would
// this only works for internal links with clientside rendering. If you want to link externally,
// you would still just use href.
