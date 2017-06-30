import React from 'react';
import {List,Card} from 'antd-mobile';
import CSSModules from 'react-css-modules';
import styles from '../styles/borrower.less';
//import {clearFix,rem} from 'polished';
import classnames from 'classnames';
let Item = List.Item;
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
      clicked:!this.state.clicked
    })
    if(clicked){
      this.setState({
        arrow:"down",
        active:true,
        inactive:false,
      })
    }else{
      this.setState({
        arrow:"horizontal",
        active:false,
        inactive:true,
      })
    }
  }
  render () {
    let mix_class=classnames({
      'active':this.state.active,
      'inactive':this.state.inactive,
    })
    return(
      <Card>
      <Item arrow={this.state.arrow} children="借款人信息" onClick={this.onChange}>
      </Item>
       <Card.Header
        className={mix_class}
         thumb="https://cloud.githubusercontent.com/assets/1698185/18039916/f025c090-6dd9-11e6-9d86-a4d48a1bf049.png"
         thumbStyle={{width:'200px'}}
         extra={<div><div  className="sex">借款人信息</div>
                 <div>性别：<span>女</span></div>
                 <div>常驻地址：<span>本溪市</span></div>
                 <div>是否购房：<span>有</span></div>
                 <div>单位：<span>个体</span>收入：<span>8000</span></div>
                  <div>借款用于资金周转</div></div>}
       />
   </Card>
    )
  }
}
export default CSSModules(Borrower,styles);
