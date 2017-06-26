import React from 'react';
import ReactDom from 'react-dom';
import HomePage from './components/HomePage.jsx';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

ReactDom.render(
	<MuiThemeProvider>
		<HomePage />
	</MuiThemeProvider>
	, document.getElementById('react-app')
);