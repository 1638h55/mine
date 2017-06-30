import React from 'react';
import {Link} from 'dva/router';
import {InputItem,List} from 'antd-mobile';
import {Head} from '../components/totalmoneylisthead';
import CSSmodules from 'react-css-modules';
import {rem} from 'polished';
import styles from '../styles/lastmoney.less';
let Item = List.Item;
const headstyle = {
  fontSize:rem(24,75),
  color:"#333",
}
const contentstyle = {
  color:'#f50',
  fontWeight:'600',
  fontSize:rem(24,75),
}
class LastMoney extends React.Component {
  constructor(props){
    super(props)
  }
  render(){
    return (
      <div>
        <div styleName="am_div_money">
          <p>剩余借出金额：</p>
          <p><span>3.2</span><span>万元</span></p>
        </div>
          <InputItem
           clear
           children="出借金额"
           styleName="am_input_money"
         ></InputItem>
        <div styleName='am_div_lastmoney'>
            <p>可用资金：</p>
            <p><span>5</span><span>万元</span></p>
            <p styleName="am_p_maxmoeny">最大限额</p>
        </div>
        <List>
          <Item styleName="am_div_discount" extra={<Link to="/mine/discount">五元优惠额</Link>}>
            选择优惠券
          </Item>
          <Item styleName="am_input_money" extra="5000">
            预计收益
          </Item>
        </List>

      </div>
    )
  }
}
export default CSSmodules(LastMoney,styles)
