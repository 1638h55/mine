import React from 'react';
import {Link} from 'dva/router';
import {list,InputItem,Toast,Button,NavBar, Icon,Flex} from 'antd-mobile';
import { createForm } from 'rc-form';
import {accountLogin} from '../services/example';
import {modalWindow} from './modal';
import ThirdWayLogin from './thirdway_login.js';
import styles from '../styles/login.less';
import CSSmodules from 'react-css-modules';
import classNames from 'classnames'
class Login extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      focused: false,
      focused1: false,
      username :'',
      passoword:''
    }
  }
  onChange=(value)=> {
    // const usernameinput = this.refs.username;
    // const passowordinput = this.refs.passoword;
    // for(var key in this.refs){
    //   if(key==="username"){
    //     console.log(1)
    //     this.setState({
    //        username:value,
    //      });
    //   } else if(key==="passoword"){
    //     console.log(2)
    //     this.setState({
    //       passoword:value,
    //     })
    //
    //   }
    // }
    this.setState({
      username : value,
    })
  }
  onChange2=(value)=>{
    this.setState({
      passoword : value,
    })
  }
  onBlur=(value) => {
    console.log(this.refs.username.props)
    this.setState({
      focused:false
    })
    if(value=="") {
        Toast.info('请输入账号');
    }else if (value!=="111"){
        Toast.info('请输入正确的手机号用户名');
    }
  }
  onBlur2=(value) => {
    this.setState({
      focused1:false
    })
    if(value=="") {
        Toast.info('请输入密码');
    }
  }
  render () {
    return (
      <div>
      <NavBar leftContent={<img alt="" src = "http://localhost:8000/images/login_08.png"/>}
        mode="light"
        onLeftClick={() => location.href ="http://localhost:8000/mine"}
        rightContent={<Link to="/register"  style={{backgroundColor:"#fff",color:"#f50",border:'none',fontSize:'0.48rem',marginRight:'0.266rem'}}>注册</Link>}
        children={<span styleName='span'>登录</span>}
        styleName='light'
        ></NavBar>
          <InputItem
           clear
           placeholder="请输入用户名手机号"
           editable
           onChange={this.onChange}
           styleName='item'
           focused={this.state.focused}
           value ={this.state.username}
           ref="username"
           name="username"
           onFocus={()=>{
             this.setState({
               focused:true
             })
           }}
           onBlur={this.onBlur}
         ></InputItem>
         <InputItem
           clear
           editable
           placeholder="请输入密码"
           focused={this.state.focused1}
           onChange={this.onChange2}
           styleName='item'
           value={this.state.passoword}
           onBlur={this.onBlur2}
           ref="passoword"
           name="passoword"
           extra = {<img alt="" src = {this.state.focused1 ? "http://localhost:8000/images/login_04.png" : "http://localhost:8000/images/login_06.png"}/>}
           onExtraClick ={()=> console.log(0)}
           onFocus={() => {
             this.setState({
               focused1 :true
             })
            //  console.log(this.refs.passoword.props)
           }}
         ></InputItem>
         <div styleName="button">
          <Button
              type="primary"
              activeStyle={{backgroundColor:'#f05305'}}
               style={{width:'100%',backgroundColor:'#ff4100',border:'none'}}
               children="登录"
               onClick={()=>accountLogin(modalWindow,{})}
            ></Button>
         </div>
         <Flex styleName='align-middle' justify="between">
         <Link to="/mobilelogin" styleName='anotherway'>手机验证码登录</Link>
          <Link to="/findback" styleName='anotherway'>忘记密码</Link>
         </Flex>
         <ThirdWayLogin />
      </div>
    )

  }
  componentDidMount () {
  }
}
export default CSSmodules(Login,styles)
