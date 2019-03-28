import React, { Component } from 'react'
import Swiper from 'swiper/dist/js/swiper.js'
import { Row, Col, Modal, Button,message, Select  } from 'antd'
import 'swiper/dist/css/swiper.min.css'
import api from '@/api/banner'
import { Link } from 'react-router-dom'
import store from '@/store'
import './style.scss'

const Option = Select.Option;
class Com extends Component {
    constructor(props) {
        super(props)
        this.state = {
            bannerList: [],
            heroList: [],
            skinList: [],
            shouList: [],
            banList: [],
            activeList: [],
            heroinfor: [],
            shopInfor: {},
            hotInfor: {},
            cartInfor: [],
            goodsday: '',
            goodshour: '',
            goodsmin: '',
            goodssec: '',
            name: '',
            visible: false,
            visibl: false,
            visib: false,
            visi: false,
            activeIndex: 1,
            cartflag: false,
            incart2: true,
            totalNumber: 0,
            AreaName: '',
            userMoney: '',
            topMoney: null,
            AreaAll: ['艾欧尼亚  电信', '比尔吉沃特  网通', '祖安 电信', '诺克萨斯  电信', '德玛西亚 网通', '班德尔城 电信', '皮尔特沃夫 电信', '战争学院 电信', '弗雷尔卓德 网通', '巨神峰 电信', '雷瑟守备 电信', '无畏先锋 网通', '裁决之地 电信', '黑色玫瑰 电信', '暗影岛 电信', '钢铁烈阳 电信', '恕瑞玛 网通', '水晶之痕 电信']
        }
        this.onchanged = this.onchanged.bind(this)
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
        if(localStorage.getItem('gameName'))
        {
            api.requestCartData(localStorage.getItem('qq'))
        .then(data =>{
            this.setState({
                totalNumber: data.data[0].cart2.length
            })
        })
        }
        api.requestBannerData()
        .then(data => {
            store.dispatch({type: 'CHANGE_BANNERLIST', data})
            this.setState({
                bannerList: store.getState().homeStore.bannerList.data
            })
        api.requestHeroData()
        .then(data => {
            store.dispatch({type: 'CHANGE_HEROLIST', data})
            this.setState({
                heroList: store.getState().homeStore.heroList.data
            })
        })
        api.requestShouWeiData()
        .then(data => {
            this.setState({
                shouList: data.data
            })
        })
        api.requestShouBanData()
        .then(data => {
            this.setState({
                banList: data.data
            })
        })
        api.requestActiveData()
        .then(data => {
            this.setState({
                activeList: data.data
            })
        })
        let bannerList = this.state.bannerList
        new Swiper('.swiper-container', {
            autoplay: {
                delay: 3000,
                disableOnInteraction: false,
              },
            pagination: {
              el: '.swiper-pagination',
              clickable: true,
              renderBullet: function (index, className) {
                return '<span class="' + className + '">' + bannerList[index].sTitle + '</span>';
              },
            },
          });
        })
        var gotime =new Date("2019-03-14 23:59:59");
        this.timerStart1(gotime);
    }

    onchanged (e) {
        const goodname = e.target.value
        this.setState({
            name: goodname
        })
        api.requestAllData(goodname)
        .then(data => {
            this.setState({
                heroinfor:data.data
            })
        })
    }

    showModal = (e) => {
        console.log(e)
      }
    
      handleOk = (e) => {
        console.log(e);
        this.setState({
          visible: false,
        });
      }
    
      handleCancel = (e) => {
        this.setState({
          visible: false,
          incart2: true
        });
      }
      handCancel = (e) => {
          this.setState({
              visible: false,
              incart2: true
            });
            console.log(this.state.incart2);
      }
      inCart (item) {
          if(localStorage.getItem('gameName'))
          {
            this.setState({
                visible: true,
                shopInfor:{
                    goodId:item.heroId,
                    goodName:item.heroName,
                    goodImg:item.heroImg,
                    goodPrice:item.heroPrice,
                    goodDay:item.heroDay
                },
                cartflag:false
              });
              
          } else {
            message.config({
                top:100,
                duration: 2,
                maxCount: 1,
            })
              message.error('请登录!')
          }
          } 
      inCart1 (item) {
        if(localStorage.getItem('gameName'))
        {
            this.setState({
                visible: true,
                shopInfor:{
                  goodId:item.code,
                  goodName:item.name,
                  goodImg:item.pic,
                  goodPrice:item.oldPrice
                },
                cartflag:false
              });
        } else {
            message.config({
                top:100,
                duration: 2,
                maxCount: 1,
            })
              message.error('请登录!')
        }
    }
      AddCart () {
          console.log(this.state.incart2)
          api.requestCartData(localStorage.getItem('qq'))
          .then(data => {
              if(data.data[0].cart3)
              {
                  data.data[0].cart3.map((item)=>{
                      if(item.goodId === this.state.shopInfor.goodId)
                      {
                          this.setState({
                              incart2: false
                          })
                      }
                  })
              }
              if(this.state.incart2) {
                    const obj = {
                    qq:localStorage.getItem('qq'),
                    cart: {
                        goodId:this.state.shopInfor.goodId,
                        goodName:this.state.shopInfor.goodName,
                        goodImg:this.state.shopInfor.goodImg,
                        goodPrice:this.state.shopInfor.goodPrice
                    }
                }
                api.requestCartData(localStorage.getItem('qq'))
                .then(data => {
                    this.setState({
                        cartInfer: data.data[0].cart2
                    })
                    this.state.cartInfer.map((item,index)=>{
                        if(item.goodId === this.state.shopInfor.goodId) {
                            this.setState({cartflag:true})
                        }
                        return ''
                    })
                    if(this.state.cartflag) {
                    message.error('已存在此商品!')
                    } else {
                        api.requestUpdate(obj)
                        .then(data => {
                            if(data.data.data === 1) {
                            message.success('加入成功!')
                            api.requestCartData(localStorage.getItem('qq'))
                            .then(data =>{
                                this.setState({
                                    totalNumber: data.data[0].cart2.length
                                })
                            })
                            }
                        })
                    }
                })
              } else {
                  message.error('此道具已购买!')
              }
          })
        
      }

      
      openCard () {
        this.setState({
            visibl:true
        })
    }
      handedCancel = (e) => {
        this.setState({
          visibl: false,
          incart2: true
        });
      }
      equit () {
        localStorage.setItem('gameName','')
        localStorage.setItem('gameDistrict','')
        localStorage.setItem('qq','')
        this.setState({
            totalNumber: 0
        })
    }
     handleChange(e) {
       this.setState({
        AreaName:e,
       })  
      }
      onChangeArea () {
        let obj = {
            qq:localStorage.getItem('qq'),
            gameDistrict: this.state.AreaName
        }
       api.requestAreaData(obj)
       .then(data =>{
           if(data.data === 1)
           console.log(1)
       })
       localStorage.setItem('gameDistrict',this.state.AreaName)
       this.setState({
           visibl: false
       })
      }
      Balance () {
          if(localStorage.getItem('gameName')) {
            this.setState({
                visib: true
            })
          let qq = localStorage.getItem('qq')
          api.requestBalanceData(qq)
          .then(data =>{
              this.setState({
                  visib: true,
                  userMoney:data.data[0].money
              })
          })
          } else {
                message.config({
                    top:100,
                    duration: 2,
                    maxCount: 1,
                })
              message.error('请先登录!')
          }
      }
      handededCancel = (e) => {
        this.setState({
          visib: false
        });
      }
      handedededCancel = (e) => {
        this.setState({
          visi: false
        });
      }
      topUp () {
          this.setState({
              visib:false,
              visi: true
          })
      }
      inputChange (e) {
          this.setState({
              topMoney: e.target.value
          })
      }
      SureTop () {

          let obj = {
              qq:localStorage.getItem('qq'),
              money: this.state.topMoney*1 + this.state.userMoney*1
          }
          api.requestUpdateMoneyData(obj)
          .then(data =>{
              if(data.data === 1)
              {
                  message.success('充值成功!')
                  this.setState({
                      visi: false
                  })
              }
          })
      }
    render () {
        let login = ''
        let logina = ''
        let loginArea = ''
        if(localStorage.getItem('gameName')) {
            login = <li>欢迎您,{localStorage.getItem('gameName')} <span onClick={this.equit.bind(this)}>退出</span></li>
            logina = <p>欢迎回来,<Link to='/login'>{localStorage.getItem('gameName')}</Link></p>
            loginArea = <div>
                <p>{localStorage.getItem('gameDistrict') ? localStorage.getItem('gameDistrict'): '当前角色未绑定大区'}</p>
                <p onClick={this.openCard.bind(this)}>{localStorage.getItem('gameDistrict') ? '更换大区' : '立即绑定>'}</p>
                <Modal
                    visible={this.state.visibl}
                    footer={null}
                    onCancel={this.handedCancel}
                    mask ={false}
                    maskClosable={false}
                    >
                    <Select defaultValue="请选择大区" style={{ width: 180 }} onChange={this.handleChange.bind(this)}>
                        {this.state.AreaAll.map((item, index)=>{
                            return <Option value={item} key={index}>{item}</Option>
                        })}
                    </Select>
                    <Select defaultValue={localStorage.getItem('gameName')} disabled style={{ width: 200 }}>
                    </Select>
                    <Button type='danger' onClick={this.onChangeArea.bind(this)}>确定</Button>
                </Modal>
            </div>
        } else {
            login =<li>您还未登录，请<Link to='/userapp/login'>登录</Link></li>
            logina = <p>您还未登录哦，<Link to='/userapp/login'>立即登录</Link>购买超值商品！</p>
            loginArea = <div>
                <p>{localStorage.getItem('gameDistrict') ? localStorage.getItem('gameDistrict'): '当前未绑定角色'}</p>
                <Link to='/userapp/login'>立即登录</Link>
            </div>
        }
        let html = ''
        if(this.state.activeIndex === 1) {
            html = this.state.heroList.slice(0,8).map((item,index)=> {
                return (
                     <li key={index}>
                    <div className='goods_detail'>
                    <Link to={'/detail/' + item.heroSkin[0].code}><img src={item.heroSkin[0].pic} alt=""/></Link>
                    <div>{item.heroSkin[0].name}</div>
                    <div className='dis_list'>Q币价： <span>{parseInt(item.heroSkin[0].oldPrice)/100}.00 Q币</span></div>
                    <div className='dis_list'>微信价： <span>   ¥{(parseInt(item.heroSkin[0].oldPrice)/100*0.9).toFixed(2)}</span></div>
                    <div onClick={this.inCart1.bind(this,item.heroSkin[0])}>立即购买</div>
                    <Modal
                        title="加入购物车"
                        visible={this.state.visible}
                        footer={null}
                        onCancel={this.handCancel}
                        mask ={false}
                        maskClosable={false}
                        >
                        <div className='shopInFor'>
                            <div className='imgInFor'>
                            <img src={this.state.shopInfor.goodImg} alt=""/>
                            <p>{this.state.shopInfor.goodName}</p>
                            </div>
                        <div className='heroInFor'>
                            <p>价格：<span>{(this.state.shopInfor.goodPrice/100).toFixed(1)}</span> Q币</p>
                            <p>期限：<span>永久</span></p>
                            <Button type="danger" onClick={this.AddCart.bind(this)}>确定</Button>
                        </div>
                        </div>
                    </Modal>
                    </div>
                </li>
                )
            })
    } else {
        html = this.state.heroList.slice(8,16).map((item,index)=> {
            return (
               
                    <li  key={index}>
                        <div className='goods_detail'>
                        <Link to={'/detail/' + item.heroSkin[0].code} ><img src={item.heroSkin[0].pic} alt=""/></Link>
                        <div>{item.heroSkin[0].name}</div>
                        <div className='dis_list'>Q币价： <span>{parseInt(item.heroSkin[0].oldPrice)/100}.00 Q币</span></div>
                        <div className='dis_list'>微信价： <span>   ¥{(parseInt(item.heroSkin[0].oldPrice)/100*0.9).toFixed(2)}</span></div>
                        <div onClick={this.inCart1.bind(this,item.heroSkin[0])}>立即购买</div>
                        <Modal
                        title="加入购物车"
                        visible={this.state.visible}
                        footer={null}
                        onCancel={this.handCancel}
                        mask ={false}
                        maskClosable={false}
                        >
                        <div className='shopInFor'>
                            <div className='imgInFor'>
                            <img src={this.state.shopInfor.goodImg} alt=""/>
                            <p>{this.state.shopInfor.goodName}</p>
                            </div>
                        <div className='heroInFor'>
                            <p>价格：<span>{(this.state.shopInfor.goodPrice/100).toFixed(1)}</span> Q币</p>
                            <p>期限：<span>永久</span></p>
                            <Button type="danger" onClick={this.AddCart.bind(this)}>确定</Button>
                        </div>
                        </div>
                    </Modal>
                        </div>
                    </li>
            )
        })
    }  
        return (
            <div className="contenter">
                <div className='content'>
                <div className='header_menu'>
            <div className="header_menu_nav">
                <Row className='nav_color'>
                    <Col span={16} push={8}>
                    <ul className='header_menu_right'>
                        { login }<i>|</i>
                        <li><Link to='/users'>我的订单</Link></li><i>|</i>
                        <li><Link to='/users'>个人中心</Link></li><i>|</i>
                        <li><span>官方论坛</span></li><i>|</i>
                        <li>帮助中心</li><i>|</i>
                        <li>游戏导航</li>
                    </ul>
                </Col>
                <Col span={8} pull={16}>
                <ul>
                    <li>手机版</li><i>|</i>
                    <li>游戏币交易</li><i>|</i>
                    <li>Q币充值</li><i>|</i>
                     <li>心悦游戏玩家</li>
                </ul>
                </Col>
                </Row>
            </div>
            <div className='header_search'>
                <ul>
                    <li><div className='header_search_logo_1'></div></li>
                    <li><div className="header_search_search">
                    <div className='header_search_search_input'>
                        <input type="text" placeholder='输入道具进行搜索' onChange={this.onchanged}/>
                        <ul>    
                            {
                                this.state.heroinfor.slice(0,8).map((item, index)=>{
                                    return (
                                        <li key={index}>
                                            <Link to={'/detail/' + item.goodId}>{item.goodType === '1' ? '【英雄】' : '【皮肤】'}{item.goodName}</Link>
                                        </li>
                                    )
                                })
                            }                
                        </ul>
                    </div>
                    <Link to={'/list/'+this.state.name}><div className="header_search_search_btn">  
                    </div></Link>
                    </div></li>
                    <li> <a href="http://lol.ifover.com"><div className='header_search_logo_2'></div></a></li>
                </ul>
            </div>
            <div className='header_menu_choose'>
                <ul>
                    <li className='navActive'>首页</li>
                    <li><Link to='/list/list'>商品列表</Link></li>
                    <li><Link to='/userapp/activity'>活动专区</Link></li>
                    <li><Link to='/userapp/discount'>限时折扣</Link></li>
                    <li>聚豆乐园</li>
                    <li><Link to='/lolshop/zhoubian'>周边商城</Link></li>
                    <li><Link to='/users'>个人中心</Link></li>
                </ul>
                <Link to='/cart'><div className="header_menu_cart">购物车 ( {this.state.totalNumber} )</div></Link>
            </div>
            <div className='header_menu_kind'>
                <Link to='/list/list'><div className="header_menu_kind_all">全部分类</div></Link>
                <div className="header_menu_kind_shop">
                    <ul>
                        <li><Link to='/list/2'>英雄</Link></li>
                        <li><Link to='/list/7'>表情</Link></li>
                        <li><Link to='/list/3'>皮肤</Link></li>
                        <li><Link to='/list/4'>道具</Link></li>
                        <li><Link to='/list/5'>守卫皮肤</Link></li>
                        <li><Link to='/list/6'>道具包</Link></li>
                    </ul>
                </div>
            </div>
        </div>
        <div className="content_content">
                        <div className='content_left'>
                            <div className="loginbox">
                                <div className="login">
                                    <img src="//js01.daoju.qq.com/common/images/channel/revision/lol/default.gif" alt=""/>
                                    {logina}
                                </div>
                                <div className="role">
                                    {loginArea}
                                </div>
                                <div className="balance">
                                    <ul>
                                        <li><Link to='/'><i className='iconfont icon-quan'></i>我的优惠券</Link></li>
                                        <li><a onClick={this.Balance.bind(this)}><i className='iconfont icon-qian'></i>查询Q币Q点余额</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="notice_list">
                                <div className="notice_list_header">
                                <h2>公告</h2> <Link to='/userapp/notice'>更多></Link>
                                </div>
                                <ul>
                                    <li><Link to='/notice'>2019元旦官网恢复通知</Link> <span>01/01</span></li>
                                    <li><Link to='/notice'>LOL道聚城新版商城上线啦</Link> <span>03/01</span></li>
                                    <li><Link to='/notice'>LOL道聚城新版商城上线啦</Link> <span>02/02</span></li>
                                    <li><Link to='/notice'>迎接新赛季优惠券限时领</Link> <span>01/12</span></li>
                                </ul>
                            </div>
                        </div>
                        <div className='content_banner'>
                        <div className="swiper-container">
                            <div className="swiper-wrapper">
                                {
                                    this.state.bannerList.map((item, index)=>{
                                        return (
                                            <div className="swiper-slide" key={index}><img src={item.sPicLink} alt=""/></div>
                                        )
                                    })
                                }
                            </div>
                            <div className="swiper-pagination"></div>
                        </div>
                        </div>
                        <div className='content_right'>
                            <div className="active_btn"><Link to='/userapp/activity'>活动中心</Link> </div>
                            <div className="active_btn">聚豆商城</div>
                            <div className="qr_code">
                                <img src="//js01.daoju.qq.com/common/images/channel/revision/lol/code-index.png" alt="二维码" width="140" height="140"/>
                                <p>手机购买，更便捷</p>
                            </div>
                        </div>
                    </div>
                    <div className="content_list">
                        <div className="flash_buy">
                        <h3>限时抢购 <Link to='/list/list'>更多></Link></h3>
                        <ul>
                            {
                            this.state.heroList.slice(0,4).map((item, index)=> {
                                return (
                                     <li key={index}>
                                    <div className='likediv'>
                                    <Link to={'/detail/'+item.hero.heroId}><img src={item.hero.heroImg} alt=""/></Link>
                                    <div>{item.hero.heroName}</div>
                                    <p>{item.hero.heroPrice/100}.00 <span>元   (QB)</span></p>
                                    <p>剩余时间: {this.state.goodsday}天{this.state.goodshour}时{this.state.goodsmin}分{this.state.goodssec}秒</p>
                                    <div onClick={this.inCart.bind(this,item.hero)}  >立即购买</div>
                                    <Modal
                                        title="加入购物车"
                                        visible={this.state.visible}
                                        footer={null}
                                        onCancel={this.handleCancel}
                                        mask ={false}
                                        maskClosable={false}
                                        >
                                        <div className='shopInFor'>
                                            <div className='imgInFor'>
                                            <img src={this.state.shopInfor.goodImg} alt=""/>
                                            <p>{this.state.shopInfor.goodName}</p>
                                            </div>
                                        <div className='heroInFor'>
                                            <p>价格：<span>{(this.state.shopInfor.goodPrice/100).toFixed(1)}</span> Q币</p>
                                            <p>期限：<span>{this.state.shopInfor.goodDay}</span></p>
                                            <Button type="danger" onClick={this.AddCart.bind(this)}>确定</Button>
                                        </div>
                                        </div>
                                        </Modal>
                                </div>
                            </li>
                                )
                            })
                            }
                        </ul>
                        </div>
                        <div className='hot_box'>
                            <div className='hot_box_list'>
                            <h3><div className={this.state.activeIndex === 1 ? 'like_active' : ''} onClick={()=>{this.setState({activeIndex:1})}}>新品上架</div>
                             <div className={this.state.activeIndex === 2 ? 'like_active' : ''} onClick={()=>{this.setState({activeIndex:2})}}>热门推荐</div><Link to='/list/list'>更多></Link></h3>
                            <ul>
                                {
                                    html
                                }
                            </ul>
                            </div>
                            <div className='hot_box_plate'>
                                <div className='hot_range'>
                                <h3><span>热门排行</span></h3>
                                <ul>
                                    {
                                    this.state.heroList.slice(16,20).map((item,index)=>{
                                        return (
                                            <Link to={'/detail/' + item.heroSkin[0].code} key={index}>
                                            <li >
                                                <img src={item.heroSkin[0].pic} alt=""/>
                                                <div className='imginfo'>
                                                    <p>{item.heroSkin[0].name}</p>
                                                    <p>Q币价： {parseInt(item.heroSkin[0].oldPrice)/100}.00Q币</p>
                                                    <p>微信价： <span>￥{(parseInt(item.heroSkin[0].oldPrice)/100*0.9).toFixed(2)}</span> </p>
                                                </div>
                                            </li></Link>
                                        )
                                    })
                                    }
                                </ul>
                                </div>
                                <div className='hot_range'>
                                <h3><span>猜你喜欢</span></h3>
                                <ul>
                                    {
                                    this.state.shouList.slice(0,4).map((item,index)=>{
                                        return (
                                            <Link key={index} to={'/detail/' + item.goodId}>
                                            <li >
                                                <img src={item.goodImg} alt=""/>
                                                <div className='imginfo'>
                                                    <p>{item.goodName}</p>
                                                    <p>Q币价： {parseInt(item.goodPrice)/100}.00Q币</p>
                                                    <p>微信价： <span>￥{(parseInt(item.goodPrice)/100*0.9).toFixed(2)}</span> </p>
                                                </div>
                                            </li></Link>
                                        )
                                    })
                                    }
                                </ul>
                                </div>
                            </div>
                        </div>
                        <div className="supershop">
                        <h3><span>周边商城</span> <Link to='/lolshop/zhoubian'>更多></Link></h3>
                        <ul>
                            {
                                this.state.banList.slice(0,4).map((item, index)=> {
                                    return (
                                        <li key={index}>
                                            <Link to={'/lolshop/shopDetail/'+ item.handId}><img src={item.handImg} alt=""/></Link>
                                            <p>{item.handName}<span>￥{item.handPrice/100}</span></p>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                        </div>
                        <div className="wonderful_activities">
                        <h3><span>精彩活动</span> <Link to='/userapp/activity'>更多></Link></h3>
                        <ul>
                            {
                                this.state.activeList.slice(0,3).map((item, index)=> {
                                    return (
                                        <li key={index}>
                                            <img src={item.activeImg} alt=""/>
                                            <p>{item.activeName}</p>
                                            <p>活动时间：{item.activeBegTime.slice(0,11)}~{item.activeEndTime.slice(0,11)}
                                                <span> <i className='iconfont icon-dianzan'></i>({item.activePraise})</span>
                                            </p>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                        </div>
                    </div>
            </div>
            <div className="footer">
                    <div className='footer_content'>
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
                    <div className='footer_footer'>
                    <div className="title"><p>腾讯互动娱乐 | 服务条款| 腾讯游戏隐私保护指引 | 广告服务 | 腾讯游戏招聘 | 腾讯游戏客服 | 游戏地图 | 成长守护平台 | 商务合作 | 网站导航</p>
                    <p>COPYRIGHT © 1998 – 2019 TENCENT. ALL RIGHTS RESERVED.</p>
                    <p>腾讯公司 版权所有</p>
                    </div>
                    </div>
                </div>
                <Modal
                    visible={this.state.visib}
                    footer={null}
                    onCancel={this.handededCancel}
                    mask ={false}
                    maskClosable={false}
                >
                    <p>当前用户余额：{parseInt(this.state.userMoney).toFixed(2)} Q币</p>
                    <Button type='danger' onClick={this.topUp.bind(this)}>立即充值</Button>
                            
                </Modal>
                <Modal
                    visible={this.state.visi}
                    footer={null}
                    onCancel={this.handedededCancel}
                    mask ={false}
                    maskClosable={false}
                >
                <p>请输入充值的金额：<input type="number" style={{border: '1px solid black'}} onChange={this.inputChange.bind(this)}/> Q币 <Button type='danger' onClick={this.SureTop.bind(this)}>确定充值</Button></p>
                </Modal>
            </div>
        )
        
    }
}

export default Com