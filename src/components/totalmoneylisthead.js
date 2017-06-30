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
  let stylebox = props.style || headstyle;
  let stylecontent = props.contentstyle || headmoneystyle;
  return(
   <div style={stylebox}>
      <span>{props.money}</span><span style={stylecontent}>{props.number}</span>
    </div>

  )
}
