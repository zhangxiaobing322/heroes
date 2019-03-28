import React, { Component } from 'react'

import { NavLink } from 'react-router-dom'
import './style.scss'



class Com extends Component {
    constructor(props) {
      super(props);
      this.state = {
        goodName: '',
        usersName:'您还未登录，请登录',
      };
      
    }

    componentDidMount () {
        var user = localStorage.getItem("gameName")
        if (user) {
          this.setState({
            usersName: user
          })
        }
      }
    render () {


        return (
            <div className="contenter">
                <div className="hd-shang">
                    <div className="margin">
                        <ul className='hd-tou'>
                            <li className='tubiao'></li>
                            <li>手机版<i>|</i></li>
                            <li>游戏币交易<i>|</i></li>
                            <li>Q币充值<i>|</i></li>
                            <li>心悦游戏玩家</li>
                        </ul>
                        <ul className='header-right'>
                            <li>{this.state.usersName}<i>|</i></li>
                            <li>我的订单<i>|</i></li>
                            <li>个人中心<i>|</i></li>
                            <li>官方论坛<i>|</i></li>
                            <li>帮助中心<i>|</i></li>
                            <li>游戏导航</li>
                        </ul>
                    </div>
                </div>
                <div className='margin'>
                    <div className='header_search'>
                        <div className='logo'></div>
                        <div className='search'>
                            <a className='xuanzhe' href='#'>选择游戏</a>
                            <input placeholder='请选择游戏搜索道具'></input>
                            <a className='search-fu' href='#'></a>
                        </div>
                        <div className='user'></div>
                    </div>
                </div>
                <div className='header_choose'>
                    <div className='fenlei'>
                        <a href='#'>所有游戏分类</a> 
                    </div>
                    <ul className='hd-nav'>
                        <li><NavLink to="/">首页</NavLink></li>
                        <li><NavLink to="/list/list">商品列表</NavLink></li>
                        <li><NavLink to="/userapp/activity">活动专区</NavLink></li>
                        <li><NavLink to="/userapp/discount">限时折扣</NavLink></li>
                        <li>聚豆乐园</li>
                        <li><NavLink to="/lolshop/zhoubian">周边商城</NavLink></li>
                        <li>个人中心</li>
                    </ul>
                </div>
                
            </div>
        )
    }
}

export default Com