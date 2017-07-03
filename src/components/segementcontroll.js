import {SegmentedControl} from 'antd-mobile';
import {boxstyle} from './variable';
const values = ['可使用','未使用','已使用','已失效'];
export function SegementedControl({value,fn}){
  let val = value || values
  return (
    <SegmentedControl
      style={boxstyle}
      values={val}
      onChange={fn}
      styleName="am_segmented_custom"
      />
  )
}
