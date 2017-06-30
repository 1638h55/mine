import {Result} from 'antd-mobile';
export function Results({src,result,style,time,pay,timestyle}){
  return(
    <Result
      imgUrl={src}
      title={<span children={result} style={style}></span>}
      message={<div style={pay}>支付金额￥<span>2000</span><br /><span style={timestyle}>{time}</span></div>}
  />
  )
}
