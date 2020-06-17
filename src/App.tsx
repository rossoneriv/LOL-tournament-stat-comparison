import React from 'react';
import Main from './components/Main';
import Record from './components/Record';
import {BrowserRouter, Route} from 'react-router-dom';

function App() {

	return (
		<BrowserRouter>
			<Route exact path="/" component={Main}/>
			<Route path="/record" component={Record}/>
		</BrowserRouter>
	);
}

export default App;
