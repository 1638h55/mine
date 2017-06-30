import React from 'react';
import CSSModules from 'react-css-modules';
import {Link} from 'dva/router';
import {InputItem,Button,NoticeBar} from  'antd-mobile';
import {myButton} from './button';
import {modalWindow} from './modal';
import {checkUser} from '../services/example';
import MyNavBar from './navbar.js';
const buttonstyle = {
  color:"red"
}
class QuickBind extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      hasError: false,
      value: '',
      loaded:false,
      disabled:false,
      children:"获取验证码",
      style:null
    }
  }
  getCofirmWord = (e)=> {
    this.setState({
      loaded:true,
      disabled:true,
      children:"加载中",
      style:buttonstyle,
    })
  }
  render () {
    //const info = {headline:'inhao',subline:'wohao'}
    return(
      <div>
      <MyNavBar title="快捷绑定"/>
      <InputItem
        type='phone'
        placeholder="请输入您的手机号"
        />
        <InputItem
          type='text'
          placeholder="请输入验证码"
          extra={myButton(this.getCofirmWord,{...this.state})}
          />
          <NoticeBar>
            为了您的账号安全，请绑定您的手机号码
          </NoticeBar>
          <Button
           children='立即绑定'
           onClick={()=>checkUser(modalWindow,{})}
          ></Button>
          <Link to="/related">关联已有账号</Link>
      </div>
    )
  }
}
export default QuickBind
