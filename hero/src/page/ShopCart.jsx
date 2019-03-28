import React, { Component } from 'react'
import Top from '@/components/zhoubian/top/Top'
import Footerzhoubian from '@/components/zhoubian/footer/Footerzhoubian'
import api from '@/api/shopDetail';
import wan from '@/api/zhoubian';
import Wanou from '@/components/zhoubian/wanou/Wanou'
import '@/components/zhoubian/cart/style.scss'
import { Modal, Icon } from 'antd'
class Com extends Component {
  constructor (props) {
    super(props);
    this.state = {
      visible: false,
      list:[],
      arr:[],
      cartNum:0,
      sum_price:0
    }
  }
  handleOk = (e) => {
    
    this.setState({
      visible: false,
    });
    this.props.history.push('/lolshop/kindHand')
  }
  handleCancel = (e) => {
    this.props.history.push('/lolshop/zhoubian')
    this.setState({
      visible: false,
    });
  }
  getInputText=(e,i)=>{
    this.setState({
      arr:this.state.arr.map((ele,index)=>{
          if(index===i){
              ele.num=e.target.value
              return ele
          }else {
              return ele
          }
      })
    })
    this.SumPrice()
  }
  //加
  augment=(e,i)=>{
    this.setState({
      arr:this.state.arr.map((ele,index)=>{
          if(index===i){
            var id = ele.goodId
            ele.num=ele.num*1+1
            api.requestNum({"qq":localStorage.getItem("qq"),"goodId":id,"num":ele.num*1})
            return ele
          }else {
              return ele
          }
      })
    })
    this.SumPrice()
  }
  //减
  reduce=(e,i)=> {
    this.setState({
      arr:this.state.arr.map((ele,index)=>{
          if(index===i){
            if (ele.num>1) {
              ele.num=ele.num*1-1
            var id = ele.goodId
            api.requestNum({"qq":localStorage.getItem("qq"),"goodId":id,"num":ele.num*1})
            return ele
            } else {
              ele.num = 1
              return ele
            }            
          }else {
              return ele
          }
      })
    })
    this.SumPrice()
  }
  //删除
  del=(e,i)=> {
    this.setState({
      arr:this.state.arr.filter((ele,index)=>{
          if(index!==i){           
            return true
          }else {
            var sk = this.state.cartNum
            sk-=1
            if(sk === 0) {
              this.setState({
                visible: true
              })
            }
            var id = ele.goodId
            api.requestremove({"qq":localStorage.getItem("qq"),"goodId":id})
            this.setState({
              cartNum:this.state.cartNum-1
            })
            return false
          }
      })
    })
    setTimeout(()=>{
      this.SumPrice()
    },1)
  }
  CheckAllorNoAll=(e,i)=>{
    this.setState({
      arr:this.state.arr.map((ele,index)=>{
        if(index===i){
            ele.checked=!ele.checked
        }
        return ele
      })
    })
    var flag=this.state.arr.map((ele,index)=>{
      if(ele.checked===false){
          return false
      }else {
          return true
      }
    })
    if(flag===true){
      this.refs.checkALL.checked=true
    }else {
      this.refs.checkALL.checked=false
    }
    this.SumPrice()
  }
  CheckedAll=(e)=>{
    if(e.target.checked===true){
      this.setState({
        arr:this.state.arr.map((ele,index)=>{
            ele.checked=true
            return ele
        })
      })
    }else  if(e.target.checked===false){
      this.setState({
        arr:this.state.arr.map((ele,index)=>{
            ele.checked=false
            return ele
        })
      })
    }
    this.SumPrice()
  }
  SumPrice=()=>{
    var sum=0
    this.state.arr.forEach((ele,index)=>{
        if(ele.checked===true){
         sum+=ele.num*ele.goodPrice/100
        }
    })
    this.setState({
        sum_price:sum
    })
}
//结算传值
  SettleAccounts=()=>{
    var shopping=[]
    this.state.arr.forEach((ele,index)=>{
      if(ele.checked===true){
          shopping.push(ele)
      }
    })
    window.localStorage.setItem("shopping",JSON.stringify(shopping))
    window.localStorage.setItem("price",JSON.stringify(this.state.sum_price))
    this.props.history.push('/lolshop/order')
  }

  componentDidMount () {
    this.node.scrollIntoView()
    var user = localStorage.getItem("gameName")
    if (user) {
      api.requestCart(localStorage.getItem("qq")).then(data => {
      this.setState({
        arr:data[0].cart1,
        cartNum:data[0].cart1.length
      })
    })
    }
    wan.requestWanouData(1, 4).then(data => {
      this.setState({
        list: data.data
      })
    })
  }
  
  render () { 
    return (
      <div className="box" ref={node => this.node = node}>
        <Modal
            title="购物车提醒"
            okText="确认"
            cancelText="回首页"
            okType="danger"
            style={{ top: 200 }}
            visible={this.state.visible}
            onOk={this.handleOk}
            onCancel={this.handleCancel}
          >
            <p className="p" style={{height:"100px",font:" 700 20px/100px ''", color:"red"}}><Icon type="check" width="50px"/>都被你删光了，赶紧去添加吧！</p>
            
          </Modal>
        <Top />
        <div className="content">
          <div className="main margin_shop" id="top" style={{padding:'40px 0 30px 0', margin:'30px 8% 30px 8%'}}>
            <div className="cartgoods">
              <ul className="cartTop">
                <li style={{ flex:"4"}}>商品信息</li>
                <li style={{ flex:"1"}}>单价(元)</li>
                <li style={{ flex:"1"}}>金额(元)</li>
                <li style={{ flex:"1"}}>数量</li>
                <li style={{ flex:"1"}}>操作</li>
              </ul>
              <div className="App" style={{width:"100%"}}>
              <div className="G_Checkbox">
                <input type="checkbox" ref="checkALL" onChange={(e)=>{this.CheckedAll(e)}}/>    英雄联盟供应商：合泰文化
              </div>
               <div className='section'>
                {this.state.arr.map((ele,index)=>{
                return(
                  <div className="G_list" key={index} style={{display:"flex", background:"#fff",padding:"10px 0", margin:"0 0 20px 0"}}>
                    <div className="G_Checked" style={{width:"7%"}}>
                      <input type="checkbox" checked={ele.checked} onChange={(e)=>{this.CheckAllorNoAll(e,index)}}/>
                    </div>
                    <div className="G_img" style={{border:"1px solid #e5e5e5"}}>
                      <img src={ele.goodImg}alt="" style={{width:"100px"}}/>  
                    </div>
                    <div className="goodName" style={{width:"26%"}}><p>{ele.goodName}</p></div>
                    <div style={{width:"8%",padding:"2% 0 0 0"}}><p>颜色：常规</p><p>规格：默认</p></div>
                    <div className="G_Content" style={{width:"14%"}}>
                    <div className="G_text" >
                    <p>
                        {ele.goodPrice/100}
                        <span>元</span>
                    </p>
                    </div>
                  </div>
                  <div className="G_Content" style={{width:"10%"}}>
                    <div className="G_text" >
                    <p>
                    {ele.num*ele.goodPrice/100}
                    <span>元</span>
                    </p>
                    </div>
                  </div>
                  <div className="G_selected" style={{width:"19%",padding:"3% 0 0 4%"}}><button style={{width:"25px"}} onClick={(e)=>{this.augment(e,index)}}>+</button>
                    <input className="put" type="text" style={{width:"40px"}} ref="nums" value={ele.num}onChange={(e)=>{this.getInputText(e,index)}}/>
                    <button style={{width:"25px"}} onClick={(e)=>{this.reduce(e,index)}}>-</button>
                    </div>
                  <div className="G_del" style={{padding:"3% 0 0 0"}}>
                    <button onClick={(e)=>{
                      this.del(e,index)}}>删除</button>
                    </div>
                  </div>
                    )
                  })
                }
              </div>
            <div className="G_footer" style={{margin:"0 0 0 80%", display:"flex"}}>
              <div className="G_Price" style={{margin:"0 10px", font:" 600 16px/30px ''"}}>
                合计：{this.state.sum_price} 元
              </div>
              <div className="G_Button">
                <button style={{background:"red",color:"#fff",width:"100px",height:"30px"}} onClick={()=>{this.SettleAccounts()}}>结算</button>
              </div>
            </div>
          </div>
          </div>
          <div className="re"><h3>热门推荐</h3></div>
          <Wanou list={this.state.list}/>
          </div>
        </div>
        <Footerzhoubian />
      </div>
    )
  }

}

export default Com
