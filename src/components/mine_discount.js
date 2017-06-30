import React from 'react';
import {SegementedControl} from './segementcontroll';
import MyNavBar from './navbar.js';
import MyDiscountContainer from '../containers/mydiscount.js';
export default class MyDiscount extends React.Component {
  constructor(props){
    super(props)
  }
  getDiscount=(e)=>{
    let index = e.nativeEvent.selectedSegmentIndex;
    console.log(index)
  }
  render () {
    return (
      <div>
        <MyNavBar title="优惠券"/>
        <SegementedControl callback={this.getDiscount}/>
        <MyDiscountContainer />
      </div>
    )
  }
  componentDidMount(){

  }

}
