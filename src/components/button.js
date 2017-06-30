
import {Button} from 'antd-mobile';
import {smallbutton} from './variable';
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
