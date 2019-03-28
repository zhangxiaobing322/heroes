import React, { Component } from 'react'
import './style.scss';
import { Input, Pagination } from 'antd';
import {Link} from 'react-router-dom'
import api from '@/api/activity';
class Com extends Component {
  constructor (props) {
    super(props);
    this.state = {
      list: [],
      usersName:'你未登录，请登录',
      pageCode: 1
    }
    this.onChanged = this.onChanged.bind(this)
  }
  componentDidMount () {
    api.requestData(this.state.pageCode).then(data => {
      this.setState({
        list:data
      })
    })
    var user = localStorage.getItem("gameName")
        
    if (user) {
      this.setState({
        usersName: user
      })
    } 
   } 
   onChanged (pageNumber) {
    //  console.log(pageNumber)
    api.requestData(pageNumber).then(data => {
      this.setState({
        list:data
      })
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
            <li className="hong"><Link to='/userapp/activity'>活动中心</Link></li>
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
          <div className="a_lol">
           <h2>英雄联盟</h2>
           <p>《英雄联盟》（简称lol）是由美国Riot Games开发，腾讯游戏运营的英雄对战网游。《英雄联盟》除了即时战略、团队作战外，还拥有特色的英雄、自动匹配的战网平台，包括天赋树、召唤师系统、符文等元素。</p>
          </div>
        </div>
        <div className="xiaobing margin">
         <div className="paixu"><p>默认排序</p><p className="shijian"> 按时间排序</p></div>
           <ul>  
             {
               this.state.list.map((item,index) =>{
                 return(
                  <li key={item.activeId}>
                  <img src={ item.activeImg } alt=''/>
                  <p className="a_biaoti">{ item.activeName }</p>
                  <div>
                    <p>活动时间：{item.activeBegTime} ~~ {item.activeEndTime}</p>
                    <p><svg className="icon" style={{width: '1em',height: '1em',verticalAlign: 'middle',fill: 'currentColor',overflow: 'hidden'}} viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2109"><path d="M828.0832 345.856a189.9776 189.9776 0 0 0-50.2528-6.1184l-59.8016-0.2304c6.7328-53.76 8.3712-115.84 8.3712-163.4816A150.5792 150.5792 0 0 0 576 25.6a150.912 150.912 0 0 0-147.328 120.1408 38.4 38.4 0 1 0 75.2384 15.4368A73.7792 73.7792 0 0 1 576 102.4a73.7024 73.7024 0 0 1 73.6 73.6c0 47.872-1.8688 136.6272-14.3104 193.4848l-10.1632 46.4128 152.5504 0.6144c11.904 0 21.6064 1.1008 30.5152 3.5072a118.5792 118.5792 0 0 1 83.7632 145.024c-16.6912 62.2336-106.5216 246.1952-117.8368 268.5696a74.1888 74.1888 0 0 1-60.8256 36.3776h-0.2048c-11.2128 0.2048-146.816 0.3584-236.288 0.4352H179.2c-28.2368 0-51.2-22.9632-51.2-51.2V512c0-29.568 26.0608-58.5728 52.608-58.5728h60.0064c109.0048 2.8928 185.088-42.1376 233.0112-135.6544a38.4 38.4 0 0 0-68.352-35.0208c-34.56 67.4304-83.0464 95.7952-163.8656 93.8752H180.608C111.6672 376.6272 51.2 439.8848 51.2 512v307.2c0 70.5792 57.4208 128 128 128h297.6c182.0416-0.1024 226.432-0.128 239.616-0.6656v0.1536c51.2-2.0992 98.7904-30.72 124.0576-74.4704 0.896-1.536 104.7296-209.3568 125.6192-287.3088 27.904-103.936-34.048-211.1744-138.0096-239.0528z" fill="#223D60" p-id="2110"></path><path d="M282.3936 529.4848v256a25.6 25.6 0 0 0 51.2 0v-256a25.6 25.6 0 0 0-51.2 0z" fill="#223D60" p-id="2111"></path></svg>{item.activePraise}</p>
                  </div>
                </li>
                 )
               })
             } 
             
           </ul>
           
        </div>
        <Pagination showQuickJumper  defaultCurrent={1} total={90}  onChange={this.onChanged} />
        <div className="a_bottom">
                    <div className='bottom_content margin'>
                        <ul>
                            <li>
                                <p>我是新手</p>
                                <p>什么是道聚城</p>
                                <p>如何购买</p>
                                <p>如何赠送</p>
                                <p>如何获取聚豆</p>
                            </li>
                            <li><p>个人中心</p>
                                <p>发货时间</p>
                                <p>如何领取</p>
                                <p>补发规则</p>
                                <p>Vip价定义</p>
                                <p>道具状态定义</p></li>
                            <li><p>支付方式</p>
                                <p>支付方式</p>
                                <p>购物点支付</p>
                                <p>如何充值</p>
                                </li>
                            <li><p>腾讯在线服务</p>
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
