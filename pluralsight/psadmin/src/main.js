import {$, jQuery} from 'jquery';
import React from "react";
import Home from "./components/homePage";
import ReactDOM from "react-dom";
import About from "./components/about/aboutPage";

(function(){
	"use strict";
	
	class App extends React.Component {
		render() {
			var Child;

			switch(this.props.route) {
				case 'about': Child = About; break;
				default: Child = Home;
			}

			return (
				<div>
					<Child />
				</div>
			);
		}
	}

	function render() {
		var route = window.location.hash.substr(1);
		ReactDOM.render(<App route={route} />, document.getElementById('app'));
	}

	window.addEventListener('hashchange', render);
	render();
}());

