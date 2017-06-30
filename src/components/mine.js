import React from 'react';
import Footer from './footer.js';
import MyDetails from './mydetails.js';
export default class Me extends React.Component{
  constructor(props){
    super(props)
  }
  render () {
    return(
      <div className="mycontainer" style={{height:'100%'}}>
          <MyDetails />
          <Footer key="10"/>
      </div>
    )
  }
  componentDidMount () {


  }
}
