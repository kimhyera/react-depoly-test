import './App.css';
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

//import Header from './components/header';
import PostList from './components/postList';
import Home from './components/home';
import Footer from './components/footer';
import Header from './components/header';

function App() {
	return (
		<div className="App">
			<BrowserRouter basename={process.env.PUBLIC_URL}>
				<Header />
				<Switch>
					<Route exact path={['/', '/Home']}>
						<Home />
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
