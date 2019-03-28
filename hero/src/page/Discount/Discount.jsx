import React, { Component } from 'react'
import './style.scss';
import { Input, Pagination } from 'antd';
import {Link} from 'react-router-dom'
import axios from 'axios';
class Com extends Component {
  constructor (props) {
    super(props);
    this.state = {
      list: [],
      pageCode: 1,
      goodsday: '',
      usersName:'你未登录，请登录',
      goodshour: '',
      goodsmin: '',
      goodssec: ''
    }
    this.onChanged = this.onChanged.bind(this)
  }
  timerStart1 = (gotime) =>  {
    this.timeout = setInterval(() => this.record1(gotime), 1000);
  }
  record1 = (gotime) => {
    var nowtime = new Date();
        var balance = (gotime.getTime() - nowtime.getTime())/1000;
        var goodday = parseInt(balance/3600/24);
        var goodhour = parseInt((balance-goodday*3600*24)/3600);
        var goodmin = parseInt((balance-goodday*3600*24-goodhour*3600)/60);
        var goodsec = parseInt((balance-goodday*3600*24-goodhour*3600-goodmin*60));
        goodsec = goodsec >= 10 ? goodsec : '0'+goodsec
        this.setState({
            goodsday: goodday,
            goodshour: goodhour,
            goodsmin: goodmin,
            goodssec: goodsec
        })
  }

  componentDidMount () {
        axios.get('/api/hero?pageCode='+this.state.pagecode+'&pageNumber=12')
          .then(data => {       
            this.setState({
              list:data.data.data           
            })
            // console.log(this.state.list)
          })
          .catch(err => {           
          })
        // api.requestData(this.state.pageCode).then(data => {
        //   this.setState({
        //     list:data
        //   })
        //   console.log(this.state.list)
          
        // })
          var gotime =new Date("2019-03-15 23:59:59");
          this.timerStart1(gotime);  
          var user = localStorage.getItem("gameName")
        
        if (user) {
          this.setState({
            usersName: user
          })
        }   
    }
    
   onChanged (pageCode) {
    //  console.log(pageCode)
     axios.get('/api/hero?pageCode='+pageCode+'&pageNumber=12')
          .then(data => {       
            this.setState({
              list:data.data.data           
            })
            // console.log(this.state.list)
          })
          .catch(err => {           
          })
    
  }

  render () {
    const Search = Input.Search;
    
    return (
      <div className="geren">
      <div className="a_top">
        <div className="margin">
        <div className="a_top-l">
            <a>手机版</a>
            <span>|</span>
            <a>游戏币交易</a>
            <span>|</span>
            <a>Q币充值</a>
            <span>|</span>
            <a>星悦游戏家</a>
        </div>
        <div className="a_top-r">
            <Link to='/userapp/login'>{this.state.usersName}</Link>
            <span>|</span>
            <Link to='/users'>我的订单</Link>
            <span>|</span>
            <Link to='/users'>个人中心</Link>
            <span>|</span>
            <a>官方论坛</a>
            <span>|</span>
            <a>帮组中心</a>
            <span>|</span>
            <a>游戏论坛</a>
         </div>
        </div>
        </div>
        <div className="daoju margin"> 
          <div className="a_left">       
          </div>
          <div className="a_center">
          <Search
            placeholder="选择游戏搜索道具"
            onSearch={value => console.log(value)}
            enterButton
          />
          </div>
          <div className="a_right">
           <img src="" alt=""/>
          </div>
        </div>
        <div className="classification">
          <ul className="margin" style={{height:"54px"}}>
            <li>所有游戏分类</li>
            <li><Link to='/'>首页</Link></li>
            <li><Link to='/userapp/activity'>活动中心</Link></li>
            <li>聚成品</li>
            <li>所有游戏分类</li>
            <li>手游中心</li>
            <li>聚豆商城</li>
            <li><Link to='/users'>个人中心</Link></li>
            <li><Link to='/cart'>购物车</Link></li>
          </ul>
        </div>
        <div className="cheng">
          <p className="margin">道具城 >活动列表</p>
        </div>
        <div className="cuisheng margin">
          <div className="lol">
           <h2>英雄联盟</h2>
           <p>《英雄联盟》（简称lol）是由美国Riot Games开发，腾讯游戏运营的英雄对战网游。《英雄联盟》除了即时战略、团队作战外，还拥有特色的英雄、自动匹配的战网平台，包括天赋树、召唤师系统、符文等元素。</p>
          </div>
        </div>
        <div className="yuhu margin">
         <div className="paixu"><p>默认排序</p><p className="shijian"> 按时间排序</p></div>
           <ul>  
             {
               this.state.list.map((item,index) =>{
                 return(
                  <li key={index}>
                   <div className="a_tupian">
                     <Link to={'/detail/' + item.hero.heroId}><img src={ item.hero.heroImg } alt=''/></Link>
                   </div>
                   <div className="a_shuju">
                    <p>[英雄联盟]{item.hero.heroName}</p>
                     <p className="dianjuan">{item.hero.heroPrice} 点券</p>
                     <p>剩余时间: {this.state.goodsday}天{this.state.goodshour}时{this.state.goodsmin}分{this.state.goodssec}秒</p>
                     <a className="btn_2">立即抢购</a>
                   </div>
                 </li>
                 )
               })
             } 
             
           </ul>
           
        </div>
        <Pagination showQuickJumper  defaultCurrent={1} total={90}  onChange={this.onChanged} />
        <div className="a_bottom">
                    <div className='a_bottom_content margin'>
                        <ul>
                            <li>
                                <p> <span className='iconfont icon-yonghu'></span>我是新手</p>
                                <p>什么是道聚城</p>
                                <p>如何购买</p>
                                <p>如何赠送</p>
                                <p>如何获取聚豆</p>
                            </li>
                            <li><p><span className="iconfont icon-iconfontwenhao"></span>个人中心</p>
                                <p>发货时间</p>
                                <p>如何领取</p>
                                <p>补发规则</p>
                                <p>Vip价定义</p>
                                <p>道具状态定义</p></li>
                            <li><p> <span className="iconfont icon-qian"></span>支付方式</p>
                                <p>支付方式</p>
                                <p>购物点支付</p>
                                <p>如何充值</p>
                                </li>
                            <li><p><span className='iconfont icon-qq-copy'></span>腾讯在线服务</p>
                                <p>腾讯官方在线客服</p>
                                </li>
                        </ul>
                        <div className="erwei">
                            <ul>
                                <li><img src="//js01.daoju.qq.com/common/images/mall/zsdjc.png" alt=""/>
                                <p>掌上道聚城</p></li>
                                <li><img src="//js01.daoju.qq.com/common/images/mall/wechatdjc.png" alt=""/>
                                <p>道聚城公众号</p></li>
                            </ul>
                        </div>
                    </div>
                    <div className='a_footer_footer'>
                    <div className="a_title"><p>腾讯互动娱乐 | 服务条款| 腾讯游戏隐私保护指引 | 广告服务 | 腾讯游戏招聘 | 腾讯游戏客服 | 游戏地图 | 成长守护平台 | 商务合作 | 网站导航</p>
                    <p>COPYRIGHT © 1998 – 2019 TENCENT. ALL RIGHTS RESERVED.</p>
                    <p>腾讯公司 版权所有</p>
                    </div>
                    </div>
                </div>
        </div> 
            
    )
  }
}

export default Com
