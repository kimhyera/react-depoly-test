import './App.css';
import React from 'react';
import { BrowserRouter as HashRouter, Route, Switch } from 'react-router-dom';
import Header from './components/header';
import PostList from './components/postList';
import Home from './components/home';
import Footer from './components/footer';

function App() {
	return (
		<div className="App">
			<HashRouter>
				<Header />
				<Switch>
					<Route exact path={['/', '/Home']}>
						<Home />
					</Route>
					<Route path="/PostList">
						<PostList />
					</Route>
				</Switch>
			</HashRouter>

			<Footer />
		</div>
	);
}

export default App;
