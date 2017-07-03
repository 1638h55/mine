import {Button,NoticeBar} from 'antd-mobile';
import {loadmore_buttonstyle,loadmore_img,loadmorestyle} from './variable';
export function loadMoreButton(state,callback) {
  return(
    <div style={loadmorestyle}>
      {!state ? <Button
        onClick={callback}
        children={<div style={loadmore_buttonstyle}><span>点击查看更多详情</span><img style={loadmore_img} alt="" src='/images/arrowdown.png'/></div>}
        ></Button>:"" }
          <NoticeBar mode="closable">
        好收益警告，理财有风险，投资需谨慎
      </NoticeBar>
    </div>

  )
}
