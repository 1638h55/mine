import React from 'react';
import {Link} from 'dva/router';
import {InputItem,List} from 'antd-mobile';
import {Head} from '../components/totalmoneylisthead';
import CSSmodules from 'react-css-modules';
import {rem} from 'polished';
import styles from '../styles/lastmoney.less';
class LastMoney extends React.Component {
  constructor(props){
    super(props)
  }
  render(){
    return (
      <div styleName='box'>
        <div styleName="am_div_money">
          <p>剩余借出金额：</p>
          <p><span styleName='am_span_bond'>3.2</span><span>万元</span></p>
        </div>
        <div>
          <InputItem
           clear
           children="出借金额"
           type="money"
           styleName="input"
           labelNumber="7"
           name="money"
           editable
         ></InputItem>
        </div>

        <div styleName='am_div_lastmoney'>
            <p>可用资金：<span>5</span><span>万元</span></p>
            <p styleName="am_p_maxmoeny">最大限额</p>
        </div>
        <div>
          <div>
          <Link to="/mine/discount" styleName="am_div_discount">
            <span>选择优惠券</span><span styleName="am_span_p">5元优惠券<img styleName="img" alt="" src='/images/arrow_10.png'/></span>
          </Link>
          </div>
          <div styleName="am_input_money">
            <span>预计收益</span><span styleName='am_span_profit'>$5000</span>
          </div>
        </div>
      </div>
    )
  }
}
export default CSSmodules(LastMoney,styles)
