import React from 'react';
import {List,Card} from 'antd-mobile';
import {rem} from 'polished';
import CSSModules from 'react-css-modules';
import styles from '../styles/borrower.less';
let Item = List.Item;
const thumstyle = {
  width:rem(200,75),
  height:rem(200,75),
}
@CSSModules(styles)
class Borrower extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      clicked:false,
      arrow:"horizontal",
      active:false,
      inactive:true,
    }
  }
  onChange=(e)=>{
    const clicked = !this.state.clicked;
    this.setState({
      clicked:!this.state.clicked,
    })
    clicked ? this.setState({arrow:"down"}) : this.setState({arrow:"horizontal"})
  }
  render () {
    return(
      <Card>
      <Item arrow={this.state.arrow} children="借款人信息" onClick={this.onChange}>
      </Item>
      {this.state.clicked ? <Card.Header
        thumb="https://cloud.githubusercontent.com/assets/1698185/18039916/f025c090-6dd9-11e6-9d86-a4d48a1bf049.png"
        thumbStyle={thumstyle}
        extra={<div className='am_div_extra'><div>借款人信息</div>
                <div>性别：<span>女</span></div>
                <div>常驻地址：<span>本溪市</span></div>
                <div>是否购房：<span>有</span></div>
                <div>单位：<span>个体</span>收入：<span>8000</span></div>
                 <div>借款用于资金周转</div></div>}
      /> :""}

   </Card>
    )
  }
}
export default Borrower
