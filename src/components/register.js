import React from 'react';
import {InputItem,Button} from 'antd-mobile';
import {Link } from 'dva/router';
import classNames from 'classnames';
import {modalWindow} from './modal';
import {userRegister} from '../services/example'
import MyNavBar from './navbar.js';
import CSSmodules from 'react-css-modules';
import styles from '../styles/register.less';
import {myButton}  from '../components/button';
const borderstyle = {
  borderTop:'1px solid #d5d5d5',
  marginTop:'0.2rem'
}
class Register extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      focused: false,
      focused1: false,
      children : "获取验证码",
    }
  }
  getCofirmWord=(value)=>{
    this.setState(
      {children:"正在获取验证码"}
    )
  }
  render () {
    return (
      <div>
        <MyNavBar title="注册"/>
        <InputItem
         clear
         placeholder="请输入用户名"
         name="username"
         autoFocus
         style={borderstyle}
       ></InputItem>
       <InputItem
         placeholder="请输入手机号"
         focused={this.state.focused}
         onFocus={() => {
           this.setState({
             focused: false,
           });
         }}
         name="telephone"
       ></InputItem>
       <InputItem
         clear
         placeholder="请输入验证码"
         focused={this.state.focused}
         extra={myButton(null,this.getCofirmWord)}
         name="cofirmword"
         onFocus={() => {
           this.setState({
             focused: false,
           });
         }}
       ></InputItem>
       <InputItem
         clear
         placeholder="请输入密码"
         name="passoword"
         focused={this.state.focused}
         onFocus={() => {
           this.setState({
             focused: false,
           });
         }}
       ></InputItem>
       <InputItem
         clear
         placeholder="邀请码"
         name="inviteword"
         focused={this.state.focused}
         onFocus={() => {
           this.setState({
             focused: false,
           });
         }}
       ></InputItem>
        <Button onClick={()=>userRegister(modalWindow,{})}
      children="注册"
      ></Button>
       <div styleName="supple">我已同意<Link to="/contract" className="contract">《用户注册协议》</Link></div>
      </div>
    )
  }
}
export default CSSmodules(Register,styles)
