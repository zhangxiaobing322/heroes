import React, { Component } from 'react'
import './style.scss'
import Header from '../../components/ListHeader/listheader'
import Content from '../../components/ListContent/listcontent'
import Footer from '../../components/ListFooter/listfooter'

class Com extends Component {
    constructor(props) {
        super(props)
        this.state = {
            number: null
        }
    }
    numnum (num) {
        this.setState({
            number: num
        })
    }
    render () {
        return (
            <div className='lister'>
                <div className='list'>
             <Header number={this.state.number}/>
            </div>
            <div className='list_content'>
            <Content {...this.props} numFn={this.numnum.bind(this)}/>
            </div>
            <Footer />
        </div>
        )
    }
}

export default Com