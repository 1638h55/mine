import React from 'react';
import {NavBar,WhiteSpace,List,InputItem,Button,NoticeBar} from 'antd-mobile';
import {Link } from 'dva/router';
import styles from '../styles/confirmpay.less';
import CSSModules from 'react-css-modules';
import CountUp from 'countup';
let Item = List.Item;
 class ComfirmPay extends React.Component {
  constructor(props) {
    super(props)
    this.state= {
      clicked :false,
      extra :"time"
    }
  }
  sendCofirmWord=(value)=>{
    let click = !this.state.clicked;
    this.setState({
      clicked:!this.state.clicked,
    })
    if(click){
      this.setState({
        extra : '重新发送'
      })
    }
  }
  render () {
    return(
      <div>
      <NavBar leftContent={<img alt="" src = "http://localhost:8000/images/login_08.png"/>}
          children={<span>确认支付</span>}
      ></NavBar>
      <WhiteSpace size="lg"/>
      <List renderHeader={() => '项目信息'}>
        <Item>
          <div>
            项目名称：<span>this is  out products</span>
          </div>
        </Item>
        <Item>
          <div>项目编号:<span>XM23456CC</span></div>
        </Item>
      </List>
      <List renderHeader={() => '投资信息'}>
        <Item>
          <div>
            出借金额：<span>2000</span>
          </div>
        </Item>
        <Item>
          <div>
            预计收益:<span>2000</span>
          </div>
        </Item>
      </List>
      <WhiteSpace size="lg"/>
      <InputItem
         clear
         autoFocus
         placeholder="请输入收到的验证码"
         children="验证码"
          extra={this.state.extra}
         onExtraClick={this.sendCofirmWord}
      ></InputItem>
      <NoticeBar>如果还没收到验证码,可以跳转到银行支付页面<Link to="http://www.bsb.com.cn/">now</Link></NoticeBar>
      <Button children="确定"></Button>
      <Link to='/payresult'>确认</Link>
      <div id="ani"></div>
      </div>
    )
  }
  componentDidMount () {
    document.getElementsByTagName('header')[0].style.display="none";
    let target = document.getElementsByClassName("am-input-extra");
    var text = target[0].innerHTML;
    var numAnim = new CountUp(target[0], 0, 60,0,60,"easeOutCubic");
    numAnim.start();
    setTimeout(function(){
      target[0].innerHTML=text;
    },1000)
  }
}
export default CSSModules(ComfirmPay,styles)
