import React from 'react';
import {List} from 'antd-mobile';
import {Dot} from './dot.js';
import {rem} from 'polished';
import MyNavBar from './navbar';
import {getTotalmoeny} from '../services/example.js';
import CSSmodules from 'react-css-modules';
import styles from '../styles/totalmoney.less';
import {whiteSpace} from './whitespace';
import {Head} from './totalmoneylisthead.js';
const dotstylered = {
  backgroundColor:'#ff781c',
  width:rem(15,75),
  height:rem(15,75),
  top:"2.34rem",
  left:"0.4rem",
}
const dotstylegreen = {
  backgroundColor:'#5cd04d',
  width:rem(15,75),
  height:rem(15,75),
  top:"7.05rem",
  left:"0.4rem",
  zIndex:"100",
}
const dotstyleblue = {
  backgroundColor:'#6da5f2',
  width:rem(15,75),
  height:rem(15,75),
  top:"11.8rem",
  left:"0.4rem",
  zIndex:"101",
}
const whitestyle = {
  height:rem(20,75),
}
const whitestyle2 = {
  height:rem(25,75),
}
@CSSmodules(styles)
export default class TotalMoney extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      money:null,
    }
  }
  render () {
    return(
      <div>
        <MyNavBar title="资产总览"/>
        <Dot style={dotstylered}/>
        <Dot style={dotstylegreen}/>
        <Dot style={dotstyleblue}/>
        <List renderHeader={() => <Head money="账户总资产" number="￥20000"/>}>
          {whiteSpace(whitestyle)}
          <div styleName="ownlist"><span styleName="am_span_title">账户余额</span><span>2000</span></div>
          <div styleName="ownlist"><span styleName="am_span_title">代收本金</span><span>2000</span></div>
          <div styleName="ownlist"><span styleName="am_span_title">代收收益</span><span>2000</span></div>
          <div styleName="ownlist"><span styleName="am_span_title">提现冻结</span><span>2000</span></div>
          {whiteSpace(whitestyle)}
        </List>
        {whiteSpace(whitestyle2)}
        <List renderHeader={() => <Head money="账户余额" number="￥20000"/>}>
          {whiteSpace(whitestyle)}
          <div styleName="ownlist"><span styleName="am_span_title">账户余额</span><span>2000</span></div>
          <div styleName="ownlist"><span styleName="am_span_title">账户余额</span><span>2000</span></div>
          <div styleName="ownlist"><span styleName="am_span_title">账户余额</span><span>2000</span></div>
          <div styleName="ownlist"><span styleName="am_span_title">账户余额</span><span>2000</span></div>
          {whiteSpace(whitestyle)}
        </List>
        {whiteSpace(whitestyle2)}
        <List renderHeader={() => <Head money="资金流量"/>}>
          {whiteSpace(whitestyle)}
          <div styleName="ownlist"><span styleName="am_span_title">账户余额</span><span>2000</span></div>
          <div styleName="ownlist"><span styleName="am_span_title">账户余额</span><span>2000</span></div>
          <div styleName="ownlist"><span styleName="am_span_title">账户余额</span><span>2000</span></div>
          <div styleName="ownlist"><span styleName="am_span_title">账户余额</span><span>2000</span></div>
          {whiteSpace(whitestyle)}
        </List>
        {whiteSpace(whitestyle2)}
      </div>
    )
  }
  componentDidMount () {
    getTotalmoeny().then(res=>{
      this.setState({
        money:res.data.property,
      },function(){
        return <div>{this.state.money.total.totalmoney}</div>
      })
    });
  }
}
