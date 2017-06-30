import React from 'react';
import {TextareaItem,InputItem} from 'antd-mobile';
import MyNavBar from './navbar.js';
import {rem} from 'polished';
import {whiteSpace} from './whitespace';
import {anotherButton} from './anotherbutton';
const style = {
  backgroundColor:'#ddd',
}
const whtiestyle = {
  height:rem(40,75),
}
export default class Advice extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      hasError: false,
      value: '',
      loaded:false,
      disabled:false,
      children:"确定",
      style:null,
    }
  }
  getCofirmWord = (e)=> {
    this.setState({
      disabled:true,
      style:style
    })
  }
  render () {
    return (
      <div>
      <MyNavBar title="意见反馈"/>
      {whiteSpace(whtiestyle)}
      <TextareaItem
          placeholder="请留下您的宝贵意见与建议，我们将努力改进"
          data-seed="logId"
          clear
          autoFocus
          style={{height:'400px'}}
        />
        {whiteSpace(whtiestyle)}
        <InputItem
          className="am_input_placeholder"
          placeholder="请留下您的手机号，以便我们尽快回复您"
          clear>
          </InputItem>
        {whiteSpace(whtiestyle)}
          {anotherButton(this.getCofirmWord,{...this.state})}
      </div>
    )
  }
}
