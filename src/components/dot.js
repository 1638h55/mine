import {rem} from 'polished';
const style= {
  width:rem(24,75),
  height:rem(24,75),
  backgroundColor:"#efeff4",
  position:"absolute",
  borderRadius:"50%",
}
export function Dot(props){
  var styles = Object.assign({}, style,props.style);
  return(
    <div style={styles}></div>
  )
}
