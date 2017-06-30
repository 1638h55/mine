import {Button} from 'antd-mobile';
import {rem} from 'polished';
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
export function anotherButton(callback,{style,loaded,disabled,children}){
  let newstyle =Object.assign({},buttonstyle,style);
  return(
    <Button
          loading={loaded}
          disabled={disabled}
          onClick={callback}
          children={<span style={newstyle}>{children}</span>}>
    </Button>
  )

}
