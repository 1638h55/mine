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
        {this.props.items.map(({money,name,rate,recon,time,way},index)=>{
          return proLists(money,name,rate,recon,time,way,index)
        })}
      </ul>
    )
  }
  componentWillReceiveProps(nextProps) {
    console.log(nextProps);
  }
}
export default CSSModules(TotalPro,styles)
