import React from 'react';
import MyNavBar from './navbar';
export default class Transfered extends React.Component {
  constructor(props){
    super(props)
  }
  render() {
    return(
      <div>
        <MyNavBar title="债转详情"/>
      </div>
    )
  }
}
