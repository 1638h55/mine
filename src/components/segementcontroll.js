import {SegmentedControl} from 'antd-mobile';
const boxstyle = {
  display:'flex',
  height:"1.173rem",
  justifyContent:'space-between',
  alignItems:'center',
  borderTop:"1px solid #ddd",
  borderBottom:"1px solid #ddd",
  width:"90%",
}
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
