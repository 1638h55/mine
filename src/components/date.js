
import CSSModules from 'react-css-modules';
import styles from '../styles/date.less';
const input_date = {
  width:"100%",
  height:"100%",
  background:"url('http://localhost:8000/images/date_21.png') 96% 50% no-repeat",
}
const boxstyle = {
  height:"100%",
}
var value = "";
function getAttr (e) {
   value = e.target.getAttribute("data-placeholder");
}
function removePlaceholder (e) {
  getAttr(e);
  e.target.removeAttribute("data-placeholder")
}
function setPlaceholder(e){
   if(e.target.value == '') {
     e.target.setAttribute('data-placeholder',value);
   }
   console.log(e.target.value)
}
 function datePicker (props) {
   console.log(props)
  return(
    <div style={boxstyle}>
        <input type="date" style={input_date} data-placeholder={props.date} onFocus={(e)=>removePlaceholder(e)} onBlur={(e)=>setPlaceholder(e)}/>
    </div>
  )
}
export default CSSModules(datePicker,styles)
