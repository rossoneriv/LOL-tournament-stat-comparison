import React, {Suspense, lazy} from 'react';
import {HashRouter, Route} from 'react-router-dom';

const Main = lazy(() => import('./components/comparison/Comparison'));
const Record = lazy(() => import('./components/record/Record'));

function App() {

	return (
		<HashRouter>
			<Suspense fallback={<></>}>
				<Route exact path="/" component={Main}/>
				<Route path="/record" component={Record}/>
			</Suspense>
		</HashRouter>
	);
}

export default App;