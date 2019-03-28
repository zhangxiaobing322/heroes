import React, { Component } from 'react'
import { Button,Tooltip,Input } from 'antd'
// import './style.scss'

class Com extends Component {
    constructor (props) {
      super(props);
      this.state = {
        hasError: false,
        value: '',
       // hasPasswordError: false,
        passwordvalue: ''
      }
    }
    onErrorClick = () => {
      if (this.state.hasError) {
        Tooltip.info('请输入正确格式的手机号码');
      }
    }
    onPasswordErrorClick () {
      if (this.state.hasPasswordError) {
        Tooltip.info('请输入正确格式的密码');
      }
    }
    onChange (e) {
      if (e.target.value.replace(/\s/g, '').length < 11) {
        this.setState({
          hasError: true,
        });
      } else {
        this.setState({
          hasError: false,
        });
      }
      this.setState({
        value:e.target.value
      });
      console.log(this.state.value)
    }
    onPasswordChange (e) {
      if (e.target.value.replace(/\s/g, '').length < 4) {
        this.setState({
          hasPasswordError: true,
        });
      } else {
        this.setState({
          hasPasswordError: false,
        });
      }
      this.setState({
        passwordvalue:e.target.value
      });
      console.log(this.state.passwordvalue)
    }
  
    loginFn (username, password) {
      console.log(username, password)
      // api.requestData({username, password})
      //   .then(data => {
      //     console.log(data)
      //     if (data === 1) {
      //       Tooltip.success('登录成功', 1);
           
      //     } else if (data === -1) {
      //       Tooltip.info('密码错误', 1);
      //     } else if (data === 2) {
      //       Tooltip.fail('没有该用户', 1);
      //     } else {
      //       Tooltip.fail('登录失败', 1);
      //     }
      //   })
    }
    render () {
      console.log(this.state.hasError)
      console.log(this.state.hasPasswordError)
      let type = ''
      let disabled = true
      if (this.state.hasError === false && this.state.hasPasswordError === false && this.state.value.length > 0 && this.state.passwordvalue.length > 0) {
        type = 'primary';
        disabled = false
      } 
      return (
        <div className = "content">
          <div className="cha"></div>
          <h3>账号密码登录</h3>
          <p className="tips">推荐使用快速安全登录，防止盗号。</p>
          <Input
              type="phone"
              placeholder="请输入您的手机号"
              error={this.state.hasError}
              onErrorClick={this.onErrorClick}
              onChange={this.onChange.bind(this)}
              value={this.state.value}
            ></Input>
            <Input
              type="password"
              placeholder="请输入您的密码"
              error={this.state.hasPasswordError}
              onErrorClick={this.onPasswordErrorClick.bind(this)}
              onChange={this.onPasswordChange.bind(this)}
              value={this.state.passwordvalue}
            ></Input>
            <Button type={ type } disabled = { disabled } onClick = { this.loginFn.bind(this, this.state.value, this.state.passwordvalue)}>登录</Button>
            <div className="sbox">
              <span> 忘了密码？ </span>
              <span className="span2"> | </span>
              <span> 注册新帐号 </span>
              <span className="span2"> | </span>
              <span className="span3"> 意见反馈</span>
            </div>
        </div>
      )
    }
  
  }
  
export default Com
