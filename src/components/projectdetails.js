import {List,InputItem,Button,NoticeBar} from 'antd-mobile';
import {Link} from 'dva/router';
import CSSmodules from 'react-css-modules';
import SinglePro from '../containers/singlecontainer';
import LastMoney from '../containers/lastmoney';
import React from 'react';
import MyNavBar from './navbar';
import {rem} from 'polished';
import {whiteSpace} from './whitespace';
import {LoadMoreDetails} from './moredetail';
//未登录的状态点击任何按钮提示用户登录 接着判断用户是否完善资料以及是否开通银行存管
//登录状态判断直接判断用户资料是否完善以及是否开通银行存管
const whitestyle = {
  height:rem(25,75),
}

class Details extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      show:false,
    }
  }
  loadMore=()=>{
    this.setState({
      show:true,
    })
  }
  render () {
    return (
      <div>
        <MyNavBar title="项目详情"/>
        {whiteSpace(whitestyle)}
        <SinglePro />
        {whiteSpace(whitestyle)}
        <LastMoney />
        {this.state.show ? <LoadMoreDetails/> : "" }
        <Button onClick={this.loadMore}
          children="点击查看更多详情"
          ></Button>
            <NoticeBar mode="closable">
          好收益警告，理财有风险，投资需谨慎
        </NoticeBar>

        <Link to="/payresult"
          >立即出借跳转到包商银行页面暂时跳转至支付结果页面</Link>
      </div>
    )
  }
}
export default Details
