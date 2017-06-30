import {Button} from 'antd-mobile';
import {rem} from 'polished';
import {buttonstyle} from './variable'
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
