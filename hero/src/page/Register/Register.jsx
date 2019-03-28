import React, { Component } from 'react'
import './style.scss';
import api from '@/api/users'
import cart from '@/api/shopDetail'
import {
  Carousel,Form, Input, Icon, Dropdown, Menu, message, Checkbox, Button, } from 'antd';
class RegistrationForm extends Component {
  constructor (props) {
    super(props);
    this.state = {
      qq:'',
      password:'',
      gameName: '',
      zhuangtai: false
    }
  }
  suiji = () => {
    this.setState({
      qq: parseInt(Math.random()*1000000000+1000000)
    })
  }

  password = (e) => {
    this.setState({
      password:e.target.value
    })
  }
  gameName = (e) => {
    this.setState({
      gameName:e.target.value
    })
    console.log(e.target.value)
  }
  checkbox = (e) => {
    console.log(this.state.gameName)
    if (e.target.checked === true) {
      this.setState({
        zhuangtai:true
      })
    } else {
      this.setState({
        zhuangtai:false
      })
    }
  }
  zhuce = () => {
    if (this.state.zhuangtai===true & this.state.password !== '' & this.state.qq !== '') {
      console.log(1)
      api.requestNewUser({"qq":this.state.qq.toString(), "password": this.state.password.toString()}).then(data => {
        if (data.data === 1) {
          cart.requesteNewCart({"qq":this.state.qq.toString()})
          message.info('注册成功，正在跳转');
          setTimeout(()=>{
            this.props.history.push('/userapp/login')
          },1000)
          
          api.requestUpdateGameName({"qq":this.state.qq.toString(),"gameName":this.state.gameName})
        } else if (data.data === 0) {
          message.info('此用户已注册');
        } else {
          message.info('系统故障，请重试');
        }
      })
    } else {
      message.info('请填写信息并勾选协议');
    }     
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  }
  
  render () {
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 8 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 },
      },
    };
    
    const menu = (
      <Menu>
        <Menu.Item>
          <a target="_blank" rel="noopener noreferrer" href="https://ssl.zc.qq.com/chs/agreement1_chs.html">《qq号码规则》</a>
        </Menu.Item>
        <Menu.Item>
          <a target="_blank" rel="noopener noreferrer" href="https://privacy.qq.com/">《隐私政策》</a>
        </Menu.Item>
        <Menu.Item>
          <a target="_blank" rel="noopener noreferrer" href="https://qzone.qq.com/web/tk.html">《qq空间服务协议》</a>
        </Menu.Item>
      </Menu>
    )
    
    
    return (
      <div className = "r_content">
         <div className="r_tupian">
           <Carousel autoplay>
            <div><h3><img src="https://4.url.cn/zc/v3/img/01-1.jpg" alt="" /></h3></div>
            <div><h3><img src="https://4.url.cn/zc/v3/img/01-2.jpg" alt="" /></h3></div>
            <div><h3><img src="https://4.url.cn/zc/v3/img/01-3.jpg" alt="" /></h3></div>
            <div><h3><img src="https://4.url.cn/zc/v3/img/01-4.jpg" alt="" /></h3></div>
          </Carousel>
         </div>
         <div className="r_margin">
         <ul>
           <li>
           <img src="http://4.url.cn/zc/v3/img/logo3.png" alt=""/>
           <a className="qq">QQ靓号</a>
           </li>
           <li>邮箱账号</li>
           <li>简体中文</li>
           <li>意见反馈</li>
         </ul>
         <h2>欢迎注册QQ</h2>
           <div className="r_top">
             <h3>每一天，乐在沟通。</h3>
             <Button style={{width:"100px",height:"40px"}} onClick = {this.suiji}>免费靓号</Button>
           </div>
           <Form {...formItemLayout} onSubmit={this.handleSubmit}>
          <Form.Item>
              <Input type="text" value = {this.state.qq} placeholder="QQ账号" />
          </Form.Item>

          <Form.Item>
              <Input type="password" ref="password" onChange={(e)=>{this.password(e)}} placeholder="密码" />
          </Form.Item>
          
          <Form.Item>
          <Input type="text" ref="text" onChange={(e)=>{this.gameName(e)}} placeholder="游戏ID" />
        </Form.Item>

        </Form>
        
        <Button type="primary" onClick = {this.zhuce}>立即注册</Button>
        <Checkbox ref="Checkbox" onChange={(e)=>{this.checkbox(e)}}>我已阅读并同意相关服务条款和隐私政策</Checkbox>
        <Dropdown overlay={menu}>
       <a className="ant-dropdown-link" href="#">
          <Icon type="down" />
       </a>
       </Dropdown>
         </div>    
      </div>
    )
  }
}
const WrappedRegistrationForm = Form.create({ name: 'register' })(RegistrationForm);


export default WrappedRegistrationForm
