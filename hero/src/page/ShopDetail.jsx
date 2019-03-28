import React, { Component } from 'react';
import api from '@/api/shopDetail';
import Flex from '@/components/zhoubian/flex/Flex'
import Top from '@/components/zhoubian/top/Top'
import Footerzhoubian from '@/components/zhoubian/footer/Footerzhoubian'
import { Rate, Button, Tabs, Modal, Icon } from 'antd'

import '@/components/zhoubian/shopDetail/style.scss'
const TabPane = Tabs.TabPane
class Com extends Component {
  constructor (props) {
    super(props);
    this.state = {
      visible: false,
      cart: {},
      id:this.props.match.params.id,
      value: 1,
      list: {},
      tong:[],
      alr: Math.ceil(Math.random()*10000),
      ping: Math.ceil(Math.random()*500),
      xing: Math.ceil(Math.random()*2+3)
    }
  }
  handleOk = (e) => {
    
    this.setState({
      visible: false,
    });
    this.props.history.push('/lolshop/shopCart')
  }

  handleCancel = (e) => {
    this.props.history.push('/lolshop/zhoubian')
    this.setState({
      visible: false,
    });
  }

  jian = () => {
    if (this.state.value <= 1) {
      this.setState({
        value: 1
      })
    } else {
      this.setState({
      value:this.state.value-1
      })
    }  
  }
  jia = () => {
    this.setState({
      value:this.state.value+1
    })
  }
  cart = () => {
    if (localStorage.getItem("qq")) {
      this.setState({
        visible: true,
      })
      var goods = {
        goodImg:this.state.list.goodImg,
        goodName:this.state.list.goodName,
        goodPrice:this.state.list.goodPrice,
        goodId:this.state.list.goodId,
        num:this.state.value
      }
  
      if (this.state.tong.length === 0) {
        api.requestUpdate({"qq":localStorage.getItem("qq"),cart:goods})
        this.setState({
          visible: true,
        })
      } else {
        alert('您已经添加过此商品,去购物车购买吧')
        
          this.props.history.push('/lolshop/shopCart')
        
      }  
    } else {
      this.setState({
        visible: false,
      })
      alert('当前状态未登录，请登录!')
    }
    
  }
  componentDidMount () {
    this.node.scrollIntoView()
    api.requestDetail(this.state.id).then(data => {
      this.setState({
        list: data.data[0]             
      })
    })
    
    if(localStorage.getItem('qq'))
    {
      api.requestCart(localStorage.getItem("qq")).then(data => {
        for (var i=0; i<data[0].cart1.length; i++) {
          if (this.state.id ===  data[0].cart1[i].goodId) {
            this.setState({
              tong:data[0].cart1[i]
            })
          }
        }
      })
    }
  }
  
  render () {
    return (
      <div className="box" ref={node => this.node = node}>
        <Flex />
        <Top/>
        <div className="content">
          <div className="main margin_shop" style={{background:"#fff", padding:'40px 0 30px 0', margin:"50px auto "}}>
            <div className="goodDetail">
              <div className="left">
                <img src={this.state.list.goodImg} alt=""/>
              </div>
              <div className="right">
                <h3>{this.state.list.goodName}</h3>
                <p className="pri">￥{this.state.list.goodPrice/100}
                </p>
                <div className="alr">
                  <p>已售：{this.state.alr}</p>
                  <p>累计评论：{this.state.ping}</p>
                  <p>
                    <Rate defaultValue={this.state.xing}/>{this.state.xing}星
                  </p>
                </div>
                <div className="gui">
                  <p>颜色:<i>默认</i></p>
                  <p>规格:<i>默认</i></p>
                  
                </div>
                <div className="btn">数量
                <Button type="danger" style={{margin:"0 0 0 30px"}} onClick={this.jian}>-</Button>
                <input type="text" value={this.state.value}/>
                <Button type="danger" style={{margin:"0 10px 0 0"}} onClick={this.jia}>+</Button>(库存充足)
                </div>
                <div className="cart">
                  <Button type="danger " size="large" onClick={this.cart}>
                  加入购物车
                  </Button>
                  <Button type="danger" size="large" onClick={this.liji}>
                  立即购买
                  </Button>
                </div>
              </div>
            </div>
            <div className="shouhou">
            <Tabs defaultActiveKey="1" size="large">
              <TabPane tab="商品详情" key="1"><div>
                  <img src="https://shp.qpic.cn/mall/0/goods_lolriotmall_201901203907_11154/0.jpg" alt=""/><img src="https://shp.qpic.cn/mall/0/goods_lolriotmall_201901203908_13111/0.jpg" alt=""/>
                <img src="https://shp.qpic.cn/mall/0/goods_lolriotmall_201901203909_47607/0.jpg" alt=""/>
                </div>
              </TabPane>
              <TabPane tab="用户点评" key="2">
                
              </TabPane>
              <TabPane tab="联系商家" key="3">Content of Tab Pane 3</TabPane>
            </Tabs>
            </div>
          </div>
        </div>
          <div className="show">
          <Modal
            title="购物车提醒"
            okText="确认"
            cancelText="继续购物"
            okType="danger"
            style={{ top: 200 }}
            visible={this.state.visible}
            onOk={this.handleOk}
            onCancel={this.handleCancel}
          >
            <p className="p" style={{height:"100px",font:" 700 20px/100px ''", color:"red"}}><Icon type="check" width="50px"/>商品已成功添加到购物车</p>
            
          </Modal>
        </div>
        <Footerzhoubian />
      </div>
    )
  }
}

export default Com
