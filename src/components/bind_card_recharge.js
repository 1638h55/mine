import React from 'react';
import {NavBar,InputItem,Button} from 'antd-mobile';
import {Link} from 'dva/router';
import CSSmodules from 'react-css-modules';
import classNames from 'classnames';
import styles from '../styles/recharge.less';
class Bindcardcharge extends React.Component {
  constructor(props){
    super(props)
  }
  render () {
    return(
      <div>
      <NavBar
          onLeftClick={()=>history.back()}
          leftContent={<img alt="" src = "http://localhost:8000/images/login_08.png"/>}
          mode='light'
          children={<span styleName='span'>充值</span>}
          styleName='light'
      ></NavBar>
      <InputItem
         clear
        type="number"
        placeholder="请输入要充值的金额"
        children="充值金额"
      ></InputItem>
      <Link to="/mine/recharge/confirmpage">立即充值</Link>
      </div>
    )
  }
}
 export default CSSmodules(Bindcardcharge,styles)
