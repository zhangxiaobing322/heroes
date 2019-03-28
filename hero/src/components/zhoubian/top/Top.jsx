import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import './style.scss'
import { withRouter } from 'react-router'
import api from '@/api/shopDetail'

class Top extends Component {
  constructor (props) {
    super(props);
    this.state = {
      num: 0,
      goodName: '',
      usersName:'立即登录',
      url:'/userapp/login'
    }
  }
  search = (e) => {
    this.setState({
      goodName: e.target.value
    })  
  }
  onKeyup = (e) => {
    if(e.keyCode === 13) {
      this.props.history.push('/lolshop/shopSearch/'+this.state.goodName)
    }
  }
  componentDidMount () {
    var user = localStorage.getItem("gameName")
    var qq = localStorage.getItem("qq")
    if (user) {
      this.setState({
        usersName: user,
        url:'/Users'
      })
      api.requestCart(qq).then(data => {
        this.setState({
          num:data[0].cart1.length
        })
      })
    }
  }
  render () {
    return (
      <header className = "top" >
      <div className="top_logo margin_shop">
        <div className="logo"><NavLink to="/lolshop/zhoubian"></NavLink></div>
        <div className="logo_1"><NavLink to="/"></NavLink></div>
        <div className="search">
          <div className="t"></div>
          <input type="search" onKeyUp={this.onKeyup} ref="search" onChange={(e)=>{this.search(e)}} style={{color:"#fff"}} placeholder="请输入想要的宝贝"/>
        </div>
        <NavLink to = {this.state.url} className="login">{this.state.usersName}</NavLink >
        <NavLink to = "/lolshop/shopCart" className="cart"><div></div><p>购物车<span>  {this.state.num}件</span></p></NavLink >
    </div>
    <div className="nav margin">
      <NavLink to = "/lolshop/zhoubian" >首页</NavLink >
      <NavLink to = "/lolshop/kindHand?num=1" >雕塑手办</NavLink >
      <NavLink to = "/lolshop/kindHand?num=4" >毛绒玩具</NavLink >
      <NavLink to = "/lolshop/kindHand?num=5" >周边服饰</NavLink >
      <NavLink to = "/lolshop/kindHand?num=3" >官方海报</NavLink >
      <NavLink to = "/lolshop/kindHand?num=6" >LPL队服 </NavLink >
      <div className="all">
        <div className="kind">全部商品分类<i></i></div>
        <div className="kind1">
          <ul className="ul_1">
            <li><i><img src="https://game.gtimg.cn/images/zb/x5/uploadImg/goods/201810/20181009145105_88040.png" alt=""/></i></li>
            <li><h3><NavLink to = "/lolshop/kindHand?num=1" >雕塑手办</NavLink ></h3></li>
            <li>中型雕塑</li>
            <li>手办</li>
            <li>限定手办</li>
            <li>大型雕塑</li>
            <li>迷你手办</li>
          </ul>
          <ul className="ul_2">
            <li><i><img src="https://game.gtimg.cn/images/zb/x5/uploadImg/goods/201810/20181009145058_70222.png" alt=""/></i></li>
            <li><h3><NavLink to = "/lolshop/kindHand?num=4" >毛绒玩偶</NavLink ></h3></li>
            <li>玩偶</li>
            <li>帽子</li>
          </ul>
          <ul className="ul_3">
            <li><i><img src="https://game.gtimg.cn/images/zb/x5/uploadImg/goods/201810/20181009145046_11520.png" alt=""/></i></li>
            <li><h3><NavLink to = "/lolshop/kindHand?num=5" >男女服饰</NavLink ></h3></li>
            <li>T恤</li>
            <li>其他</li>
            <li>卫衣&夹克</li>
          </ul>
          <ul className="ul_4">
            <li><i><img src="https://game.gtimg.cn/images/zb/x5/uploadImg/goods/201810/20181009145027_24747.png" alt=""/></i></li>
            <li><h3><NavLink to = "/lolshop/kindHand?num=3" >海报艺术</NavLink ></h3></li>
            <li>英雄海报</li>
            <li>画册</li>
          </ul>
          <ul className="ul_5">
            <li><i><img src="https://game.gtimg.cn/images/zb/x5/uploadImg/goods/201810/20181024161609_23161.png" alt=""/></i></li>
            <li><h3><NavLink to = "/lolshop/kindHand?num=7" >珠宝首饰</NavLink ></h3></li>
            <li>幸运珠</li>
            <li>吊坠</li>
            <li>手链</li>
            <li>配件</li>
          </ul>
          <ul className="ul_6">
            <li><i><img src="https://game.gtimg.cn/images/zb/x5/uploadImg/goods/201810/20181009145019_53471.png" alt=""/></i></li>
            <li><h3><NavLink to = "/lolshop/kindHand?num=6" >官方海报</NavLink ></h3></li>
            <li>战队帽子</li>
            <li>队服T恤</li>
            <li>战队裤子</li>
          </ul>
          <ul className="ul_7">
            <li><i><img src="https://game.gtimg.cn/images/zb/x5/uploadImg/goods/201810/20181024161530_16295.png" alt=""/></i></li>
            <li><h3><NavLink to = "/lolshop/kindHand?num=2" >其它</NavLink ></h3></li>
            <li>其它</li>
            <li>鼠标</li>
            <li>键盘</li>
          </ul>
        </div>
      </div>
    </div>
  </header>
    )
  }
}

  

export default withRouter(Top)
