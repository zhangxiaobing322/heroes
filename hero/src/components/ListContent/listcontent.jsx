import React, { Component } from 'react'
import api from '@/api/banner'
import { Tabs } from 'antd'
import ListAll from './ListAll/ListAll'
import ListHero from './ListHero/ListHero'
import ListSkin from './ListSkin/ListSkin'
import ListProp from './ListProp/ListProp'
import ListShou from './ListShou/ListShou'
import ListPropPage from './ListPropPage/ListPropPage'
import './style.scss'

class Com extends Component {
    constructor(props) {
        super(props)
        this.state = {
            likeList: [],
            shouList: []
        }
    }
    componentDidMount(){
        api.requestShouWeiData()
        .then(data =>{
            this.setState({
                likeList: data.data
            })
        })
        api.requestShouBanData()
        .then(data => {
            this.setState({
                shouList: data.data
            })
        })
    }
    number (num) {
        this.props.numFn(num)
    }
    
    render () {
        const TabPane = Tabs.TabPane;
        var aa = ''
        if(this.props.match.params.name * 1 === 2){
            console.log(2)
            aa = this.props.match.params.name
        } else if(this.props.match.params.name * 1 === 3) {
            aa = this.props.match.params.name
        } else if (this.props.match.params.name * 1 === 4) {
            aa = this.props.match.params.name
        } else if(this.props.match.params.name * 1 === 5) {
            aa = this.props.match.params.name
        } else if(this.props.match.params.name * 1 === 6) {
            aa = this.props.match.params.name
        } else if(this.props.match.params.name * 1 === 7) {
            aa = this.props.match.params.name
        }
        else {
            aa = '1'
        }
        return (
            <div className='list_list'>
                <Tabs defaultActiveKey={aa}>
                    <TabPane tab="全部分类" key="1"><ListAll {...this.props} NumberFn= {this.number.bind(this)}/></TabPane>
                    <TabPane tab="英雄" key="2"><ListHero {...this.props}/></TabPane>
                    <TabPane tab="皮肤" key="3"><ListSkin {...this.props}/></TabPane>
                    <TabPane tab="道具" key="4"><ListPropPage {...this.props}/></TabPane>
                    <TabPane tab="守卫眼皮肤" key="5" ><ListShou {...this.props}/></TabPane>
                    <TabPane tab="道具包" key="6"><ListProp {...this.props}/></TabPane>
                </Tabs>
            </div>
        )
    }
}

export default Com
