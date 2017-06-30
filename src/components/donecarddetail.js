import React from 'react';
import {WhiteSpace,NavBar} from 'antd-mobile';
import Information from './getdonecardinformation';
import {getCardDetail} from '../services/example.js';
export default class DoneCardDetail extends React.Component{
  constructor(props){
    super(props)
    this.state={
      information:[]
    }
  }
  render(){
    return(
      <div>
        <NavBar
            onLeftClick={()=>history.back()}
            leftContent={<img alt="" src = "http://localhost:8000/images/login_08.png"/>}
            children={<span>银行卡详情</span>}
        ></NavBar>
        <WhiteSpace />
        <Information {...this.state}/>
      </div>

    )
  }
  componentDidMount() {
    getCardDetail().then(data=>this.setState({
      information : data.data["carddetail"]
    },function(){console.log(this.state.information)}));

  }
}
