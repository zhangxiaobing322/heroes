import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Zhoubian from '@/page/Zhoubian';
import KindHand from '@/page/KindHand';
import ShopDetail from '@/page/ShopDetail';
import ShopCart from '@/page/ShopCart';
import Order from '@/page/Order';
import ShopSearch from '@/page/ShopSearch';
class Com extends Component {

  render () {
    return (
      <div className = "box">
        
        <Switch>
          <Route path='/lolshop/shopSearch/:goodName' component = { ShopSearch }/>
          <Route path='/lolshop/order' component = { Order }/>
          <Route path='/lolshop/shopCart' component = { ShopCart }/>
          <Route path='/lolshop/ShopDetail/:id' component = { ShopDetail }/>
          <Route path='/lolshop/kindHand' component = { KindHand }/>
          <Route path='/lolshop/zhoubian' component = { Zhoubian }/>
        </Switch>
      </div>
    )
  }
}

export default Com
