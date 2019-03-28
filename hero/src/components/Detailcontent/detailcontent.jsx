import React, { Component } from 'react'
import api from '@/api/detail'
import {Link} from 'react-router-dom'
import { Button, message } from 'antd'
import './style.scss'

class Com extends Component {
    constructor(props) {
        super(props)
        this.state = {
            likeList: [],
            shouList: [],
            goodData: {},
            cartInfor:[],
            cartflag:false,
            incart2: true,
            totalNumber: null
            }
        }
    componentDidMount(){
        const id = this.props.match.params.id
        api.requestAllData(id)
        .then(data =>{
            this.setState({
                goodData: data.data[0]
            })
        })
        api.requestShouWeiData()
        .then(data =>{
            this.setState({
                likeList: data.data
            })
        })
        api.requestShouBanData()
        .then(data => {
            this.setState({
                shouList: data.data
            })
        })
    }
    addCart () {
        if(localStorage.getItem('gameName'))
        {
            const obj = {
                qq: localStorage.getItem('qq'),
                cart: {
                    goodId:this.state.goodData.goodId,
                    goodName:this.state.goodData.goodName,
                    goodImg:this.state.goodData.goodImg,
                    goodPrice:this.state.goodData.goodPrice
                }
            }
            api.requestUpdateData(localStorage.getItem('qq'))
            .then(data => {
                if(data.data[0].cart3)
              {
                  data.data[0].cart3.map((item)=>{
                      if(item.goodId === this.state.goodData.goodId)
                      {
                          this.setState({
                              incart2: false
                          })
                      }
                  })
              }
                this.setState({
                    cartInfer: data.data[0].cart2
                })
                if(this.state.incart2) {
                    this.state.cartInfer.map((item)=>{
                        if(item.goodId === this.state.goodData.goodId) {
                            this.setState({cartflag:true})
                        }
                        return ''
                    })
                    if(this.state.cartflag) {
                      message.error('已存在此商品!')
                    } else {
                        api.requestUpdate(obj)
                        .then(data => {
                            if(data.data.data === 1) {
                              message.success('加入成功!')
                              api.requestUpdateData(localStorage.getItem('qq'))
                                .then(data =>{
                                    this.setState({
                                        totalNumber: data.data[0].cart2.length
                                    })
                                    console.log(this.state.totalNumber)
                                    this.props.NumberFn(this.state.totalNumber)
                                })
                            }
                        })
                    }
                } else {
                    message.error('此商品已购买!')
                }
            })
        } else {
            message.config({
                top:100,
                duration: 2,
                maxCount: 1,
            })
              message.error('请登录!')
        }
    }
    render () {
        return (
            <div className="detail_list">
                <div className="detail_left">
                    <div className='hot_range'>
                    <h3><span>猜你喜欢</span></h3>
                    <ul>
                    {
                        this.state.likeList.slice(0,3).map((item,index)=>{
                            return (
                                <li key={index}>
                        <Link to={'/detail/' + item.goodId}><img src={item.goodImg} alt=""/></Link>
                        <div className='imginfo'>
                            <p>{item.goodName}</p>
                            <p>Q币价： {parseInt(item.goodPrice)/100}.00Q币</p>
                            <p>微信价： <span>￥{(parseInt(item.goodPrice)/100*0.9).toFixed(2)}</span> </p>
                        </div>
                    </li>
                            )
                        })
                    }
                    </ul>
                    </div>
                    <div className="detail_zhou">
                    <h3><span>周边商城</span></h3>
                    <ul>
                        {
                            this.state.shouList.slice(5,8).map((item, index)=>{
                                return (
                                    <li key={index}>
                                    <Link to={'/lolshop/shopDetail/'+ item.handId}><img src={item.handImg} alt=""/></Link>
                                        <p>{item.handName}</p>
                                        <p>￥{item.handPrice/100}</p>
                                    </li>
                                )
                            })
                        }
                    </ul>
                    </div>
                </div>
                <div className="detail_detail">
                    <div className="detail_shop">
                        <div className="img_show"><img src={this.state.goodData.goodImg} alt=""/>
                            <Link to='/cart' className='xing'>收藏商品</Link>
                            <div className="iconfont icon-sousuo right"></div>
                        </div>
                        <div className="goods_buy">
                            <span>{this.state.goodData.goodName}</span>
                            <div className="comic">
                            <ul>
                                <li>Q币价：{(this.state.goodData.goodPrice/100).toFixed(2)} Q币</li>
                                <li>微信价：<span>￥{(this.state.goodData.goodPrice/100).toFixed(2)}</span></li>
                            </ul>
                            </div>
                            <p>期限：永久</p>
                            <div className='btn_buy'>
                            <Button type="danger" onClick={this.addCart.bind(this)}>加入购物车</Button>
                            <Button type="Primary">赠送</Button>
                            </div>
                        </div>
                    </div>
                    <div className='detail_info'>
                        <div className='headerteng'>
                        <span>商品详情</span><div className='line'></div><span>手机购买</span><i className='aa'>
                        <img src="//js01.daoju.qq.com/common/images/channel/revision/lol/code.png" alt=""/>
                        </i>
                        
                        </div>
                        <p>{this.state.goodData.goodName}</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Com