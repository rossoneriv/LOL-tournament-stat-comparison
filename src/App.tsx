import React from 'react';
import {HashRouter, Route} from 'react-router-dom';

import Main from './components/comparison/Comparison';
import Record from './components/record/Record';

function App() {

	return (
		<HashRouter>
			<Route exact path="/" component={Main}/>
			<Route path="/record" component={Record}/>
		</HashRouter>
	);
}

export default App;
