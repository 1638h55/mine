import React from 'react';
import CSSModules from 'react-css-modules';
import styles from '../styles/mymoney.less';
import {Tag,List,Modal,Toast,Button} from 'antd-mobile';
import MyNavBar from './navbar.js';
import {FilterWindow} from './fifter';
let Item = List.Item;
const sty = {
  display:'flex',
}

const items = {
  width:'30%'
}
 class MyMoney extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      isShow:false,
      isActive:""
    };
  }
  close=()=>{
    this.setState({
      isShow:!this.state.isShow,
    })
  }
  controll=(e)=>{
    var that =this;
    this.setState({
      isActive:true,
    })
    setTimeout(function(){
      that.setState({
        isActive:""
      })
    },2000)
  }
  render(){
    return(
      <div>
        <MyNavBar title="资金流水"/>
        <List>
            <Item styleName="line"
                  extra={<span onClick={()=>this.close()} className='am_span_choose'>筛选</span>}> </Item>
            <Item styleName='item'>
              <div styleName="top"><span>平台注册奖励</span><span styleName="money">888</span></div>
              <div styleName="bottom">2017-05-09 03:47:42 <span styleName='bottomspan'>余额:0.00</span></div>
            </Item>
            <Item styleName='item'>
              <div styleName="top"><span>充值</span><span styleName="money">888</span></div>
              <div styleName="bottom"><span>2017-05-09 03:47:42</span><span styleName='bottomspan'>余额:0.00</span></div>
            </Item>
            <Item styleName='item'>
              <div styleName="top"><span>提现</span><span styleName="money">888</span></div>
              <div styleName="bottom"><span>2017-05-09 03:47:42</span><span styleName='bottomspan'>余额:0.00</span></div>
            </Item>
        </List>
        {this.state.isShow ? <FilterWindow
              close={this.close}
              controller={this.controll}
              isActive={this.state.isActive}
          /> : ''}
        </div>
    )
  }
}
export default CSSModules(MyMoney,styles)
