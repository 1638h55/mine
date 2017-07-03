import React from 'react';
import { RefreshControl, ListView} from 'antd-mobile';
import TotalProUi from '../components/totalproui.js';
import {getTotalPro} from '../services/example';
import Footer from '../components/footer.js';
import {tabBars} from '../components/tabbar';
export default class BorrowContainer extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      items:[]
    }
  }
  callback=(key)=>{
    console.log(key)
    this.setState({
      items:null
    })
  }
  choosetime=(key)=>{
    console.log(key)
  }
  render () {
    return(
      <div>
          {tabBars(this.state,this.callback,this.choosetime)}
          <TotalProUi {...this.state}/>
          <Footer />
      </div>
    )
  }
  componentDidMount () {
    getTotalPro().then(res=>this.setState({
      items:res.data.products || null
    }));
  }
}
