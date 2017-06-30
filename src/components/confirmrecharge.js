import React from 'react';
import {NavBar,InputItem,Button} from 'antd-mobile';
import {Link} from 'dva/router';
export default class ConfirmPage extends React.Component {
  constructor(props){
    super(props)
    this.state ={
      time:false
    }
  }
  change=(value)=>{
    alert(0);
  }
  render () {
    return (
      <div>
      <NavBar
          onLeftClick={()=>history.back()}
          leftContent={<img alt="" src = "http://localhost:8000/images/login_08.png"/>}
          mode='light'
          children={<span>请输入验证码</span>}
      ></NavBar>
      <InputItem
         clear
        placeholder="请输入验证码"
        children="验证码"
        extra={<Button type="primary" size="small" onClick={this.change}>重新发送</Button>}
      ></InputItem>
      <div>如果没有收到验证码,可跳转到银行页面充值
        <Link to="">立即跳转</Link>
      </div>
      <Button>确定</Button>
      </div>
    )
  }
  componentDidMount () {


  }
}
