import React from 'react';
import CSSmodules from 'react-css-modules';
import styles from '../styles/single.less';
import {Steps} from 'antd-mobile';
import {whiteSpace} from './whitespace';
import {rem} from 'polished';
import {DotAndLine} from './dotandline';
const whitestyle = {
  height:rem(25,75),
  backgroundColor:"#efeff4",
}
class SinglePro extends React.Component {
  constructor(props){
    super(props)
  }
  render(){
    return(
      <div >
        <div styleName="am_div_box">
          <div>
            <span>好瑞鹰平行进口车丰田塞纳34555CC</span>
          </div>
          <div styleName='am_list_item'>
            <div styleName="am_list_child">
              <span styleName="am_span_rate">12<span styleName="am_symbol">%+</span>0.5<span styleName="am_symbol">%</span></span>
                <p styleName="am_p_item">年化利率:</p>
            </div>
            <div>
              <span styleName="am_span_rate">90<span styleName="am_symbol">天</span></span>
                <p styleName="am_p_item">借款期限:</p>
            </div>
          </div>
        </div>
        {whiteSpace(whitestyle)}
        <div styleName="am_list_state">
          <div styleName='am_list_item'>
            <p styleName="am_p_item">起息时间：</p>
            <p styleName="am_p_item">结束时间：</p>
            <p styleName="am_p_item">还款方式：</p>
          </div>
          <DotAndLine/>
          <div styleName='am_list_item'>
            <span styleName="am_p_item">2017年05月21日</span>
            <span styleName="am_p_item">2017年08月19日</span>
            <span styleName="am_p_item">按月付息,到期还本</span>
          </div>
      </div>
      </div>
  )
}
}
export default CSSmodules(SinglePro,styles)
