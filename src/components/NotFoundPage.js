import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => (
	<div>
		Sorry, 404!! Page not found dude, but you can <Link to="/">go home!</Link>
	</div>
);

export default NotFoundPage;
