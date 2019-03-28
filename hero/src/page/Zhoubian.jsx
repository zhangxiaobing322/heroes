import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
import Banner from '@/components/zhoubian/banner/Banner'
import Flex from '@/components/zhoubian/flex/Flex'
import Qt from '@/components/zhoubian/qt/Qt'
import Hand from '@/components/zhoubian/hand/Hand'
import Wanou from '@/components/zhoubian/wanou/Wanou'
import Lpl from '@/components/zhoubian/lpl/Lpl'
import Yifu from '@/components/zhoubian/yifu/Yifu'
import Top from '@/components/zhoubian/top/Top'
import Footerzhoubian from '@/components/zhoubian/footer/Footerzhoubian'
//import '@/components/zhoubian/goods/style.scss'
import api from '@/api/zhoubian';
class Com extends Component {
  constructor (props) {
    super(props);
    this.state = {
      list: [],
      list1: [],
      list2: [],
      list3: [],
      list4: [],
      img1: 'https://game.gtimg.cn/images/daojushop/zb/ad/201903/20190307133951_773061.jpg',
      img2: 'https://game.gtimg.cn/images/daojushop/zb/ad/201812/20181211114102_207382.jpg',
      img3: 'https://game.gtimg.cn/images/daojushop/zb/ad/201812/20181211114040_462984.jpg',
      img4: 'https://game.gtimg.cn/images/daojushop/zb/ad/201901/20190118141919_630328.jpg',
      img5: 'https://game.gtimg.cn/images/daojushop/zb/ad/201901/20190117112010_539866.jpg'
    }
  }
  
  componentDidMount () {
    this.node.scrollIntoView()
    api.requestShop_qtData(1, 4).then(data => {
      this.setState({
        list: data.data
      })
    })
    api.requestShoubanData(1, 4).then(data => {
      this.setState({
        list1: data.data
      })
    })
    api.requestWanouData(1, 4).then(data => {
      this.setState({
        list2: data.data
      })
    })
    api.requestLplData(1, 4).then(data => {
      this.setState({
        list3: data.data
      })
    })
    api.requestYifuData(1, 4).then(data => {
      this.setState({
        list4: data.data
      })
    })
  }
  
  render () {
    return (
      <div className="box" ref={node => this.node = node}>
        <Flex />
        <Top/>
        <div className = "content">
        <Banner />
        <div className="main margin_shop" id="top" style={{background:"#fff", padding:'40px 0 30px 0', margin:'-30px 8% 50px 8%',zIndex:'2',position:'relative'}}>
            <div className="goods">
              <div className="clearfix">
                <h3>精品推荐</h3>
                <span>超值好物随时买</span>
                <NavLink to = "/lolshop/kindHand?num=2" className="a">更多<i></i></NavLink >
              </div>
              <div className="img">
                <img src={this.state.img1} alt=""/>
              </div>
              <Qt list = { this.state.list }/>
            </div>
            <div className="goods">
              <div className="clearfix">
                <h3>手办专区</h3>
                <span>精品手办等你来抢</span>
                <NavLink to = "/lolshop/kindHand?num=1" className="a">更多<i></i></NavLink >
              </div>
              <div className="img">
                <img src={this.state.img2} alt=""/>
              </div>
              <Hand list = { this.state.list1 }/>
            </div>
            <div className="goods">
              <div className="clearfix">
                <h3>毛绒专区</h3>
                <span>毛绒玩偶 精心设计</span>
                <NavLink to = "/lolshop/kindHand?num=4" className="a">更多<i></i></NavLink >
              </div>
              <div className="img">
                <img src={this.state.img3} alt=""/>
              </div>
              <Wanou list = { this.state.list2 }/>
            </div>
            <div className="goods">
              <div className="clearfix">
                <h3>LPL专区</h3>
                <span>选手同款周边</span>
                <NavLink to = "/lolshop/kindHand?num=6" className="a">更多<i></i></NavLink >
              </div>
              <div className="img">
                <img src={this.state.img4} alt=""/>
              </div>
              <Lpl list = {this.state.list3}/>
            </div>
            <div className="goods">
              <div className="clearfix">
                <h3>卫衣专区</h3>
                <span>比赛卫衣等你来袭</span>
                <NavLink to = "/lolshop/kindHand?num=5" className="a">更多<i></i></NavLink >
              </div>
              <div className="img">
                <img src={this.state.img5} alt=""/>
              </div>
              <Yifu list = { this.state.list4 }/>
            </div>
        </div>
        
      </div>
        <Footerzhoubian />
      </div>  
    )
  }

}

export default Com
