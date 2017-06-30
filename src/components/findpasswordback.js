import React from 'react';
import {NavBar,InputItem,List,WhiteSpace,Button,Toast} from 'antd-mobile';
import CSSmodules from 'react-css-modules';
import MyNavBar from './navbar.js';
const Item = List.Item;
import {myButton} from '../components/button.js';
import styles from '../styles/findpasswordback.less';
const buttonstyle = {
'color':'#1a90e9',
'fontSize':'0.32rem',
'border':'none',
'backgroundColor':'#fff',
}
class FindBack extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      hasError :false,
      value:'',
      confirm:''
    }
  }
  onErrorClick = () => {
    if (this.state.hasError) {
      Toast.info('Please enter 11 digits');
    }
  }
  go = (e) => console.log("111111")
  onChange = (value) => {
    if (value.replace(/\s/g, '').length < 11) {
      this.setState({
        hasError: true,
      });
    } else {
      this.setState({
        hasError: false,
      });
    }
    this.setState({
      value,
    });
  }
  anotherChange = (confirm) => {
      this.setState(
        {
          confirm
        }
      )
  }
  judy = (e)=>{
    if(this.state.value==''){
      Toast.info('请输入手机号');
    }
    if(this.state.value.replace(/\s/g,"").length < 11){
      Toast.info('您输入的手机格式有问题');
    }else{
      console.log("i am fetch my data");
    }
  }

  judyConfirm = (confirm)=>{
    if(this.state.confirm=='') {
        Toast.info('请输入验证码');
    }
    if(this.state.confirm=="000"){
      console.log('you are success')
    }else{
        Toast.info('验证码输入错误');
    }
  }
  render () {
    return (
      <div>
          <MyNavBar title="密码找回"/>
          <WhiteSpace />
            <InputItem
              clear
              type="phone"
              editable
             placeholder="请输入手机号"
             onErrorClick={this.onErrorClick}
             error={this.state.hasError}
             onChange={this.onChange}
             value={this.state.value}
           ></InputItem>
              <InputItem
                  clear
                  placeholder="请输入验证码"
                  editable
                  onChange={this.anotherChange}
                  onBlur={this.judyConfirm}
                  value= {this.state.confirm}
                  extra={myButton(null,this.judy)}
                ></InputItem>
              <InputItem
                  type="password"
                  placeholder="请输入新密码"
                ></InputItem>
          <Button type="primary">确定</Button>
      </div>
    )
  }
}
export default CSSmodules(FindBack,styles)
