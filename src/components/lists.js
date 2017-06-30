
import {myBadge} from './badge.js';
export function proLists (money,name,rate,recon,time,way,index) {
  return(
    <li key={index} styleName='li'>
        <div styleName='box'>
            <div>{name}</div>
            <div styleName="boxchild">
              <div styleName="one">
                  <p>
                    <span>{rate[0]}</span>
                    <span>{rate[1]}</span>
                  </p>
                  <p>年化利率</p>
              </div>
              <div styleName="one">
                <p>98</p>
                <p>期限（天）</p>
              </div>
            </div>
        </div>
        <div>
            <p>剩余可投：<span>{money}</span></p>
            <p>{way}</p>
        </div>
        {myBadge(recon)}
    </li>
  )
}
