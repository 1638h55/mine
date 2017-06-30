import React from 'react';
import MyDiscountUi from '../components/mydiscountui.js';
export default class MyDiscount extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      discountlist:[]
    }
  }
  render () {
    return(
      <MyDiscountUi {...this.state}/>
    )

  }
}
