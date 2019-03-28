import React, { Component } from 'react'
import api from '@/api/list'
import { Pagination, Modal, Button,message } from 'antd'
import {Link} from 'react-router-dom'
import './style.scss'

class Com extends Component {
    constructor(props) {
        super(props)
        this.state = {
            likeList: [],
            shouList: [],
            allList: [],
            skinList: [],
            shopInfor: {},
            hotInfor: {},
            cartInfor: [],
            pageCode: 1,
            activeIn: 1,
            num: -1,
            flag: false,
            visible: false,
            activeIndex: 1,
            cartflag: false,
            totalNumber: null
        }
        
    }
    onChange(e) {
        if(this.state.flag) {
            api.requestSortAllData(this.state.num)
        .then(data => {
            this.setState({
                allList: data.data
            })
        })
        } else {
            api.requestAllData(e)
        .then(data => {
            this.setState({
                allList:data.data
            })
        })
        }
      }
      onchanged(e) {
        if(e.target.value !== '') {
            api.requestAllKindData(e.target.value)
            .then(data => {
            this.setState({
                allList:data.data,
                activeIn: 2
            })
        })
        } else {
            const pageCode = this.state.pageCode 
            api.requestAllData(pageCode)
            .then(data => {
                this.setState({
                    allList:data.data,
                    activeIn: 1
                })
            })
            if(this.props.match.params.name !=='list') {
                this.props.history.push('/list/list')
            }
        }
      }
    
    componentDidMount(){
        if(this.props.match.params.name !== 'list' && !((this.props.match.params.name*1) > 1) && !((this.props.match.params.name*1) < 7)) {
            api.requestAllKindData(this.props.match.params.name)
        .then(data => {
            this.setState({
                allList:data.data
            })
        })
        } else {
         const pageCode = this.state.pageCode 
        api.requestAllData(pageCode)
        .then(data => {
            this.setState({
                allList:data.data
            })
        })
        }
        api.requestHeroSkinData()
        .then(data =>{
            this.setState({
                skinList: data.data
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
    PriceChange (e) {
        this.setState({
            num: this.state.num * -1
        })
        if(this.state.num === 1) {
            e.target.innerHTML = '价格 +'
        } else {
            e.target.innerHTML = '价格 -'
        }
        api.requestSortAllData(this.state.num)
        .then(data => {
            this.setState({
                allList: data.data,
                flag: true
            })
        })
    }
    AllKind () {
        const pageCode = this.state.pageCode 
        api.requestAllData(pageCode)
        .then(data => {
            this.setState({
                allList:data.data,
                pageCode: 1
            })
        })
    }
    showModal = (e) => {
      }
    
      handleOk = (e) => {
        this.setState({
          visible: false,
        });
      }
    
      handleCancel = (e) => {
        this.setState({
          visible: false,
        });
      }
      inCart (item) {
        if(localStorage.getItem('gameName'))
        {
            this.setState({
                visible: true,
                shopInfor:{
                    goodId:item.goodId,
                    goodName:item.goodName,
                    goodImg:item.goodImg,
                    goodPrice:item.goodPrice,
                    goodDay:"永久"
                },
                cartflag:false
              });
        } else {
            message.config({
                top:100,
                duration: 2,
                maxCount: 1,
            })
              message.error('请登录!')
        }
        
    }
    AddCart () {
        const obj = {
            qq: localStorage.getItem('qq'),
            cart: {
                goodId:this.state.shopInfor.goodId,
                goodName:this.state.shopInfor.goodName,
                goodImg:this.state.shopInfor.goodImg,
                goodPrice:this.state.shopInfor.goodPrice
            }
        }
        api.requestUpdateData(localStorage.getItem('qq'))
        .then(data => {
            this.setState({
                cartInfer: data.data.data[0].cart2
            })
            this.state.cartInfer.map((item) =>{
                if(item.goodId === this.state.shopInfor.goodId) {
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
                      api.requestCartData(localStorage.getItem('qq'))
                        .then(data =>{
                            this.setState({
                                totalNumber: data.data[0].cart2.length
                            })
                            this.props.NumberFn(this.state.totalNumber)
                        })
                    }
                })
            }
        })
    }
    render () {
        let html = ''
        let named = this.props.match.params.name
        if((named*1) > 1 && (named*1)<8){
            named = 'list'
        }
        let page = this.state.pageCode
        if(named === 'list' && this.state.activeIn === 1) {
            html = <Pagination showQuickJumper  defaultCurrent={1} total={1000} onChange={this.onChange.bind(this)} />
        }
        else {
             html = ''
        }
        return (
            <div>
                <div className="navigation">您现在的位置：英雄联盟 > 全部分类</div>
                <div className='list_all'>
                    <div className='left'>
                        <div className='hot_range'>
                        <h3><span>热门排行</span></h3>
                        <ul>
                        {
                            this.state.likeList.slice(0,10).map((item,index)=>{
                                return (
                                    <Link to={'/detail/' + item.goodId} key={index}>
                                        <li >
                                        <img src={item.goodImg} alt=""/>
                                        <div className='imginfo'>
                                            <p>{item.goodName}</p>
                                            <p>Q币价： {parseInt(item.goodPrice)/100}.00Q币</p>
                                            <p>微信价： <span>￥{(parseInt(item.goodPrice)/100*0.9).toFixed(2)}</span> </p>
                                        </div>
                                    </li>
                                    </Link>
                                )
                            })
                        }
                        </ul>
                        </div>
                        <div className="zhoubian">
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
                    <div className='right'>
                        <div className='right_nav'>
                            <div className='search'>
                               关键字: <input type="text" defaultValue={named === 'list' ? '' : named} onChange={this.onchanged.bind(this)}/>
                               <span>价格区间(QB)：<input type="text"/>  - <input type="text"/><button>确定</button></span>
                            </div>
                            <div className='sort'>
                                <ul>
                                    <li onClick={this.AllKind.bind(this)}>上架时间</li>
                                    <li >销量 +</li>
                                    <li onClick={this.PriceChange.bind(this)}>价格 +</li>
                                    <li><input type="checkbox"/> 显示已拥有</li>
                                </ul>
                            </div>
                        </div>
                        <div className='hot_box'>
                            <div className='hot_box_list'>
                            <ul>
                                {
                                    this.state.allList.slice(0,12).map((item,index)=> {
                                        return (
                                            
                                                <li key={index}>
                                                    <div className='goods_detail'>
                                                    <Link to={'/detail/' + item.goodId}><img src={item.goodImg} alt=""/></Link>
                                                    <div >{item.goodName}</div>
                                                    <div className='dis_list'>Q币价： <span>{parseInt(item.goodPrice)/100}.00 Q币</span></div>
                                                    <div className='dis_list'>微信价： <span>   ¥{(parseInt(item.goodPrice)/100*0.9).toFixed(2)}</span></div>
                                                    <div onClick={this.inCart.bind(this,item)}>立即购买</div>
                                                    <Modal
                                                        title="加入购物车"
                                                        visible={this.state.visible}
                                                        footer={null}
                                                        onCancel={this.handleCancel}
                                                        mask ={false}
                                                        maskClosable={false}
                                                        >
                                                        <div className='shopInFor'>
                                                            <div className='imgInFor'>
                                                            <img src={this.state.shopInfor.goodImg} alt=""/>
                                                            <p>{this.state.shopInfor.goodName}</p>
                                                            </div>
                                                        <div className='heroInFor'>
                                                            <p>价格：<span>{(this.state.shopInfor.goodPrice/100).toFixed(1)}</span> Q币</p>
                                                            <p>期限：<span>{this.state.shopInfor.goodDay}</span></p>
                                                            <Button type="danger" onClick={this.AddCart.bind(this)}>确定</Button>
                                                        </div>
                                                        </div>
                                                    </Modal>
                                                    </div>
                                                </li>
                                        )
                                    })
                                }
                            </ul>
                            </div>
                    </div>
                    {html}
                    <div className="detail_zhou">
                    <h3><span>猜你喜欢</span></h3>
                    <ul>
                        {
                            this.state.skinList.slice(37,42).map((item, index)=>{
                                return (
                                    <Link to={'/detail/' + item.goodId} key={index}>
                                        <li ><img src={item.goodImg} alt=""/>
                                        <p>{item.goodName}</p>
                                        <p>￥{item.goodPrice/100}</p>
                                    </li>
                                    </Link>
                                )
                            })
                        }
                    </ul>
                    </div>
                </div>
            </div>
            </div>
        )
    }
}

export default Com