import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route, Link } from 'react-router-dom';
import routes from '../routes.js';

const Base = () => (
    <div>
        <div className="top-bar">
            <div className="top-bar-left">
                <Link to="/">React App</Link>
            </div>

            <div className="top-bar-right">
                <Link to="/login">Log in</Link>
                <Link to="/signup">Sign up</Link>
            </div>
        </div>

        <main>
            <Switch>
                {routes.childRoutes.map((route) => {
                    return <Route key={route.path} exact path={route.path} component={route.component}/>;
                })}
            </Switch>
        </main>
    </div>
);

export default Base;
