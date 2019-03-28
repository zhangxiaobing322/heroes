import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './page/home/home'
import Detail from './page/detail/Detail'
import List from './page/list/List'
import Cart from './page/cart/Cart'
import Login from './page/Login/Login'
import Users from './page/users/Users'
import './mian'


class App extends Component {
  render () {
    return (
      <Router>
        <Switch>
          <Route path="/detail/:id" component = { Detail } />
          <Route path="/Cart" component = { Cart } />
          <Route path="/Login" component = { Login } />
          <Route path="/Users" component = { Users } />
          <Route path="/list/:name" component = { List } />
          <Route path="/" component = { Home } />
        </Switch>
      </Router>
    )
  }
}

export default App;
