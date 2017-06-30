import {SegmentedControl} from 'antd-mobile';
import {boxstyle} from './variable'
export function SegementedControl(props){
  return (
    <SegmentedControl
      style={boxstyle}
      values={['可使用','未使用','已使用','已失效']}
      onChange={props.callback}
      styleName="am_segmented_custom"
      />
  )
}
