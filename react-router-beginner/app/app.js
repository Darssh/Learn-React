import React, { Component } from 'react';
import { Router, Route, Link, IndexRoute, hashHistory,
		browserHistory , IndexLink} from 'react-router';


class App extends React.Component {
	render() {
		return (
			<Router history={hashHistory}>
				<Route path='/' component={Container}>
					<IndexRoute component={Home} />
					<Route path='/address' component={Address}>
						<IndexRoute component={TwitterFeed} />
						<Route path='instagram' component={Instagram} />
						<Route path='query' component={Query} />
					</Route>
					<Route path='/about(/:name)' component={About} />
					<Route path='/namedComponent' component={NamedComponents}>
						<IndexRoute component={{ title: Title, subTitle: SubTitle }} />
					</Route>
					<Route path='*' component={NotFound} />
				</Route>
			</Router>
		)
	}
}

const Container = (props) => (
		<div>
			<Nav />
			{props.children}
		</div>
	);

const Home = () => <h1>Hello Home!</h1>;

const Address = (props) => (
		<div>
			<br />
			<Link to='/address'>Twitter Feed</Link>&nbsp;
			<Link to='/address/instagram'>Instagram Feed</Link>
			<h1>We are at 12005 Clora Pl.</h1>
			{props.children}
		</div>
	);

const NotFound = () => <h1>404.. This page is not fount!</h1>;

const Nav = () => (
		<div>
			<IndexLink activeClassName='active'  to='/'>Home</IndexLink>&nbsp;
			<IndexLink activeClassName='active'  to='/address'>Address</IndexLink>&nbsp;
			<IndexLink activeClassName='active'  to='/about'>About</IndexLink>&nbsp;
			<IndexLink activeClassName='active'  to='/namedComponent'>Named Components</IndexLink>&nbsp;
			<IndexLink activeClassName='active'  
				to={{
					pathname: '/address/query',
					query: { message: 'hello from route query '}
				}}>Route Query</IndexLink>
		</div>
	);

const TwitterFeed = () => <h1>Twitter Feed</h1>;

const Instagram = () => <h1>Instagram Feed</h1>;

const About = (props) => (
		<div>
			<h3>About Page</h3>
			{ props.params.name && <h2>Hello, {props.params.name}</h2> }
		</div>
	);

const NamedComponents = (props) => (
		<div>
			{props.title}<br />
			{props.subTitle}
		</div>
	);

const Title = () => (
		<h1>Hello from Title Component</h1>
	);

const SubTitle = () => (
		<h1>Hello from SubTitle Component</h1>
	);


const Query = (props) => (
		<h2>{props.location.query.message}</h2>
	);


export default App;