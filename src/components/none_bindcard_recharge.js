import React from 'react';
import {NavBar,WhiteSpace,NoticeBar,List,InputItem,Button} from 'antd-mobile';
export default class NonebindCard extends React.Component{
  constructor(props) {
      super(props)
  }
  render () {
    return(
      <div>
        <NavBar
            onLeftClick={()=>history.back()}
            leftContent={<img alt="" src = "http://localhost:8000/images/login_08.png"/>}
            mode='light'
            children={<span>充值</span>}>
        </NavBar>
        <WhiteSpace />
        <List>
          <InputItem
             clear
            placeholder="请输入您的真实姓名"
            children="姓名"
          ></InputItem>
          <InputItem
             clear
            placeholder="请输入您的真实身份证号"
            children="身份证号"
          ></InputItem>
          <InputItem
            children="开户银行"
            extra={<select defaultValue="1">
               <option value="1">请选择银行类型</option>
               <option value="2" >工商银行</option>
               <option value="3">包商银行</option>
               <option value="4">徽商银行</option>
             </select>}
          ></InputItem>
          <InputItem
             clear
            placeholder="请输入银行卡号"
            children="银行卡号"
          ></InputItem>
          <NoticeBar>仅支持绑定一张银行卡,该卡同时可做提现卡。</NoticeBar>
          <InputItem
             clear
            placeholder="请输入您要充值的金额(元)"
            children="充值金额"
          ></InputItem>
        </List>

        <Button>确定</Button>
      </div>
    )
  }
}
