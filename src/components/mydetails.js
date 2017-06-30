import React from 'react';
import {Link} from 'dva/router';
import List from './myinfo.js';
import {rem} from 'polished';
import { whiteSpace } from './whitespace';
import ProfitContainer from '../containers/profitcontainer';
import {Flex,Button,Icon,NavBar} from 'antd-mobile';
const styles = {
  'width':'50%',
  'textAlign':'center',
  'height':rem(90,75),
  'lineHeight':rem(90,75),
  'color':'#f50',
  fontSize:rem(40,75),
}
const active = {
  'color':'red',
}
const box = {
  height:rem(108,75),
  'backgroundColor':'#fff',
}
const borderstyle = {
  borderRight:"1px solid #e0e0e0",
  width:0,
  height:rem(90,75),
}
const whitestyle = {
  boxSizing:'border-box',
  backgroundColor:'#efeff4',
  height:'40px',
  borderTop:'1px solid #e0e0e0',
  borderBottom:'1px solid #e0e0e0',
}
const navstyle = {
  backgroundColor:"#f50",
  height:rem(88,75),
  fontSize:rem(40,75),
  marginTop:rem(48,75),
}
const spanstyle = {
  color:"#fff",
}
export default class MyDetails extends React.Component {
  constructor(props){
    super(props)
    this.gosomeWhere = this.gosomeWhere.bind(this);
  }
  gosomeWhere () {
    console.log(this.refs.recharge);
  }
  render () {
    return(
      <div>
      <NavBar
          style={navstyle}
          children={<span style={spanstyle}>我的</span>}
      ></NavBar>
      <ProfitContainer/>
      <Flex justify='around' style={box}>
          <Link ref="recharge" to="/mine/recharge" style={styles} activeStyle={active}>
          充值
          </Link>
          <span style={borderstyle}></span>
          <Link type="primary" style={styles} activeStyle={active}>
          提现
          </Link>
      </Flex>
      {whiteSpace(whitestyle)}
        <List/>
      </div>
    )
  }
  componentDidMount () {

  }
}
