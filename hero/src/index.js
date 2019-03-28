import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import App from './App'
import ZhoubianApp from '@/layout/ZhoubianApp';
import userApp from '@/layout/UserApp';
import * as serviceWorker from './serviceWorker';
import '@/mian.scss';
import 'antd/dist/antd.css';
  ReactDOM.render(
    <Router>
      <Switch>
        <Route path="/lolshop" component = { ZhoubianApp } />
        <Route path="/userapp" component = { userApp } />
		<Route path="/" component = { App } />
      </Switch>
    </Router>,
    document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
