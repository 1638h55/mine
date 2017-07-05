import {rem} from 'polished';
const headstyle = {
  display:"flex",
  justifyContent:'space-between',
}
const headmoneystyle = {
  color:'#f50',
  fontSize:rem(36,75),
}
export function Head(props) {
  let stylebox = Object.assign({},headstyle,props.style)
  let stylecontent = props.contentstyle || headmoneystyle;
  let leftstyle = props.leftstyle;
  console.log(props.callback)
  return(
   <div style={stylebox} onClick={(e)=>props.callback(e)}>
      <span style={leftstyle}>{props.money}</span><span style={stylecontent}>{props.number}</span>
    </div>

  )
}
