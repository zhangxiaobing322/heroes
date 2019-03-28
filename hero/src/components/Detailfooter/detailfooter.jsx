import React, { Component } from 'react'
import './style.scss'

class Com extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    render () {
        return (
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
        )
    }
}

export default Com