
import {Button} from 'antd-mobile';

const buttonstyle = {
'color':'#1a90e9',
'fontSize':'0.32rem',
'border':'none',
}
export function myButton(callback,{style,loaded,disabled,children}){
  style = style || buttonstyle;
  return (
    <Button
          size="small"
          inline
          loading={loaded}
          disabled={disabled}
          onClick={callback}
          children={<span style={style}>{children}</span>}>
    </Button>
  )
}
