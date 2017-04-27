import React from 'react';
import ReactDOM from 'react-dom';
import GitCardsList from './github-cards-list';
import Game from './number-selection';
import './index.css';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

const Home = () => {
	return (
		<div>
			<h2>Home Page</h2>
		</div>
	);
}

const MainPage = () => {
	return (
		<Router>
			<div>
				<h2>All The Project List</h2>
				<ul>
					<li><Link to="/">Home</Link></li>
					<li><Link to="/github-card-list">Cards-Add-Project</Link></li>
					<li><Link to="/game">Game</Link></li>
				</ul>

				<hr/>
				<Route exact path="/" component={Home}/>
				<Route path="/github-card-list" component={GitCardsList}/>
				<Route path="/game" component={Game}/>
			</div>
		</Router>
	);
}

ReactDOM.render(
	<MainPage />,
	document.getElementById('root')
);
