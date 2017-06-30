import React from 'react';
import {NavBar,InputItem,List,Toast,Button,Flex,Icon} from 'antd-mobile';
import {Link } from 'dva/router';
import ThirdWayLogin from './thirdway_login';
import classNames from 'classnames';
import {modalWindow} from './modal';
import {mobileLogin} from '../services/example';
import CSSmodules from 'react-css-modules';
import {myButton} from './button';
import styles from '../styles/login.less';
// const buttonstyle = {
// 'color':'#1a90e9',
// 'fontSize':'0.32rem',
// 'border':'none',
// 'backgroundColor':'#fff',
// }
const loginactive={
  'backgroundColor':'#f05305',
}
const anotherbutton = {
  width:'100%',
  backgroundColor:'#ff4100',
  border:'none',
}
const navstyle ={
  backgroundColor:"#fff",
  color:"#f50",
  border:'none',
  fontSize:'0.48rem',
  marginRight:'0.266rem'
}
const buttonstyle = {
  color:"red"
}
class  Accountlogin extends React.Component{
  constructor(props) {
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

onErrorClick = () => {
  if (this.state.hasError) {
    Toast.info('Please enter 11 digits');
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
  render () {
    const classes = classNames({
      "item" :true,
      "anotherway":true,
    })
    return (
      <div>
        <NavBar leftContent={<img alt="" src = "http://localhost:8000/images/login_08.png"/>}
            mode='light'
            onLeftClick={()=>history.back()}
            rightContent={<Link to="/register"  style={navstyle}>注册</Link>}
            children={<span styleName='span'>登录</span>}
            styleName='light'
        ></NavBar>
         <InputItem
            clear
           type="number"
           placeholder="请输入您的手机号"
           error={this.state.hasError}
           onErrorClick={this.onErrorClick}
           onChange={this.onChange}
           value={this.state.value}
           styleName='item'
         ></InputItem>
      <InputItem
        clear
        type="number"
        placeholder="请输入验证码"
        extra={myButton(this.getCofirmWord,{...this.state})}
        styleName='item'
      ></InputItem>
      <div styleName="button">
          <Button
            type="primary"
            activeStyle={loginactive}
            style={anotherbutton}
            onClick={()=>mobileLogin(modalWindow,{})}
            children="登录"
            ></Button>
      </div>
      <Flex styleName='align-middle' justify="between">
        <Link to="/accountlogin" styleName='anotherway'>账号密码登录</Link>
        <Link to="/findback" styleName='anotherway'>忘记密码</Link>
       </Flex>
      <ThirdWayLogin />
      </div>
    )
  }
  componentDidMount () {
  }
}
export default CSSmodules(Accountlogin,styles)
