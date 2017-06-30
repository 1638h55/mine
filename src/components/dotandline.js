
import {rem} from 'polished';
import {Dot} from './dot';
const boxstyle = {
  position:'relative',
  paddingTop:rem(25,75),
  paddingBottom:rem(25,75),
  height:rem(25,75),
}
const dotstyle = {
  boxSizing:'border-box',
  height:rem(18,75),
  width:rem(18,75),
  border:"3px solid #ff5500",
  borderRadius:"50%",
  backgroundColor:"#fff",
  top:rem(30,75),
}
const linestyle = {
   width:rem(290,75),
   height:"3px",
   backgroundColor:"#f50",
   position:'absolute',
}
function merstyle(obj,add){
  return Object.assign({},obj,add)
}
const dotright= merstyle(dotstyle,{left:'96%'});
const dotmiddle = merstyle(dotstyle,{left:'48%'});
const lineleft = merstyle(linestyle,{left:rem(30,75),top:"50%"});
const lineright = merstyle(linestyle,{left:rem(360,75),top:"50%"});
export function DotAndLine(props){
  return(
    <div style={boxstyle}>
      <Dot style={dotstyle}/>
      <div style={lineleft}></div>
      <Dot style={dotmiddle}/>
      <div style={lineright}></div>
      <Dot style={dotright}/>
    </div>

  )
}
