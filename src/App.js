import './App.css';
import React from 'react';
import { HashRouter, Route } from 'react-router-dom';

//import Header from './components/header';
import PostList from './components/postList';
import Home from './components/home';
import Footer from './components/footer';
import Header from './components/header';

function App() {
	return (
		<div className="App">
			<HashRouter>
				<Header />
				{/*<Switch>
					<Route
						exact
						path={['/react-depoly-test/', '/react-depoly-test/Home']}
					>
						<Home />
					</Route>

					<Route path="/react-depoly-test/PostList">
						<PostList />
					</Route>
				</Switch>*/}
				<Route path={['/', '/Home']} exact={true} component={Home} />
				<Route path="/PostList" component={PostList} />
			</HashRouter>

			<Footer />
		</div>
	);
}

export default App;
