import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import Header from '../components/Header';

export const PrivateRoute = ({ isAuthenticated, component: Component, ...rest }) => (
	<Route
		{...rest}
		component={props =>
			isAuthenticated ? (
				<div>
					<Header />
					<Component {...props} />
				</div>
			) : (
				<Redirect to="/" />
			)
		}
	/>
);

const mapStateToProps = state => ({
	isAuthenticated: !!state.auth.uid,
});

export default connect(mapStateToProps)(PrivateRoute);

// ok... so, we destructure the props into
// isAuthenticated and component, then we spread out the
// rest into a const called rest that store the rest of the props.
// this then gets passed into Route - so isAuthenticated is NOT
// getting passed into Route as it does not support it - nor is
// component which is why we need to set that up
