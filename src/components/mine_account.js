import React from 'react';
import {Icon,List} from 'antd-mobile';
import {Link} from 'dva/router';
import {whiteSpace} from './whitespace';
import CSSModules from 'react-css-modules';
import style from '../styles/myaccount.less';
import {getAccoutinfo} from '../services/example';
import MyNavBar from './navbar.js';
import {rem} from 'polished';
let Item = List.Item;
const whitestyle = {
  height:rem(40,75),
  backgroundColor:"#efeff4",
}
 class MyAccount extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      usersinfo:[]
    }
  }
  render () {
    return(
      <div>
        <MyNavBar title="我的账号"/>
          {whiteSpace(whitestyle)}
          {this.state.usersinfo.map(({name,phone,userbank,username},index)=>{
            return <List key={index}>
                <Item extra={username}>用户名</Item>
                <Item extra={name}>姓名</Item>
                <Item extra={phone} styleName='phone'>手机号</Item>
                {whiteSpace(whitestyle)}
                <Item extra={userbank ? '已开通':'未开通'}  arrow="horizontal">银行存管</Item>
            </List>
          }

        )}
      </div>
    )
  }
  componentDidMount(){
    getAccoutinfo().then(res=>this.setState({
      usersinfo:res.data.userinfo
    }))
  }
}
export default CSSModules(MyAccount,style)
