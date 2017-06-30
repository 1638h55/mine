import React from 'react';
import MyNavBar from './navbar.js';
import {InputItem} from 'antd-mobile';
import {anotherButton} from './anotherbutton';
import {rem} from 'polished'
import {whiteSpace} from './whitespace';
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
    return (
      <div>
      <MyNavBar title="修改登录密码"/>
       {whiteSpace(whitestyle)}
       <div className="am_input_box">
         <InputItem
            clear
           placeholder="请输入原密码"
         ></InputItem>
         <InputItem
            clear
           placeholder="请输入新密码"
         ></InputItem>
         <InputItem
            clear
           placeholder="请重新输入密码"
         ></InputItem>
       </div>
         {whiteSpace(whitestyle2)}
        {anotherButton(this.getCofirmWord,{...this.state})}
      </div>
    )

  }
}
