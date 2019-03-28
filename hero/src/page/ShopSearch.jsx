import React, { Component } from 'react'
import Top from '@/components/zhoubian/top/Top'
import Footerzhoubian from '@/components/zhoubian/footer/Footerzhoubian'
import Flex from '@/components/zhoubian/flex/Flex'
import api from '@/api/search'
import Search from '@/components/zhoubian/wanou/Wanou'

class Com extends Component {
  constructor (props) {
    super(props);
    this.state = {
      list:[]
    }
  }
  
  componentDidMount () {
    this.node.scrollIntoView()
   const goodName = this.props.match.params.goodName
   api.requestSearch(goodName).then(data => {
    this.setState({
      list:data
    })
   })
  }
  
  render () {
    return (
      <div className="box" ref={node => this.node = node}>
        <Flex />
        <Top/>
        <div className="main margin_shop" style={{background:"#fff", padding:'30px 0 30px 0', margin:"30px 8%"}}>
         <div className="searchGoodlist" >
         <Search list = {this.state.list} />
         </div>        
        </div>
        <Footerzhoubian />
      </div>
    )
  }

}

export default Com