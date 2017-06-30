import React from 'react';
import {List} from 'antd-mobile';
import {Head} from './totalmoneylisthead.js';
import styles from '../styles/paybackinfo.less';
import CSSmodules from 'react-css-modules';
import {rem} from 'polished';
let Item = List.Item;
const contentstyle = {
  backgroundImage:"url('http://localhost:8000/images/arrow_10.png')" ,
  backgroundRepeat:"no-repeat",
  display:'inline-block',
  width:rem(20,75),
  height:rem(24,75),
  backgroundSize:"100%",
}
const leftstyle = {
  fontSize:rem(28,75),
  color:"#333",
}
const boxstyle = {
  marginLeft:"-0.2rem",
}
@CSSmodules(styles)
class PayBackInfo extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      paybackinfo :[],
      clicked:false,
      active:false,
      inactive:true,
      contentstyle:contentstyle,
    }
  }
  onChange=(e)=>{
    const clicked = !this.state.clicked;
    this.setState({
      clicked:!this.state.clicked,
    })
    if(clicked){
      this.setState({
        contentstyle:Object.assign({},contentstyle,{backgroundImage:"url('http://localhost:8000/images/arrow_12.png')" }),
      })
    }else{
      this.setState({
        contentstyle:Object.assign({},contentstyle,{backgroundImage:"url('http://localhost:8000/images/arrow_10.png')" }),
      })
    }
  }
  render () {
    return (
        <List renderHeader={() => <Head money="还款信息" style={boxstyle} callback={this.onChange} leftstyle={leftstyle} contentstyle={this.state.contentstyle}/>}>
        {this.state.clicked ?  <div styleName="itemconatainer">
            <div styleName="hasborder">
             <div styleName="am_div_explain">
               <div>还款期数: <span>第1期</span></div>
               <div styleName="color">还款时间: <span>2014-05-09</span></div>
             </div>
             <div styleName="am_div_explain">
               <div>应还利息: <span>2000</span></div>
               <div>应还本金: <span>2000</span></div>
             </div>
            </div>
            <div styleName="itembox">
            <div styleName="am_div_explain">
              <div>还款期数: <span>第1期</span></div>
              <div>还款时间: <span>2014-05-09</span></div>
            </div>
            <div styleName="am_div_explain">
              <div>应还利息: <span>2000</span></div>
              <div>应还本金: <span>2000</span></div>
            </div>
            </div>
          </div> :""
        }

       </List>
    )
  }
  componentWillReceiveProps(nextProps){
    this.setState({
      paybackinfo : nextProps.paybackinfo
    })
  }
}
export default PayBackInfo
