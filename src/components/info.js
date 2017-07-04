import React from 'react'
import {Button,NoticeBar} from 'antd-mobile'
import MyNavBar from './navbar'
import DoneBorrow from '../containers/doneborrowed'
import {whiteSpace} from './whitespace'
import SinglePro from '../containers/singlecontainer'
import LastMoney from '../containers/lastmoney'
import {LoadMoreDetails} from './moredetail'
import {rem} from 'polished'
import {loadMoreButton} from './loadmorebutton'
const whitestyle = {
  height:rem(25,75),
}
export default class Info extends React.Component{
  constructor(props){
    super(props)
    this.state= {
      show:false,
    }
  }
  loadMore=()=>{
    this.setState({
      show:true,
    })
  }
  render(){
    return(
      <div>
        <MyNavBar title="出借详情"/>
        {whiteSpace(whitestyle)}
        <SinglePro />
        {whiteSpace(whitestyle)}
        <DoneBorrow />
        {this.state.show ? <LoadMoreDetails show={this.state.show}/> : "" }
        {loadMoreButton(this.state.show,this.loadMore)}
      </div>
    )
  }
}
