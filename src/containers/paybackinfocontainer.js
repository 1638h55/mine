import React from 'react';
import PayBackInfoList from '../components/paybackinfo.js';
import {any} from '../services/example.js';
class PayBackInfoContainer extends React.Component {
  constructor(props){
    super(props)
    this.state={
      paybackinfo:[]
    }
  }
  render() {
    return(
      <PayBackInfoList {...this.state}/>
    )
  }
  componentDidMount () {
    any().then((res)=>{
      this.setState({
        paybackinfo:res.data.products
      })
    });
  }
}
export default PayBackInfoContainer
