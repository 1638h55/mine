import React from 'react';
import MyNavBar from './navbar.js';
import {InputItem} from 'antd-mobile';
import {rem} from 'polished';
import {whiteSpace} from './whitespace';
import {myButton} from './button';
import {anotherButton} from './anotherbutton';
const whitestyle = {
  height:rem(25,75),
}
const whitestyle2={
  height:rem(40,75),
}
const style = {
  backgroundColor:'#ddd',
}
export default class FixPayWord extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      hasError: false,
      value: '',
      loaded:false,
      disabled:false,
      children:"退出登录",
      style:null,
    }
  }
  getCofirmWord = (e)=> {
    this.setState({
      disabled:true,
      style:style
    })
  }
  render () {
    return(
      <div>
      <MyNavBar title="修改支付密码"/>
        {whiteSpace(whitestyle)}
        <div className="am_input_box">
          <InputItem
             clear
             type="phone"
            placeholder="请输入手机号"
          ></InputItem>
          <InputItem
             clear
            placeholder="请输入验证码"
            extra={myButton(()=>console.log(0),{children:"获取验证码"})}
            onExtraClick={()=>alert("ok")}
          ></InputItem>
          <InputItem
             clear
            placeholder="请重新密码"
          ></InputItem>
        </div>
        {whiteSpace(whitestyle2)}
        {anotherButton(this.getCofirmWord,{...this.state})}
      </div>
    )
  }
}
