import React, { Component } from 'react'
import Flex from '@/components/zhoubian/flex/Flex'
import Top from '@/components/zhoubian/top/Top'
import Footerzhoubian from '@/components/zhoubian/footer/Footerzhoubian'
import '@/components/zhoubian/goods/style.scss'
import api from '@/api/zhoubian'
import Hand from '@/components/zhoubian/hand/Hand'
import Wanou from '@/components/zhoubian/wanou/Wanou'
import Lpl from '@/components/zhoubian/lpl/Lpl'
import Yifu from '@/components/zhoubian/yifu/Yifu'
import Qt from '@/components/zhoubian/qt/Qt'
import Hb from '@/components/zhoubian/hb/Shop_hb'
import Zhubao from '@/components/zhoubian/zhubao/Zhubao'
import '@/components/zhoubian/kind/kind.scss'
import { Tabs } from 'antd';
import { Pagination } from 'antd';
const TabPane = Tabs.TabPane;
class Com extends Component {
  constructor (props) {
    super(props);
    this.state = {
      keyCode:'1',
      defaultActiveKey:this.props.location.search.split("=")[1],
      page: 1,
      list: [],
      list1: [],
      list2: [],
      list3: [],
      list4: [],
      list5: [],
      list6: []
    }
  }
  onChange = (page) => {
    api.requestShoubanData(page, 12).then(data => {
      this.setState({
        list: data.data
      })
    })
    api.requestShop_qtData(page, 12).then(data => {
      this.setState({
        list1: data.data
      })
    })
    api.requestHbData(this.state.page, 12).then(data => {
      this.setState({
        list2: data.data
      })
    })
    api.requestWanouData(page, 12).then(data => {
      this.setState({
        list3: data.data
      })
    })
    api.requestYifuData(page, 12).then(data => {
      this.setState({
        list4: data.data
      })
    })
    api.requestLplData(page, 12).then(data => {
      this.setState({
        list5: data.data
      })
    })
    api.requestZhubaoData(page, 12).then(data => {
      this.setState({
        list6: data.data
      })
    })
  }

  componentDidMount () {
    this.node.scrollIntoView()
    api.requestShoubanData(this.state.page, 12).then(data => {
      this.setState({
        list: data.data
      })
    })
    api.requestShop_qtData(this.state.page, 12).then(data => {
      this.setState({
        list1: data.data
      })
    })
    api.requestHbData(this.state.page, 12).then(data => {
      this.setState({
        list2: data.data
      })
    })
    api.requestWanouData(this.state.page, 12).then(data => {
      this.setState({
        list3: data.data
      })
    })
    api.requestYifuData(this.state.page, 12).then(data => {
      this.setState({
        list4: data.data
      })
    })
    api.requestLplData(this.state.page, 12).then(data => {
      this.setState({
        list5: data.data
      })
    })
    api.requestZhubaoData(this.state.page, 12).then(data => {
      this.setState({
        list6: data.data
      })
    })
  }
  
  render () {
    return (
      <div className = "box" ref={node => this.node = node}>
        <Flex />
        <Top />
        <div className="content">
          <div className="main margin_shop" style={{background:"#fff", padding:'40px 0 30px 0'}}>
            <div className="goods">
            <Tabs defaultActiveKey={this.state.defaultActiveKey} onChange={this.callback}>
              <TabPane tab="雕塑手办" key="1">
                <Hand list = { this.state.list }/>
                <Pagination defaultCurrent={1} total={88} showTotal={total => `总共 ${total} 条`} pageSize={12} onChange={this.onChange}/>
              </TabPane>
              <TabPane tab="其它" key="2">
                <Qt list = { this.state.list1 }/>
                <Pagination defaultCurrent={1} total={47} showTotal={total => `总共 ${total} 条`} pageSize={12} onChange={this.onChange}/>
              </TabPane>
              <TabPane tab="海报艺术" key="3">
              <Hb list = { this.state.list2 }/>
              <Pagination defaultCurrent={1} total={14} showTotal={total => `总共 ${total} 条`} pageSize={12} onChange={this.onChange}/>
              </TabPane>
              <TabPane tab="毛绒玩偶" key="4">
              <Wanou list = { this.state.list3 }/>
              <Pagination defaultCurrent={1} total={31} showTotal={total => `总共 ${total} 条`} pageSize={12} onChange={this.onChange}/>
              </TabPane>
              <TabPane tab="男女服饰" key="5">
              <Yifu list = { this.state.list4 }/>
              <Pagination defaultCurrent={1} total={60} showTotal={total => `总共 ${total} 条`} pageSize={12} onChange={this.onChange}/>
              </TabPane>
              <TabPane tab="LPL周边" key="6">
              <Lpl list = { this.state.list5 }/>
              <Pagination defaultCurrent={1} total={60} showTotal={total => `总共 ${total} 条`} pageSize={12} onChange={this.onChange}/>
              </TabPane>
              <TabPane tab="珠宝首饰" key="7">
              <Zhubao list = { this.state.list6 }/>
              <Pagination defaultCurrent={1} total={16} showTotal={total => `总共 ${total} 条`} pageSize={12} onChange={this.onChange}/>
              </TabPane>
            </Tabs>
                
            
            </div>
          </div>
        </div>
        <Footerzhoubian />
      </div>
    )
  }

}

export default Com
