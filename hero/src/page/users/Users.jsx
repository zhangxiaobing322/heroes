import React, { Component } from 'react'
import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'
import api from '@/api/users'
import { Tabs, Icon } from 'antd';
import './style.scss'
const TabPane = Tabs.TabPane;
class hd extends Component {
    constructor(props) {
        super(props)
        this.state = {
          visible: false,
          mode: 'left',
          url: "https://daoju.qq.com/becombine/mall/images/loading.gif",
          usersName:"英雄联盟",
          shopping:[],
          price:'',
          addr:[],
          addIndex:{},
          liuyan:"",
          heroCart:[{
            goodImg: '',
            goodName: '',
            goodPrice: ''
          }]
        }
    }
    
    componentDidMount () {
        this.node.scrollIntoView()
        var user = localStorage.getItem("gameName")
        if (user) {
            this.setState({
                liuyan:localStorage.getItem("beizhu"),
                usersName: user,
                price:localStorage.getItem("price"),
                shopping:JSON.parse(localStorage.getItem("shopping")) ? JSON.parse(localStorage.getItem("shopping")) : [],
                heroCart:JSON.parse(localStorage.getItem("heroCart")) ? JSON.parse(localStorage.getItem("heroCart")) : [],
                url: "http://img3.a0bi.com/upload/ttq/20150801/1438401445712.jpg"
            })
            
            api.requestUsers(localStorage.getItem("qq")).then(data => {
                
                this.setState({
                    addr:data[0].add ,
                    addIndex:data[0].add[0] ? data[0].add[0] : {user:'',tel:'',shi:'',address:''}
                }) 
            })
        }
    }

    
    render () {
        const { mode,size } = this.state;
        const IconFont = Icon.createFromIconfontCN({
            scriptUrl: '//at.alicdn.com/t/font_1052067_htrz5ggc4jk.js',
          });
        return (
            <div ref={node => this.node = node}>
            <Header />
            <div className='bd-color'>
                    <div className='margin'>
                        <div className='geren_top' style={{height:"50px", font:"600 16px/50px ''"}}>道聚城 > 个人中心</div>
                    </div>
                    <div className='margin'>
                      <div className='c-left'>
                        <Tabs
                        defaultActiveKey="1"
                        tabPosition={mode}
                        size={size}
                        className='icons-list'
                        >
                        <TabPane tab={<span className='kkk'><IconFont type="icon-shouye2" />个人中心首页</span>} key="1">
                            <div className='c-right'>
                                <div className='c-r-1'>
                                    <img src={this.state.url} alt="" srcSet=""/>
                                    <div className='abox'> 
                                        <p className="qq_intro">
                                            <strong id="login_qq">{this.state.usersName}</strong>
                                            <span title="(召唤师)">(召唤师)</span>
                                            <span className="gray"></span>
                                        </p>
                                        <div className="info">
                                            <p className="fl">
                                                <span className='sp2'></span> 非心悦会员
                                            </p>
                                        </div>
                                        <div className="info_moblie">
                                            <p className="fl">
                                                <span><i className="ico_mobile"></i>未绑定</span>
                                            </p>
                                        </div>
                                    </div> 
                                    <div className='bbox'> 
                                        <p>成长值<strong>1</strong>
                                            <span>&nbsp;&nbsp;&nbsp;距离升级还需<strong>&nbsp;&nbsp;49999</strong>&nbsp;&nbsp;&nbsp;成长值</span>
                                        </p>
                                        <div className='xian'></div>
                                        <div id="growLadder" className="member">
                                            <span className="novip">非会员</span>
                                            <span className="vip0">【10000-49999】</span>
                                            <span className="vip1">心悦VIP1</span>
                                            <span className="vip2">心悦VIP2</span> 
                                            <span className="vip3">心悦VIP3</span>
                                        </div>
                                    </div>
                                </div>
                            <div className="person">
                                <p className=''>个人账户：
                                    <span title="聚豆"><i className="rank judou"></i><strong id="mycoin">0</strong></span>
                                </p>
                            </div>
                            <div className='c-r-2'>
                                <div className='games1'>
                                    <div className='games1-1'>最近登录的游戏</div>
                                    <div className='games1-2'>暂无</div>
                                </div>
                                <div className='games2'>
                                    <div className='games2-1'>本月累计消费</div>
                                    <div className='games2-2'>暂无</div>
                                </div>
                            </div>
                            <div className='c-r-3'>
                                <div className='benyv'>
                                    <span className='benyv-1'>本月道聚城为你省了：</span>
                                    <span className='benyv-2'>0</span>
                                    <span className='benyv-3'>Q币</span>
                                </div>
                            </div>
                            <div className='c-r-4'>
                                <div className='myte'>
                                    <div className='myte-left'>我的特权</div>
                                    <div className='myte-right'>心悦游戏家</div>
                                </div>
                                <ul className='myte2'>
                                    <li><i className='i11'></i><p>专享优惠券</p></li>
                                    <li><i className='i21'></i><p>首次消费礼</p></li>
                                    <li><i className='i31'></i><p>道具逢十礼</p></li>
                                    <li><i className='i41'></i><p>消费成长礼</p></li>
                                </ul>
                            </div>
                            <div className='c-r-4'>
                                <div className='myte'>
                                    <div className='myte-left'>我的任务</div>
                                </div>
                                <ul className='myte2'>
                                    <li className='teee'><i className='ibb ibc1'></i><p className='pte'>每日签到</p></li>
                                    <li className='teee'><i className='ibb ibc2'></i><p className='pte'>完善资料</p></li>
                                    <li className='teee'><i className='ibb ibc3'></i><p className='pte'>下载APP</p></li>
                                    <li className='teee'><i className='ibb ibc4'></i><p className='pte'>每日登录APP</p></li>
                                    <li className='teee'><i className='ibb ibc5'></i><p className='pte'>APP首笔消费</p></li>
                                </ul>
                            </div>
                            <div className='c-r-4'>
                                <div className='myte'>
                                    <div className='myte-left'>猜你喜欢</div>
                                </div>
                                <ul className='myte2'>
                                    <li className='teee tetuu'><img src="//ossweb-img.qq.com/images/daoju/dbm/lol/boosts_10.jpg" alt=""/></li>
                                    <li className='teee tetuu'><img src="//ossweb-img.qq.com/images/daoju/dbm/lol/boosts_1.jpg" alt=""/></li>
                                    <li className='teee tetuu'><img src="//ossweb-img.qq.com/images/daoju/dbm/lol/103001.jpg" alt=""/></li>
                                    <li className='teee tetuu'><img src="//ossweb-img.qq.com/images/daoju/wx/lol/zhandijijiasikana190.jpg" alt=""/></li>
                                    <li className='teee tetuu'><img src="//ossweb-img.qq.com/images/daoju/dbm/lol/658.jpg" alt=""/></li>
                                </ul>
                            </div>
                            <div className='c-r-6'></div>
                            <div className='c-r-7'></div>
                            <div className='c-r-8'></div>
                        </div>
                        </TabPane>
                        <TabPane tab={<span className='kkk'><IconFont type="icon-huangguan" />我的特权</span>} key="2">
                        <div className='c-right'>
                                <div className='c-r-1'>
                                    <img src="http://img3.a0bi.com/upload/ttq/20150801/1438401445712.jpg" alt="" srcset=""/>
                                    <div className='abox'> 
                                        <p className="qq_intro">
                                            <strong id="login_qq">{this.state.usersName}</strong>
                                            <span title="(召唤师)">(召唤师)</span>
                                            <span className="gray"></span>
                                        </p>
                                        <div className="info">
                                            <p className="fl">
                                                <span className='sp2'></span> 非心悦会员
                                            </p>
                                        </div>
                                        <div className="info_moblie">
                                            <p className="fl">
                                                <span><i className="ico_mobile"></i>未绑定</span>
                                            </p>
                                        </div>
                                    </div> 
                                    <div className='bbox'> 
                                        <p>成长值<strong>1</strong>
                                            <span>&nbsp;&nbsp;&nbsp;距离升级还需<strong>&nbsp;&nbsp;49999</strong>&nbsp;&nbsp;&nbsp;成长值</span>
                                        </p>
                                        <div className='xian'></div>
                                        <div id="growLadder" className="member">
                                            <span className="novip">非会员</span>
                                            <span className="vip0">【10000-49999】</span>
                                            <span className="vip1">心悦VIP1</span>
                                            <span className="vip2">心悦VIP2</span> 
                                            <span className="vip3">心悦VIP3</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="person">
                                    <p className='p3'>个人账户：
                                        <span title="聚豆"><i className="rank judou"></i><strong id="mycoin">0</strong></span>
                                    </p>
                                </div>
                                <div className='c-r-4'>
                                <div className='myte'>
                                    <div className='myte-left'>我的特权</div>
                                    <div className='myte-right'>心悦游戏家</div>
                                </div>
                                <ul className='myte2'>
                                    <li><i className='i11'></i><p>专享优惠券</p></li>
                                    <li><i className='i21'></i><p>首次消费礼</p></li>
                                    <li><i className='i31'></i><p>道具逢十礼</p></li>
                                    <li><i className='i41'></i><p>消费成长礼</p></li>
                                </ul>
                            </div>
                            <div className='c-r-4'>
                                <div className='myte'>
                                    <div className='myte-left'>我的任务</div>
                                </div>
                                <ul className='myte2'>
                                    <li className='teee'><i className='ibb ibc1'></i><p className='pte'>每日签到</p></li>
                                    <li className='teee'><i className='ibb ibc2'></i><p className='pte'>完善资料</p></li>
                                    <li className='teee'><i className='ibb ibc3'></i><p className='pte'>下载APP</p></li>
                                    <li className='teee'><i className='ibb ibc4'></i><p className='pte'>每日登录APP</p></li>
                                    <li className='teee'><i className='ibb ibc5'></i><p className='pte'>APP首笔消费</p></li>
                                </ul>
                            </div>
                            <div className='c-r-4'>
                                <div className='myte'>
                                    <div className='myte-left'>猜你喜欢</div>
                                </div>
                                <ul className='myte2'>
                                    <li className='teee tetuu'><img src="//ossweb-img.qq.com/images/daoju/dbm/lol/boosts_10.jpg" alt="" /></li>
                                    <li className='teee tetuu'><img src="//ossweb-img.qq.com/images/daoju/dbm/lol/boosts_1.jpg" alt=""/></li>
                                    <li className='teee tetuu'><img src="//ossweb-img.qq.com/images/daoju/dbm/lol/103001.jpg" alt=""/></li>
                                    <li className='teee tetuu'><img src="//ossweb-img.qq.com/images/daoju/wx/lol/zhandijijiasikana190.jpg" alt=""/></li>
                                    <li className='teee tetuu'><img src="//ossweb-img.qq.com/images/daoju/dbm/lol/658.jpg" alt=""/></li>
                                </ul>
                            </div>
                        </div>
                        </TabPane>
                        <TabPane tab={<span className='kkk'><IconFont type="icon-5" />我的任务</span>} key="3">
                        <div className='c-r-4'>
                                <div className='myte'>
                                    <div className='myte-left'>我的任务</div>
                                </div>
                                <ul className='myte2'>
                                    <li className='teee'><i className='ibb ibc1'></i><p className='pte'>每日签到</p></li>
                                    <li className='teee'><i className='ibb ibc2'></i><p className='pte'>完善资料</p></li>
                                    <li className='teee'><i className='ibb ibc3'></i><p className='pte'>下载APP</p></li>
                                    <li className='teee'><i className='ibb ibc4'></i><p className='pte'>每日登录APP</p></li>
                                    <li className='teee'><i className='ibb ibc5'></i><p className='pte'>APP首笔消费</p></li>
                                </ul>
                            </div>
                            <div className='c-r-4'>
                                <div className='myte'>
                                    <div className='myte-left'>猜你喜欢</div>
                                </div>
                                <ul className='myte2'>
                                    <li className='teee tetuu'><img src="//ossweb-img.qq.com/images/daoju/dbm/lol/boosts_10.jpg" alt=""/></li>
                                    <li className='teee tetuu'><img src="//ossweb-img.qq.com/images/daoju/dbm/lol/boosts_1.jpg" alt=""/></li>
                                    <li className='teee tetuu'><img src="//ossweb-img.qq.com/images/daoju/dbm/lol/103001.jpg" alt=""/></li>
                                    <li className='teee tetuu'><img src="//ossweb-img.qq.com/images/daoju/wx/lol/zhandijijiasikana190.jpg" alt=""/></li>
                                    <li className='teee tetuu'><img src="//ossweb-img.qq.com/images/daoju/dbm/lol/658.jpg" alt=""/></li>
                                </ul>
                            </div>
                        </TabPane>
                        <TabPane tab={<span className='kkk'><IconFont type="icon-wodedingdan" />我的订单</span>} key="4">
                        <h3 style={{font:"20px/50px ''",background:"#fff", padding:"20px"}}>我的订单</h3>
                        {this.state.heroCart.map((item,index) => (
                            <ul className="orderList" style={{display:"flex", background:"#fff"}} key={index}>
                            <li style={{ flex:"6",display:"flex"}}>
                            <div>
                                <img src={item.goodImg} alt=""/>
                            </div>
                            <div style={{width:"40%"}}>{item.goodName}</div>
                            <div style={{margin:"0 0 0 80px"}}><p style={{height:"30px"}}>类型：游戏道具</p></div>
                            </li>
                            <li style={{ flex:"2"}}>单价{parseInt(item.goodPrice/100).toFixed(2)}Q币</li>
                            <li style={{ flex:"1"}}>1个</li>
                            <li style={{ flex:"1"}}>期限: 永久</li>
                        </ul>
                        ))}
                        </TabPane>
                        <TabPane tab={<span className='kkk'><IconFont type="icon-baitiao" />我的道聚城白条</span>} key="5"></TabPane>
                        <TabPane tab={<span className='kkk'><IconFont type="icon-zhoubianpeitao" />我的周边订单</span>} key="6">
                        <h3 style={{font:"20px/50px ''",background:"#fff", padding:"20px"}}>我的周边订单</h3>
                        {this.state.shopping.map((item,index) => (
                            <ul className="orderList" style={{display:"flex", background:"#fff"}} key={index}>
                            <li style={{ flex:"7",display:"flex"}}>
                            <div style={{border:"1px #e5e5e5 solid"}}>
                                <img src={item.goodImg} alt=""/>
                            </div>
                            <div style={{width:"40%"}}>{item.goodName}</div>
                            <div style={{margin:"0 0 0 80px"}}><p style={{height:"30px"}}>颜色：随机</p><p style={{height:"30px"}}>规格：默认</p></div>
                            </li>
                            <li style={{ flex:"1"}}>单价{item.goodPrice/100}元</li>
                            <li style={{ flex:"1"}}>{item.num}个</li>
                            <li style={{ flex:"1"}}>总价{item.goodPrice*item.num/100}元</li>
                        </ul>
                        ))}
                         <div className="zong">
                           <p>状态：已付款</p>
                           <p>实付:<span style={{color:"red"}}>   {this.state.price}元</span> </p>
                           <p>留言：{this.state.liuyan}</p>
                           <p>老板：{this.state.addIndex.user}</p>
                           <p>手机：{this.state.addIndex.tel}</p>
                           <p>省市：{this.state.addIndex.shi}</p>
                           <p>详址：{this.state.addIndex.address}</p>
                         </div>
                        </TabPane>
                        <TabPane tab={<span className='kkk'><IconFont type="icon-zhoubianxunwuxuanzhong" />我的收货地址</span>} key="7">
                          <div className="address">
                          <div className="addre"><h3>我的地址</h3></div>
                          {
                              this.state.addr.map((item, index) => (
                                  <div key={index}  className="addlist">
                                    <p>收件主人：{item.user}</p>
                                    <p>联系号码：{item.tel}</p>
                                    <p>收件城市：{item.shi}</p>
                                    <p>收件详址：{item.address}</p>
                                  </div>
                                  
                              ))
                          }
                          </div>
                          
                        </TabPane>
                        <TabPane tab={<span className='kkk'><IconFont type="icon-icongouwudianji" />我的购物点</span>} key="8"></TabPane>
                        <TabPane tab={<span className='kkk'><IconFont type="icon-ziyuan" />我的优惠券</span>} key="9"></TabPane>
                        <TabPane tab={<span className='kkk'><IconFont type="icon-dou" />我的聚豆</span>} key="10"></TabPane>
                        <TabPane tab={<span className='kkk'><IconFont type="icon-xiaoxi" />我的消息</span>} key="11"></TabPane>
                        <TabPane tab={<span className='kkk'><IconFont type="icon-xing" />我的关注</span>} key="12"></TabPane>
                        <TabPane tab={<span className='kkk'><IconFont type="icon-icon" />我的功能性道具</span>} key="13"></TabPane>
                        <TabPane tab={<span className='kkk'><IconFont type="icon-meilileshan" />领取魅力值</span>} key="14"></TabPane>
                        <TabPane tab={<span className='kkk'><IconFont type="icon-weibiaoti205" />我的票务</span>} key="15"></TabPane>
                        </Tabs>
                      </div>
                     
                        
                    </div>
            </div>
            <Footer />
            </div>
        )
    }
}

export default hd
