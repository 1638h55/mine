
import {List} from 'antd-mobile'
import {Head} from './totalmoneylisthead'
import {rem} from 'polished'
const boxstyle = {
  marginLeft:"-0.2rem",
}
const contentstyle = {
  backgroundImage:"url('http://localhost:8000/images/arrow_10.png')" ,
  backgroundRepeat:"no-repeat",
  display:'inline-block',
  width:rem(20,75),
  height:rem(24,75),
  backgroundSize:"100%",
}
const contentstyle2 = {
  backgroundImage:"url('http://localhost:8000/images/arrow_12.png')" ,
  backgroundRepeat:"no-repeat",
  display:'inline-block',
  width:rem(20,75),
  height:rem(24,75),
  backgroundSize:"100%",
}
const leftstyle = {
  fontSize:rem(28,75),
  color:"#333",
}
export function RepayMent(callback,t){
  console.log(t)
  return(
    <List renderHeader={() => <Head
          money="借款合同"
          style={boxstyle}
          callback={()=>callback(t)}
          leftstyle={leftstyle}
          contentstyle= {t%2==0 ? contentstyle: contentstyle2} />}>
   </List>
  )
}
