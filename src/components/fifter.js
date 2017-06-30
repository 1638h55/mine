import React from 'react';
import {rem} from 'polished'
import {Button,Flex} from 'antd-mobile';
import datePicker from './date.js';
const stylebox = {
  width:'100%',
  height:"100%",
  position:'absolute',
  left:'0',
  top:'0',
  zIndex:'1000',
  backgroundColor:'rgba(0,0,0,0.5)',
  boxSizing:'border-box',
  padding:'0 0.5rem',
  fontSize:rem(26,75),
  color:"#333",
}
const stylediv = {
  width:'100%',
  marginTop:'40%',
  backgroundColor:'#fff',
  borderRadius:'10px'
}
const condition={
  display:'flex',
  justifyContent:'space-between',
  boxSizing:'border-box',
  padding:'0.4rem',
  fontSize:rem(30,75),
  color:"#666"
}
const flexbox = {
  display:'flex',
  alignItems:'center',
  color:"#999"

}
const child = {
  flex:'1',
}
const body = {
    boxSizing:'border-box',
    padding:'0 0.4rem 0.4rem 0.4rem',
}
const select={
  width:"100%",
  border:'1px solid #333',
  height:'0.8rem',
}
const condition_time = {
  height:'0.8rem',
  width:"30%",
}
const condition_time1 = {
  height:'0.8rem',
  width:"30%",
  border:"1px solid #333",
}
const span = {
  flex:'1',
  textAlign:'center',
  lineHeight:'0.8rem',
  color:"#333"
}
const input = {
  width:"80%",
  border:"1px solid #333",
  height:"100%"
}
const p = {
  padding:"0.3rem 0 0.2rem 0",
}
const input_date = {
  width:"100%",
  height:"100%",
  background:"url('http://localhost:8000/images/date_21.png') 96% 50% no-repeat",
}
// ::-webkit-datetime-edit-year-field { color: purple; }
 function postData (props,e){
  //提交数据
    setTimeout(props.callback,3000)
    props.controller();
  }
const clear = function() {
//清除数据
}
export function FilterWindow(props){
    return(
        <div style={stylebox}>
            <div style={stylediv}>
                  <div style={condition}>
                        <span>条件筛选</span><span onClick={()=>props.close()}>X</span>
                  </div>
                  <div style={body}>
                    <div>
                      <select style={select}>
                        <option key='1'>全部</option>
                        <option>提现</option>
                        <option>出借</option>
                        <option>充值</option>
                        <option>收入</option>
                        <option>回收本金</option>
                        <option>其他</option>
                      </select>
                    </div>
                    <div><p style={p}>日期</p>
                        <div style={flexbox}>
                          <div style={condition_time1}>
                                {datePicker({date:"开始时间"})}
                          </div>
                          <span style={span}>到</span>
                          <div style={condition_time1}>
                                {datePicker({date:"结束时间"})}
                          </div>
                        </div>
                    </div>
                    <div>
                        <p style={p}>金额筛选</p>
                        <div style={flexbox}>
                          <div style={condition_time}><input type="number" placeholder="" style={input}/>元</div>
                          <span style={span}>到</span>
                          <div style={condition_time}><input type="number" placeholder="" style={input}/>元</div>
                        </div>
                    </div>
                </div>
                <div style={flexbox}>
                {props.isActive ? <Button
                  type='primary'
                  style={child}
                  disabled
                  children="加载中"
                ></Button> : <Button
                  type='primary'
                  style={child}
                  onClick={(e)=>postData(props,e)}
                  children="确定"
                ></Button>}
                  <Button
                    style={child}
                    onClick={()=>clear()}
                    children="重置">
                  </Button>
                </div>
            </div>
        </div>
    )

}
