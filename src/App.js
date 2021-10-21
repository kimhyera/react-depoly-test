import './App.css';
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from './components/header';
import PostList from './components/postList';
import Home from './components/home';
import Example from './components/Example';

function App() {
	return (
		<div className="App">
			<BrowserRouter basename={process.env.PUBLIC_URL}>
				{/* basename: 프로젝트 명을 붙여주기 위함. react-github-pages-depoly  */}
				<Header />
				<Switch>
					<Route exact path={['/', '/Home']}>
						<Home />
					</Route>
					<Route path={['/Example']}>
						<Example />
					</Route>

					<Route path="/PostList">
						<PostList />
					</Route>
				</Switch>
			</BrowserRouter>
		</div>
	);
}

export default App;
