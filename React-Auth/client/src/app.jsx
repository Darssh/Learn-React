import React from 'react';
import ReactDom from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { BrowserRouter } from 'react-router-dom';
import Base from './components/Base.jsx';

injectTapEventPlugin();

ReactDom.render(
	<MuiThemeProvider muiTheme={getMuiTheme()}>
    	<BrowserRouter>
			<Base/>
		</BrowserRouter>
  	</MuiThemeProvider>,
	document.getElementById('react-app')
);
