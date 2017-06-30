import React from 'react';
import {List} from 'antd-mobile';
import styles from '../styles/paybackinfo.less';
import CSSmodules from 'react-css-modules';
import classnames from 'classnames';
let Item = List.Item;
class PayBackInfo extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      paybackinfo :[],
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
    // let btnclass = classnames({
    //   'border':true,
    //   'flexbox':true,
    // })
    let mix_class=classnames({
      'active':this.state.active,
      'inactive':this.state.inactive,
    })
    return (
      <List>
          <Item arrow={this.state.arrow} children="还款信息" onClick={this.onChange}>
          </Item>
          <div className={mix_class}>
            <Item className='border'>
             <div ref="paybackinfo">
               <div>还款期数: <span>第1期</span></div>
               <div>还款时间: <span>2014-05-09</span></div>
             </div>
             <div>
               <div>应还利息: <span>2000</span></div>
               <div>应还本金: <span>2000</span></div>
             </div>
            </Item>
            <Item className='border'>
            <div>
              <div>还款期数: <span>第1期</span></div>
              <div>还款时间: <span>2014-05-09</span></div>
            </div>
            <div>
              <div>应还利息: <span>2000</span></div>
              <div>应还本金: <span>2000</span></div>
            </div>
            </Item>
            <Item className='border'>
              <div>
                <div>还款期数: <span>第1期</span></div>
                <div>还款时间: <span>2014-05-09</span></div>
              </div>
              <div>
                <div>应还利息: <span>2000</span></div>
                <div>应还本金: <span>2000</span></div>
              </div>
            </Item>
          </div>

       </List>
    )
  }
  componentWillReceiveProps(nextProps){
    this.setState({
      paybackinfo : nextProps.paybackinfo
    })
  }
}
export default CSSmodules(PayBackInfo,styles);
