import React from 'react';
import ProfitUi from '../components/profitui.js';
import {getProfit} from '../services/example.js';
export default class ProfitContainer extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      profit:[],
      login:""
    }
  }
  render () {
    return(
      <div>
          <ProfitUi {...this.state}/>
      </div>
    )
  }
  componentDidMount () {
    //判断客户是否为登录状态

    if(this.state.login){
      getProfit().then(data=>{
        this.setState({
          profit:data.data.state,
        })
      });
    }else{
      this.setState({
        profit:[
          {
            "profit":"*******",
            "withdraw":"*******",
            "totalmoney":"*******"
          }
        ]
      })
    }

  }
}
