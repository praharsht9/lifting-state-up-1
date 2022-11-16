import React from 'react';

const User = (props) => {
	const data = 'Praharsh';

	return (
		<div>
			<h2>User </h2>
			<button onClick={() => props.alert(data)}>Click me </button>
		</div>
	);
};

export default User;
