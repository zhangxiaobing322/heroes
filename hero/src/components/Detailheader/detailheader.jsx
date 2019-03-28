import React, { Component } from 'react'
import { Row, Col } from 'antd'
import {Link} from 'react-router-dom'
import './style.scss'
import api from '@/api/cart'

class Com extends Component {
    constructor(props) {
        super(props)
        this.state = {
            num: null
        }
    }
    componentDidMount () {
        if(localStorage.getItem("qq"))
        {
            api.requestCartData(localStorage.getItem('qq'))
        .then(data=>{
            this.setState({
                num:data.data[0].cart2.length
            })
        })
        }
    }
    equit () {
        localStorage.setItem('gameName','')
        localStorage.setItem('gameDistrict','')
    }
    render () {
        let number = null
        if(this.props.number !== null) {
            number = this.props.number
         } else {
             number = this.state.num
         }
        let login = ''
        if(localStorage.getItem('gameName')) {
            login = <li>欢迎您,{localStorage.getItem('gameName')} <span onClick={this.equit.bind(this)}>退出</span></li>
        } else {
            login =<li>您还未登录，请<Link to='/userapp/login'>登录</Link></li>
        }
        return (
            <div className='header_menu'>
            <div className="header_menu_nav">
                <Row className='nav_color'>
                    <Col span={16} push={8}>
                    <ul className='header_menu_right'>
                    { login }<i>|</i>
                        <li><Link to='/users'>我的订单</Link></li><i>|</i>
                        <li><Link to='/users'>个人中心</Link></li><i>|</i>
                        <li>官方论坛</li><i>|</i>
                        <li>帮助中心</li><i>|</i>
                        <li>游戏导航</li>
                    </ul>
                </Col>
                <Col span={8} pull={16}>
                <ul>
                    <li>手机版</li><i>|</i>
                    <li>游戏币交易</li><i>|</i>
                    <li>Q币充值</li><i>|</i>
                     <li>心悦游戏玩家</li>
                </ul>
                </Col>
                </Row>
            </div>
            <div className='header_search'>
                <ul>
                    <li><div className='header_search_logo_1'></div></li>
                    <li><div className="header_search_search">
                    <div className='header_search_search_input'>
                        <input type="text" placeholder='输入道具进行搜索'/>
                    </div>
                    <div className="header_search_search_btn">
                        <button></button>
                    </div>
                    </div></li>
                    <li><div className='header_search_logo_2'></div></li>
                </ul>
            </div>
            <div className='header_menu_choose'>
                <ul>
                    <Link to='/'>首页</Link>
                    <Link to='/list/list'>商品列表</Link>
                    <Link to='/userapp/activity'>活动专区</Link>
                    <li><Link to='/userapp/discount'>限时折扣</Link></li>
                    <li>聚豆乐园</li>
                    <Link to='/lolshop/zhoubian'>周边商城</Link>
                    <li><Link to='/users'>个人中心</Link></li>
                </ul>
                <Link to='/cart'> <div className="header_menu_cart">购物车 ( {number >0 ? number : 0} )</div></Link>
            </div>
            <div className='header_menu_kind'>
                <div className="header_menu_kind_all">全部分类</div>
                <div className="header_menu_kind_shop">
                    <ul>
                    <li><Link to='/list/2'>英雄</Link></li>
                        <li><Link to='/list/7'>表情</Link></li>
                        <li><Link to='/list/3'>皮肤</Link></li>
                        <li><Link to='/list/4'>道具</Link></li>
                        <li><Link to='/list/5'>守卫皮肤</Link></li>
                        <li><Link to='/list/6'>道具包</Link></li>
                    </ul>
                </div>
            </div>
            <div className="navigation">您现在的位置：英雄联盟 > 全部商品 > 道具详情</div>
        </div>
        )
    }
}

export default Com