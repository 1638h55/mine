import React from 'react';
import {NavBar,List} from 'antd-mobile';
import {Link} from 'dva/router';
import MyNavBar from './navbar.js';
import {rem} from 'polished'
import {whiteSpace} from './whitespace';
const whitestyle = {
  height:rem(40,75),
  backgroundColor:'#efeff4',
}
const liststyle = {
  paddingBottom:rem(20,75),
  backgroundColor:'#fff',
}
const style = {
  backgroundColor:'#ddd',
}
export default class AccountSecure extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      
    }
  }
  render (){
    return (
      <div>
      <MyNavBar title="账号与安全"/>
      {whiteSpace(whitestyle)}
      <List style={liststyle}>
        <List.Item
        arrow="horizontal"
        ><Link to='/mine/settings/fixloginword'>修改登录密码</Link></List.Item>
        <List.Item
          arrow="horizontal"
        ><Link to='/mine/settings/fixpayword'>修改支付密码</Link></List.Item>
      </List>
      </div>
    )
  }

}
