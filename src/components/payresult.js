import React from 'react';
import {NavBar,WhiteSpace,Result,Button,Toast,Modal} from 'antd-mobile';
import {Link} from 'dva/router';
import MyNavBar from './navbar';
class Reasult extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      time:'',
      result :'',
    }
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
          <MyNavBar title="支付结果"/>
          <WhiteSpace size="sm"/>
          <Result
        title={this.state.result}
        message={<div>支付金额￥<span>2000</span><br />支付时间为{this.state.time}</div>}
      />
      <WhiteSpace/>
      <Link to="/">返回首页</Link>
      </div>
    )
  }
  componentDidMount () {
    let _now = this.getTime();
    if(3<2){
      this.setState({
          result:'支付成功',
      })
    }else{
      this.setState({
        result:"支付失败",
      })
    }
    this.setState({
      time:_now,
    })
  }
}
export default Reasult
