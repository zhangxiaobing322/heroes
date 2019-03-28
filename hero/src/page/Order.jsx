import React, { Component } from 'react'
import Top from '@/components/zhoubian/top/Top'
import Footerzhoubian from '@/components/zhoubian/footer/Footerzhoubian'
import city from '@/api/shuju/addr'
import Flex from '@/components/zhoubian/flex/Flex'
import api from '@/api/users'
import remove from '@/api/shopDetail'
import '@/components/zhoubian/order/style.scss'
import { Button, Modal,Cascader } from 'antd'

class Com extends Component {
  constructor (props) {
    super(props);
    this.state = {
      beizhu:'',
      add:{user:"",tel:"",shi:"",address:""},
      shopping:JSON.parse(localStorage.getItem("shopping")),
      price:localStorage.getItem("price"),
      tel:'',
      user:'',
      shi:'',
      address:''
    }
  }
  //地址添加
  user = (e) => {
    this.setState({
        user: e.target.value
    })
}
address = (e) => {
    this.setState({
        address: e.target.value
    })  
}
tel = (e) => {
    this.setState({
        tel: e.target.value
    })
    
}
showModal = (e) => {
    e.target.style.display = "none"
    this.setState({
      visible: true,
    });
  }

  handleOk = (e) => {
    api.requestUpdateAdd({qq:localStorage.getItem("qq"),add:{user:this.state.user,tel:this.state.tel,address:this.state.address,shi:this.state.shi}})
    this.setState({
      visible: false,
      add:{user:this.state.user,tel:this.state.tel,address:this.state.address,shi:this.state.shi}
    })
    
  }
  handleCancel = (e) => {   
    this.setState({
      visible: false,
    });
  } 
  onChange =(label,selectedOptions)=> {
    var shi = selectedOptions[0].label + selectedOptions[1].label + selectedOptions[2].label
    this.setState({
        shi: shi
    })
  }  

  adioChange = (e) => {
    this.setState({
      addIndex:e.target.value
    })
  }
  textarea = (e) => {
    this.setState({
      beizhu:e.target.value
    })
  }
  fan = () => {
    this.props.history.push('/lolshop/shopCart')
  }
  ti = () => {
    var shop = this.state.shopping
    for (var i=0; i<shop.length; i++) {
      remove.requestremove({"qq":localStorage.getItem("qq"), "goodId":shop[i].goodId})
    }
    this.props.history.push('/users')
    window.localStorage.setItem("beizhu",this.state.beizhu)
  }
  componentDidMount () {
    this.node.scrollIntoView()
  }
  render () {
    return (
      <div className="box" ref={node => this.node = node}>
        <Flex />
        <Top/>
        <div className="main margin_shop"  style ={{background:"#fff", padding:"30px 0", margin:"40px 8%"}}>
          <div className="order">
            <div className="address">
              <h3>选择收货地址</h3>
              <div className="btn_add">
                
                <Button type="primary" style={{display:"inline-block",margin:"20% 30%"}} ref="Button" onClick={(e) =>{this.showModal(e)}}>
                  添加地址
                </Button>
                {this.state.add.user}<br/>
                {this.state.add.tel}<br/>
                {this.state.add.shi}<br/>
                {this.state.add.address}   
              </div>
              <Modal
                title="收货地址"
                visible={this.state.visible}
                onOk={this.handleOk}
                onCancel={this.handleCancel}
                okText="确认"
                cancelText="取消"
                >
                <p>收件主人：<input style={{border:"1px solid #e5e5e5",borderRadius:"3px",width:"198px",height:"30px",margin:"0 0 10px 0"}} type="text" ref="text" onChange={(e)=>{this.user(e)}}/></p>
                <p style={{margin:"0 0 10px 0"}}>省市区县：<Cascader options={city} onChange={this.onChange} placeholder="省/市/区" /></p>
                <p>详细地址：<input style={{border:"1px solid #e5e5e5",borderRadius:"3px",width:"198px",height:"30px",margin:"0 0 10px 0"}} type="text" ref="text" onChange={(e)=>{this.address(e)}}/></p>
                <p>联系方式：<input style={{border:"1px solid #e5e5e5",borderRadius:"3px",width:"198px",height:"30px",margin:"0 0 10px 0"}} type="text" ref="text" onChange={(e)=>{this.tel(e)}}/></p>
              </Modal>

              <div>
              </div>
            </div>
            <div className="orderGood" style={{background:"#f5f5f5"}}>
              <h3>确认商品信息</h3>
              <ul className="cartTop" style={{display:"flex"}}>
                <li style={{ flex:"4"}}>商品信息</li>
                <li style={{ flex:"1"}}>单价(元)</li>
                <li style={{ flex:"1"}}>数量</li>
                <li style={{ flex:"1"}}>金额(元)</li>
              </ul>
              {this.state.shopping.map((item,index) => (
                <ul className="orderList" style={{display:"flex", background:"#fff"}} key={index}>
                <li style={{ flex:"4",display:"flex"}}>
                  <div style={{border:"1px #e5e5e5 solid"}}>
                    <img src={item.goodImg} alt=""/>
                  </div>
                  <div style={{width:"45%"}}>{item.goodName}</div>
                  <div style={{margin:"0 0 0 80px"}}><p style={{height:"30px"}}>颜色：随机</p><p style={{height:"30px"}}>规格：默认</p></div>
                </li>
                <li style={{ flex:"1"}}>{item.goodPrice/100}</li>
                <li style={{ flex:"1"}}>{item.num}</li>
                <li style={{ flex:"1"}}>{item.goodPrice*item.num/100}</li>
              </ul>
              ))}
              <div className="put" style={{background:"#fff"}}>
                备注：<input type="textarea" ref="textarea" onChange={(e)=>{this.textarea(e)}}/>
              </div>
            </div>
            <div className="tijiao">
              <div className="t1">
                <p>商品总价</p>
                <p>VIP抵扣</p>
                <p>优惠券</p>
                <p>聚豆抵扣</p>
                <p>运费：</p>
                <p style={{color:"red",font:"600 20px/20px ''"}}>实付款（含运费）</p>
                <p><Button type="primary" onClick={()=>{this.fan()}} style={{width:"130px", height:"50px"}}>返回购物车修改</Button></p>
              </div>
              <div className="t2">
                <p>{this.state.price}元</p>
                <p>- 0.00 元</p>
                <p>- 0.00 元</p>
                <p>- 0.00 元</p>
                <p> 0.00 元</p>
                <p style={{color:"red",font:"600 20px/20px ''"}}>{this.state.price}元</p>
                <p><Button type="danger" onClick={()=>{this.ti()}} style={{width:"130px", height:"50px"}}>提交订单</Button></p>
              </div>
            </div>
          </div>
        </div>
        <Footerzhoubian />
      </div>
    )
  }

}

export default Com