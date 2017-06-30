import {rem} from 'polished'
const navstyle = {
  backgroundColor:"#f50",
  color:'#fff',
}
const spanstyle = {
  color:"#fff",
}
const url = {
  url : "http://localhost:8000/images/left.png"
}
const fontSize = {
  fontSize:"16px",
}
const buttonstyle = {
  display:'inline-block',
  width:rem(690,75),
  backgroundColor:"#ff5500",
  height:rem(88,75),
  lineHeight:rem(88,75),
  color:"#fff",
  fontSize:rem(36,75),
  borderRadius:rem(8,75),
}
const smallbutton= {
'color':'#1a90e9',
'fontSize':'0.32rem',
'border':'none',
}
const boxstyle = {
  display:'flex',
  height:rem(88,75),
  justifyContent:'space-between',
  alignItems:'center',
  borderTop:"1px solid #ddd",
  borderBottom:"1px solid #ddd",
  width:"90%",
}
export {navstyle,spanstyle,url,buttonstyle,smallbutton,boxstyle}
