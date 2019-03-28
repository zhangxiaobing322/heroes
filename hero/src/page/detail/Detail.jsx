import React, { Component } from 'react'
import './style.scss'
import Header from '../../components/Detailheader/detailheader'
import Content from '../../components/Detailcontent/detailcontent'
import Footer from '../../components/Detailfooter/detailfooter'

class Com extends Component {
    constructor(props) {
        super(props)
        this.state = {
            num:null
        }
    }
    componentWillMount(){
        document.getElementById('root').scrollIntoView(true);//为ture返回顶部，false为底部
    }
    number (numm) {
        console.log(numm)
        this.setState({
            num: numm
        })
    }
    render () {
        return (
            <div className='detailer'>
                <div className='detail'>
             <Header number = {this.state.num}/>
            </div>
            <div className='detail_content'>
            <Content {...this.props} NumberFn= {this.number.bind(this)}/>
            </div>
            <Footer />
        </div>
        )
    }
}

export default Com