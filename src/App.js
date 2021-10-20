import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/header';
import PostList from './components/postList';
import Home from './components/home';
import Footer from './components/footer';

function App() {
	return (
		<div className="App">
			<Router>
				<Header />
				<Switch>
					<Route exact path={['/', '/Home']}>
						<Home />
					</Route>
					<Route path="/PostList">
						<PostList />
					</Route>
				</Switch>
			</Router>

			<Footer />
		</div>
	);
}

export default App;
