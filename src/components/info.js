import React from 'react';
import {Button,NoticeBar} from 'antd-mobile';
import MyNavBar from './navbar';
import DoneBorrow from '../containers/doneborrowed';
import {whiteSpace} from './whitespace';
import SinglePro from '../containers/singlecontainer';
import LastMoney from '../containers/lastmoney';
import {LoadMoreDetails} from './moredetail';
import {rem} from 'polished';
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
        <MyNavBar title="Details"/>
        {whiteSpace(whitestyle)}
        <SinglePro />
        {whiteSpace(whitestyle)}
        <DoneBorrow />
        {this.state.show ? <LoadMoreDetails/> : "" }
        <Button onClick={this.loadMore}
          children="点击查看更多详情"
          ></Button>
          <NoticeBar mode="closable">
        好收益警告，理财有风险，投资需谨慎
      </NoticeBar>
      </div>
    )
  }
}
