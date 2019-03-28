
import React, { Component } from 'react'
import api from '@/api/shopDetail'
import './style';
import { NavLink } from 'react-router-dom';
class Flex extends Component {
  constructor (props) {
    super(props);
    this.state = {
      num: 0
    }
  }
  componentDidMount () {
    var user = localStorage.getItem("gameName")
    var qq = localStorage.getItem("qq")
    if (user) {
      api.requestCart(qq).then(data => {
        this.setState({
          num:data[0].cart1.length
        })
      })
    } 
  }
  render () {
    return (
  <ul className="flex">
      <li className="li1"><div></div></li>
      <li className="li2"><div></div></li>
      <li className="li3"><NavLink to="/lolshop/shopCart"><div></div></NavLink></li>
      <li className="li5">{this.state.num}  件</li>
      <li className="li4"><div></div></li> 
  </ul>
    )}
}
  


export default Flex