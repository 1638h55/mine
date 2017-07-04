import {whiteSpace} from './whitespace'
import {Link} from 'dva/router'
import {rem} from 'polished'
const whtitestyle = {
  height:rem(25,75),
  backgroundColor:"#efeff4",
}
export function showList({path,money,name,index}) {
  return(
    <Link to={path} className="am_a_detail" key={index}>
      <li styleName='li'>
    <p styleName="pro">{name}<span styleName='amarrow'><img styleName='amimg' alt="" src="http://localhost:8000/images/arrow_10.png"/></span></p>
    <div styleName='direction'>
      <div styleName="borrowmoney">
          <div>出借金额</div>
          <div styleName='money'>{money}</div>
      </div>
      <div styleName="borrowmoney">
          <div>预计收益：<span styleName='color'>2522元</span></div>
          <div styleName="rate_box">年化率：<span styleName='rate'>12.5%</span></div>
      </div>
    </div>
    <div styleName="state">
      <div><span styleName="am_span_word">状态：</span><span styleName='am_span_state'>还款中</span></div>
      <div><span styleName="am_span_word">起止日期：</span><span>2017-05-17至2017-08-16</span></div>
    </div>
    </li>
    {whiteSpace(whtitestyle)}
    </Link>
  )
}
