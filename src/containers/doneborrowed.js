import React from 'react';
import {DoneBorrowUi} from '../components/doneborrow';
export default class DoneBorrow extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      infolist:[],
    }
  }
  render(){
    return(
        <DoneBorrowUi {...this.state}/>
    )

  }
  componentDidMount(){
    //请求接口返回数据
  }
}
