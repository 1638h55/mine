import React from 'react';
import {Link} from 'dva/router';
import CSSModules from 'react-css-modules';
import styles from '../styles/mydiscount.less';
import {whiteSpace} from './whitespace';
import {rem} from 'polished';
import {Dot} from './dot';
const where = {
  left:rem(-12,75),
  top:"50%",
}
const there = {
  right:rem(-10,75),
  top:"50%",
}
const reddot = {
  width:rem(20,75),
  height:rem(20,75),
  right:rem(20,75),
  top:"0",
  backgroundColor:"#ff2a00",
}
const whitestyle = {
  height:rem(25,75),
  backgroundColor:'#efeff4',
}
import {ListView,WhiteSpace} from 'antd-mobile';
class MyDiscountUi extends React.Component {
  constructor(props){
    super(props)
  }
  render() {
    return(
        <ul styleName="am_ul_box">
             {whiteSpace(whitestyle)}
              <li styleName='am_li_flexbox'>
              <Dot style={where}/>
              <Dot style={there}/>
                <p styleName="am_line_box"></p>
                <div styleName="am_block_box">

                  <div styleName="am_div_left">
                    <div styleName="am_div_pirce"><span styleName='am_span_symbol'>￥</span>12</div>
                    <div styleName="am_div_text">出借满一百可用</div>
                  </div>
                  <div styleName="am_div_right">
                    <Dot style={reddot}/>
                    <div>
                      <p styleName="am_div_inest">投资红包</p>
                      <p styleName="am_p_text">来源：<span>新人五元优惠券</span></p>
                    </div>
                    <div>
                      <p styleName="am_p_time">使用时间</p>
                      <p styleName="am_p_text">2017-05-09~2017-06-08</p>
                    </div>
                  </div>
                </div>
              </li>
             {whiteSpace(whitestyle)}
            <li>
              <div>
                <div>￥12</div>
                <div>出借满一百可用</div>
              </div>
              <div>
                <div>
                  <p>投资红包</p>
                  <p>来源：<span>新人五元优惠券</span></p>
                </div>
                <div>
                  <p>使用时间</p>
                  <p>2017-05-09~2017-06-08</p>
                </div>
              </div>
            </li>
        </ul>
    )

  }
}
export default CSSModules(MyDiscountUi,styles)
