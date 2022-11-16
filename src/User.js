import React from 'react';

const User = (props) => {
	const data = 'Child';

	return (
		<div>
			<h2>User </h2>
			<button onClick={() => props.alertBox(data)}>Click me </button>
		</div>
	);
};

export default User;
