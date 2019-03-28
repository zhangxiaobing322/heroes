import React, { Component } from 'react'
import './style.scss';
import { Input } from 'antd';
import {Link} from 'react-router-dom'
import axios from 'axios';
class Com extends Component {
  constructor (props) {
    super(props);
    this.state = {
      list: [],
      usersName:'你未登录，请登录',
      list1:[]
    }
  }

  componentDidMount () {
      axios.get('/api/hero?pageCode=3&pageNumber=7')
      .then(data=>{
        this.setState({
          list:data.data.data   
        })
      })
      .catch(err =>{        
      })
      axios.get('/api/hero?pageCode=4&pageNumber=7')
      .then(data=>{
        this.setState({
          list1:data.data.data   
        })
      })
      .catch(err =>{        
      })

      var user = localStorage.getItem("gameName")
        
        if (user) {
          this.setState({
            usersName: user
          })
        } 
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
           <img src="https://js01.daoju.qq.com/common/images/mall/codeznq.png" alt=""/>
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
        <div className="g_gonggao margin">
           <div className="g_remai">
             <div className="g_biaoti">
               热卖推荐
             </div>
             <ul>
               {
                 this.state.list.map((item,index) => {
                   return(
                     <li key={index}>
                       <div className="g_left">
                         <img src={item.hero.heroImg} alt='' />
                       </div>
                       <div className="g_right">
                          <span clssName="g_lian">[英雄联盟]</span>
                          <span className="g_mingzi"> {item.hero.heroName}</span>
                          <span className="g_dianjuan"> {item.hero.heroPrice}点券</span>
                     </div>
                     </li>
                   )
                 })
               }
             </ul>
           </div>
           <div className="g_xinwen">
              <ul>
                <li><span className="g_wenben">QQ飞车道聚城商城发货问题说明</span><span className="g_riqi">2019-01-14</span></li>
                <li><span className="g_wenben">2019元旦官网恢复通知</span><span className="g_riqi">2019-01-01</span></li>
                <li><span className="g_wenben">掌上道聚城聚诚品圣诞消费回馈</span><span className="g_riqi">2018-12-11</span></li>
                <li><span className="g_wenben">火箭联盟突燃测试资格开启</span><span className="g_riqi">2018-11-07</span></li>
                <li><span className="g_wenben">DNF周边商城发货公告：</span><span className="g_riqi">2018-08-28</span></li>
                <li><span className="g_wenben">7月水晶石开启 邀你清凉一夏</span><span className="g_riqi">2018-07-20</span></li>
                <li><span className="g_wenben">QQ华夏道聚城app强势上架</span><span className="g_riqi">2018-05-09</span></li>
                <li><span className="g_wenben">王者荣耀新英雄新皮肤折扣上线</span><span className="g_riqi">2018-05-08</span></li>
                <li><span className="g_wenben">怪猎猪猪养成包团购开启啦！</span><span className="g_riqi">2018-05-02</span></li>
                <li><span className="g_wenben">LOL聚诚品免费抓娃娃</span><span className="g_riqi">2018-03-30</span></li>
                <li><span className="g_wenben">奇迹觉醒钻石购</span><span className="g_riqi">2019-01-01</span></li>
                <li><span className="g_wenben">CFM永久M4A1-黑龙限时抽</span><span className="g_riqi">2018-03-28</span></li>
                <li><span className="g_wenben">《我叫白小飞》定制手机壳</span><span className="g_riqi">2018-02-24</span></li>
                <li><span className="g_wenben">掌上道聚城携QQ钱包送购物补贴，最高100Q币</span><span className="g_riqi">2018-02-12</span></li>
                <li><span className="g_wenben">DNF聚豆商城：【装备品级调整箱】促销抢兑活动即将结束</span><span className="g_riqi">2018-01-24</span></li>
                <li><span className="g_wenben">DNF道具你来选，道聚城买单！</span><span className="g_riqi">2018-01-12</span></li>
                <li><span className="g_wenben">天天酷跑定制手机壳开售</span><span className="g_riqi">2017-12-28</span></li>
                <li><span className="g_wenben">冰雪节领券使用说明</span><span className="g_riqi">2017-12-15</span></li>
                <li><span className="g_wenben">穿越火线11.11任性抽</span><span className="g_riqi">2017-11-10</span></li>
                <li><span className="g_wenben">王者荣耀国庆放“价”</span><span className="g_riqi">2017-09-29</span></li>
              </ul>
              <div className="g_lianshou"><img src="https://ossweb-img.qq.com/images/daojushop/uploads/ad/201512/20151216150958_327475.jpg" /></div>
           </div>
        </div>
        <div className="g_love margin">
          <div><span className="g_miss">猜你喜欢</span><span className="g_huan">换一批></span>
          </div>
          <ul>
          {
                 this.state.list1.map((item,index) => {
                   return(
                     <li key={index}>
                         <img src={item.hero.heroImg} alt='' />
                          <p clssName="g_lianmeng">[英雄联盟]</p>
                          <p className="g_ming"> {item.hero.heroName}</p>
                          <p className="g_dian"> {item.hero.heroPrice}点券</p>
                     </li>
                   )
                 })
               }
          </ul>
        </div>
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
