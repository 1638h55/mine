import React from 'react';
import Details from '../components/projectdetails.js';
export default class Detail extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      list :[]
    }
  }
  render(){
    return(
        <Details {...this.state}/>
    )
  }
}
