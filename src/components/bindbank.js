import React from 'react';
import {NavBar, WhiteSpace,InputItem,List,Button,NoticeBar} from 'antd-mobile';
const Item = List.Item;
export default class BindBank extends React.Component {
  constructor(props){
    super(props)
  }
  render () {
    return (
      <div>
        <NavBar leftContent="X">绑定银行卡</NavBar>
        <WhiteSpace size="lg"/>
        <List >
          <Item arrow="down">
            <InputItem
             clear
             placeholder="请输入您的真实姓名"
             autoFocus
             >姓名</InputItem>
          </Item>
          <Item arrow="horizontal">
             <InputItem
              clear
              placeholder="请输入你的真实身份证号"
              autoFocus
            >身份证号</InputItem>
          </Item>
          <Item arrow="horizontal">
            <InputItem
             clear
             placeholder="auto focus in Alipay client"
             autoFocus
           >开户银行</InputItem>
          </Item>
          <Item arrow="horizontal">
            <select defaultValue="1">
             <option value="1">请选择银行类型</option>
             <option value="2" >工商银行</option>
             <option value="3">包商银行</option>
             <option value="4">徽商银行</option>
           </select>
          </Item>
        </List>
        <NoticeBar>仅支持绑定一张银行卡,该卡同时支持提现</NoticeBar>
        <Button>绑定银行卡</Button>
      </div>
    )
  }
  componentDidMount () {

  }
}
