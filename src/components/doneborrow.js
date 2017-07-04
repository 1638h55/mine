
import {List} from 'antd-mobile'
import {Head} from '../components/totalmoneylisthead'
import {rem} from 'polished'
import {whiteSpace} from './whitespace'
const headstyle = {
  fontSize:rem(24,75),
  color:"#333",
  marginLeft:rem(-20,75),
}
const contentstyle = {
  color:'#f50',
  fontWeight:'600',
  fontSize:rem(24,75),
}
const am_div_style = {
  fontSize:rem(24,75),
  color:"#666",
  display:"flex",
  justifyContent:'space-between',
  boxSizing:'border-box',
  paddingLeft:rem(30,75),
  paddingRight:rem(30,75),
  height:rem(60,75),
  marginTop:rem(-20,75),
}
const span = {
  display:'block',
  height:"100%",
  lineHeight:rem(60,75),
}
const whitestyle = {
  height:rem(25,75)
}
function mergeStyle(obj,ano){
  return Object.assign({},obj,ano)
}
const spaccolor = mergeStyle(span,{color:'#f50',fontSize:rem(36,75)})
export function DoneBorrowUi (props){
  return(
    <div>
    <List renderHeader={() => <Head money="剩余金额出借:" number="3.2万" style={headstyle} contentstyle={contentstyle}/>}>
      <div style={am_div_style}><span style={span}>出借金额</span><span style={spaccolor}>2000</span></div>
      <div style={am_div_style}><span style={span}>预计收益</span><span style={spaccolor}>2000</span></div>
      <div style={am_div_style}><span style={span}>出借时间</span><span style={spaccolor}>2000</span></div>
    </List>
    {whiteSpace(whitestyle)}
    </div>

  )
}
