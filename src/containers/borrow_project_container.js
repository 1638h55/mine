import React from 'react';
import { RefreshControl, ListView} from 'antd-mobile';
import TotalProUi from '../components/totalproui';
import {getTotalborrow,getTotalTransfer} from '../services/example';
import Footer from '../components/footer.js';
import {tabBars} from '../components/tabbar';
export default class BorrowContainer extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      items:[],
      show:true,
    }
  }
  callback=(key)=>{
    if(key=="1"){
     getTotalborrow().then(res=>this.setState({
       items:res.data.products
     }))
    }if(key=='2'){
      getTotalTransfer().then(res=>this.setState({
        items:res.data.products
      }))
    }
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
    getTotalborrow().then(res=>this.setState({
      items:res.data.products || null
    }));
  }
}
