import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

import Main from './components/comparison/Comparison';
import Record from './components/record/Record';

function App() {

	return (
		<BrowserRouter basename={process.env.PUBLIC_URL}>
			<Route exact path="/" component={Main}/>
			<Route path="/record" component={Record}/>
		</BrowserRouter>
	);
}

export default App;
