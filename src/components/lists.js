
import {myBadge} from './badge'
import {Link} from 'dva/router'
export function proLists (money,name,rate,recon,time,way,index) {
  return(
    <Link to='/detail' styleName='a'>
      <li key={index} styleName='li'>
          <div styleName='box'>
              <div styleName='boxname'>{name}</div>
              <div styleName="boxchild">
                <div styleName="one">
                    <p styleName="am_p_number">
                      <span styleName="am_p_rate">{rate[0]}</span>%
                      <span>+</span>
                      <span styleName="am_p_rate">{rate[1]}</span>%
                    </p>
                    <p styleName='am_p_text'>年化利率</p>
                </div>
                <div styleName="one">
                  <p styleName="am_div_day">98</p>
                  <p styleName='am_p_text'>期限（天）</p>
                </div>
              </div>
          </div>
          <div styleName='am_div_lastmoney'>
              <p>剩余可投：<span>{money}</span></p>
              <p>{way}</p>
          </div>
          {myBadge(recon)}
      </li>
    </Link>
  )
}
