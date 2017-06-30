import React from 'react';
import {Result,Button,Toast,Modal} from 'antd-mobile';
import {Link} from 'dva/router';
import {anotherButton} from './anotherbutton'
import MyNavBar from './navbar';
import {whiteSpace} from './whitespace';
import {rem} from 'polished';
import {navstyle,spanstyle,url} from "./variable";
import {Results} from './resultinfo';
const whitestyle = {
  height:rem(40,75),
}
const successstyle = {
  color:'#00ad00',
  fontSize:rem(34,75)
}
const failedstyle = {
  color:'#f21400',
  fontSize:rem(34,75)
}
const pay = {
  fontSize:rem(28,75),
  color:"#333",
}
const timestyle = {
  fontSize:rem(24,75),
  color:"#999",
}
class Reasult extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      time:'',
      issuccess:"",
      src:"",
      result :'',
      style:{},
      pay:pay,
      timestyle:timestyle,
      children:"",
      where:""
    }
  }
  gosomeWhere=(url)=>{
    location.href=url
  }
  getTime=()=>{
    let _date = new Date();
    let _year = _date.getFullYear();
    let _months = _date.getMonth()+1;
    let _day = _date.getDate();
    let _hours = _date.getHours();
    let _minustes = _date.getMinutes();
    let _seconds = _date.getSeconds();
    return _date.toLocaleString();
    let _now= _year+"年"+_months+"月"+_day+"日";
  }
  render () {
    return (
      <div>
          <MyNavBar title="支付结果" style={navstyle} spanstyle={spanstyle} url={url}/>
          <Results {...this.state}/>
      {whiteSpace(whitestyle)}
      {anotherButton(()=>{this.gosomeWhere(this.state.where)},{children:this.state.children})}
      </div>
    )
  }
  componentDidMount () {
    let _now = this.getTime();
    if(3>2){
      this.setState({
          result:'支付成功',
          src:'http://localhost:8000/images/result_06.png',
          style:successstyle,
          children:"立即出借",
          where:"http://localhost:8000/recommend",
      },()=>console.log(this.state.where))
    }else{
      this.setState({
        result:"支付失败",
        src:'http://localhost:8000/images/result_08.png',
        style:failedstyle,
        children:"重新支付",
        where:"http://localhost:8000/detail"
      },()=>console.log(this.state.where))
    }
    this.setState({
      time:_now,
    })
  }
}
export default Reasult
