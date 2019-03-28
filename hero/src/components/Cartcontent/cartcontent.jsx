import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import { Button, message, Select  } from 'antd'
import './style.scss'
import api from '../../api/cart';


const Option = Select.Option;
class Com extends Component {
    constructor(props) {
        super(props)
        this.state = {
            cartList: [],
            totalMoney: null
            }
        }

        componentDidMount () {
            api.requestCartData(localStorage.getItem('qq'))
            .then(data =>{
                let number = null
                data.data[0].cart2.map((item)=>{
                    number += parseInt(item.goodPrice)/100
                    return ''
                })
                this.setState({
                    cartList: data.data[0].cart2,
                    totalMoney: number
                })
            })
            
        }
        removeDate (goodId) {
            var obj = {
                qq: localStorage.getItem('qq'),
                goodId: goodId
            }
            let arr = []
            let number = null
            this.state.cartList.map((item,index)=>{
                if(item.goodId !== goodId) {
                    number += parseInt(item.goodPrice)/100
                    arr.push(item)
                }
                return ''
            })
            api.requestRemoveData(obj)
            .then(data => {
                if (data.data.data === 1) {
                    this.props.numFn(arr.length)
                    this.setState({
                        cartList:arr,
                        totalMoney: number
                    })
                }
            })
        }
        Onbtn () {
            message.config({
                top:100,
                duration: 2,
                maxCount: 1,
            })
            message.error('此商品只可购买一件!')
        }

        submitFn () {
            if(localStorage.getItem('gameName'))
            {
                api.requestBalanceData(localStorage.getItem('qq'))
                .then(data =>{
                    if(parseInt(data.data[0].money) > parseInt(this.state.totalMoney))
                    {
                            let topMoney = parseInt(data.data[0].money) - parseInt(this.state.totalMoney)
                            if(this.state.totalMoney > 0) {
                                let arr = []
                            if(localStorage.getItem('heroCart')){
                                arr = JSON.parse(localStorage.getItem('heroCart'))
                                console.log(arr instanceof Array)
                            }
                            this.state.cartList.map((item)=>{
                                let obb = {
                                    qq: localStorage.getItem('qq'),
                                    cart: item
                                }
                                api.requestInputCartData(obb)
                                .then(data => {
                                    console.log(obj)
                                })
                                var obj = {
                                    qq: localStorage.getItem('qq'),
                                    goodId: item.goodId
                                }
                                arr.push(item)
                                api.requestRemoveData(obj)
                                .then(data=>{
                                    console.log(data)
                                })
                                return ''
                            })
                            this.setState({
                                cartList: [],
                                totalMoney: 0
                            })
                            arr = JSON.stringify(arr)
                            localStorage.setItem('heroCart',arr)
                            message.success('成功购买商品!')
                            this.props.numFn(0)
                            let asd = {
                                qq: localStorage.getItem('qq'),
                                money: topMoney,

                            }
                            api.requestUpdateMoneyData(asd)
                            .then(data => {
                                console.log(data)
                            })
                            } else {
                                message.config({
                                    top:100,
                                    duration: 2,
                                    maxCount: 1,
                                })
                                message.error('请添加商品')
                            }
                    } else {
                        message.error('余额不足，请去充值!')
                    }
                })
            
            } else {
                message.config({
                    top:100,
                    duration: 2,
                    maxCount: 1,
                })
                message.error('请先登录!')
            }
        }
    render () {
        return (
            <div className="cart_list">
                <h3>收货角色信息</h3>
                <div className='playInfor'>
                <Select defaultValue="lucy" className='selectbox' style={{ width: 120 }} disabled>
                    <Option value="lucy">{localStorage.getItem('gameDistrict') ? localStorage.getItem('gameDistrict') : '请选择大区'}</Option>
                </Select>
                <Select defaultValue="lucy" className='selectbox' style={{ width: 120 }} disabled>
                    <Option value="lucy">{localStorage.getItem('gameName') ? localStorage.getItem('gameName') : '请选择角色'}</Option>
                </Select>
                </div>
               <h3>商品信息</h3>
               <table border='0' className="tablebox">
                    <thead>
                        <tr>
                            <th colSpan='1'><input type="checkbox" name="" id=""/> 全选</th>
                            <th colSpan='4'>商品名称</th>
                            <th colSpan='1'>类型</th>
                            <th colSpan='1'>单价</th>
                            <th colSpan='1'>期限</th>
                            <th colSpan='1'>数量</th>
                            <th colSpan='1'>优惠</th>
                            <th colSpan='1'>小计</th>
                            <th colSpan='1'>操作</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.cartList.map((item,index)=>{
                                return (
                                    <tr key={index}>
                                        <td colSpan='1'> <input type="checkbox" defaultChecked='checked' disabled/> </td>
                                        <td colSpan='1'> <img src={item.goodImg} alt=""  /></td>
                                        <td colSpan="3"> {item.goodName} </td>
                                        <td colSpan='1'> 游戏道具 </td>
                                        <td colSpan='1'> {(parseInt(item.goodPrice)/100).toFixed(2)}Q币 </td>
                                        <td colSpan='1'> 永久 </td>
                                        <td colSpan='1'> <button className='button' onClick={this.Onbtn.bind(this)}>-</button><input type="text" defaultValue='1' className='input'/><button className='button' onClick={this.Onbtn.bind(this)}>+</button></td>
                                        <td colSpan='1'> 无优惠 </td>
                                        <td colSpan='1'>{(parseInt(item.goodPrice)/100).toFixed(2)}Q币</td>
                                        <td colSpan='1' ><Button type='danger' onClick={this.removeDate.bind(this,item.goodId)}>删除</Button></td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
               </table>
                <h3>您的优惠信息</h3>
                <p>优惠券总量：0  <span>如何获取优惠券>></span></p>
                <div className='cart_t1'>
                    <span>英雄联盟周边商城火热上线</span><Link to='/zhoubian'>查看详情</Link>
                    <Button type="primary" onClick={this.submitFn.bind(this)}>提交订单</Button>
                    <span>实付款：<span>{parseInt(this.state.totalMoney).toFixed(2) > 0 ? parseInt(this.state.totalMoney).toFixed(2) : 0.00} </span>Q币</span>
                </div>
                <h3>温馨提示</h3>
                <p>"LOL优惠券使用规则：[道具包]分类道具全场无法使用，每张优惠券的信息，请仔细核对以下信息：订单满减的金额是否符合要求、优惠券限定可用的道具范围。" </p>
                <p>"购买成功后系统会自动发货，如发货失败24小时内会自动补发。"</p>
                <p>"请确认游戏中是否存在购物车中的英雄或皮肤，如果存在，请勿重复购买。"</p>
                <p>"请重新登录游戏查收物品。"</p>
           </div>
        )
    }
}

export default Com