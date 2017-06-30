import React from 'react';
import MyNavBar from './navbar.js';
import {InputItem,Button} from 'antd-mobile';
export default class Relatived extends React.Component {
  constructor(props){
    super(props)
  }
  render () {
    return(
      <div>
          <MyNavBar title="关联账号"/>
          <InputItem
              placeholder="请输入用户名"
              type="text"
          />
          <InputItem
              placeholder="请输入密码"
              type="password"
          />
          <Button
              type="primary"
              children="关联"
              onClick={()=>console.log(0)}
              ></Button>
      </div>

    )
  }
}
