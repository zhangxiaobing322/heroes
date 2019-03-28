import React, { Component } from 'react'
import Footer from '../../components/ListFooter/listfooter'
import Header from '../../components/CartHeader/cartheader'
import Content from '../../components/Cartcontent/cartcontent'
import './style.scss'

class Com extends Component {
    constructor(props) {
        super(props)
        this.state= {
            number: null
        }
    }
    numberFn (num) {
        this.setState({
            number: num
        })
    }
    render() {
        return (
            <div className='carter'>
                <div className='list'>
             <Header num={this.state.number}/>
            </div>
            <div className='cart_content'>
            <Content numFn={this.numberFn.bind(this)}/>
            </div>
            <Footer />
        </div>
        )
    }
}

export default Com