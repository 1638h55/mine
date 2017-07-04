import React from 'react';
import CSSModules from 'react-css-modules';
import styles from '../styles/totalpro.less';
import {proLists} from './lists.js';
class TotalPro extends React.Component{
  constructor(props){
    super(props)
  }
  render () {
    return(
      <ul>
        {this.props.items ? this.props.items.map(({money,name,rate,recon,time,way},index)=>{
          return proLists(money,name,rate,recon,time,way,index)
        }):<div styleName='am_div_empty'>
            <img  styleName='am_img' alt="" src ="/images/box.png"/>
            <div styleName='am_div_con'>暂无推荐项目</div>
        </div>}
      </ul>
    )
  }
  componentWillReceiveProps(nextProps) {
  //  console.log(nextProps.items)
  }
}
export default CSSModules(TotalPro,styles)
