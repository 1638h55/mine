import React from 'react';
import {NavBar,Flex} from 'antd-mobile';
import styles from '../styles/contract.less';
import className from 'classnames';
import CSSmodules from 'react-css-modules';
import MyNavBar from './navbar.js';
 class Contract extends React.Component {
  constructor(props){
    super(props)
  }
  render () {
    return (
      <div>
        <MyNavBar title="用户协议"/>
        <div styleName='flex'>
            新华网阿斯塔纳6月7日消息7日，国家主席习近平乘专机抵
            达哈萨克斯坦共和国首都阿斯塔  纳, 开始对哈萨克斯坦共和国进行国事访问并出席上
            海合作组织成员国元首理事会第十七次会议和阿斯塔纳
            专项世博会开幕式。
        </div>
      </div>

    )
  }
}
export default CSSmodules(Contract,styles)
