import React, { Component } from 'react'
import '@/components/users/login/style.scss'
import '@/api/users'
import { Modal, message } from 'antd'
import api from '../api/users';
class Com extends Component {
    constructor (props) {
      super(props);
      this.state = {
        visible: false,
        users:'',
        password:'',
        gameName:''
      }
    }
    users = (e) => {
      this.setState({
        users:e.target.value
      })
    }
    password = (e) => {
      this.setState({
        password:e.target.value
      })
    }
    handleOk = () => {
      if (this.state.users & this.state.password) {
        api.requestUsers(this.state.users).then(data => {
          this.setState({
            gameName:data[0].gameName
          })
        })
        api.requestLogin({"qq": this.state.users,"password":this.state.password}).then(data => {

          if (data === 1) {
            message.info('登录成功，正在跳转')
            setTimeout(() => {
              window.localStorage.setItem("gameName",this.state.gameName)
              window.localStorage.setItem("qq",this.state.users)
              this.props.history.push('/')
            },2000)  
          } else {
            message.info('账号或密码错误，请重试')
          }
        })
      } else {
        message.info('您还没有输入账户和密码')
      }      
    }
    handleCancel = () => {
      this.props.history.push('/userapp/register') 
    }
    componentDidMount () {
      setTimeout(()=> {
        this.setState({
          visible: true
        })
      },1000)
    }
    render () { 
      return (
        <div className="userbox">
          <div className="img_bg">
          <img src="http://game.gtimg.cn/images/lol/lbact/a20190307godness/bg1.jpg" alt=""/>
          </div>
          <div className="userlogo">
            <img src="http://ossweb-img.qq.com/images/lol/web201310/public/logo.png" alt=""/>
          </div>
          <div className="img_center">
            <img src="http://game.gtimg.cn/images/lol/lbact/a20190307godness/bgs1.jpg" alt=""/>
          </div>
          <div className="usercenter">
          <Modal
          okText="登录"
          cancelText="注册"
          bodyStyle={{textAlign:"center"}}
          centered
          title="QQ账号密码登录"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <p>QQ账号<input type="text" ref="text" onChange={(e)=>{this.users(e)}} style={{width:"200px",height:"30px",margin:"0 20px", border:"1px #e5e5e5 solid", background:"rgba(255,255,255.0.904)"}}/></p>
          <p>QQ密码<input type="password" ref="password" onChange={(e)=>{this.password(e)}} style={{width:"200px",height:"30px",margin:"0 20px", border:"1px #e5e5e5 solid", background:"rgba(255,255,255.0.904)"}}/></p>
        </Modal>
          </div>
        </div>
      )
    }
  
  }
  
export default Com
