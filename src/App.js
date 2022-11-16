import './App.css';
import User from './User';

function App() {
	function parentAlert(data) {
		// alert('Parent');
		alert(data);
	}

	return (
		<div className='App'>
			<header className='App-header'>
				<h1>Lifting State Up</h1>

				<User alertBox={parentAlert} />
			</header>
		</div>
	);
}

export default App;
