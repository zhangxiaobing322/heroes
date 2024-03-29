import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Register from '@/page/Register/Register';
import Activity from '@/page/Activity/Activity.jsx';
import Discount from '@/page/Discount/Discount.jsx';
import Login from '@/page/Login';
import Notice from '@/page/Notice/Notice.jsx';
class Com extends Component {

  render () {
    return (
      // <div className = "box1">
        <Switch>
          <Route path='/userapp/login' component = { Login }/>
          <Route path='/userapp/register' component = { Register }/>
          <Route path='/userapp/activity' component = { Activity }/>
          <Route path='/userapp/discount' component = { Discount }/>
          <Route path='/userapp/notice' component = { Notice }/>
        </Switch>
      // </div>
    )
  }

}

export default Com
