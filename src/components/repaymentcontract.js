
import {List} from 'antd-mobile'
import {Head} from './totalmoneylisthead'
import {rem} from 'polished'
import React from 'react'
const boxstyle = {
  marginLeft:"-0.2rem",
}
const contentstyle = {
  backgroundImage:"url('http://localhost:8000/images/arrow_10.png')" ,
  backgroundRepeat:"no-repeat",
  display:'inline-block',
  width:rem(20,75),
  height:rem(24,75),
  backgroundSize:"100%",
}
const leftstyle = {
  fontSize:rem(28,75),
  color:"#333",
}
export default class RepayMent extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      clicked:false,
      active:false,
      inactive:true,
      contentstyle:contentstyle,
    }
  }
  onChange=(e)=>{
    const clicked = !this.state.clicked;
    this.setState({
      clicked:!this.state.clicked,
    })
    if(clicked){
      this.setState({
        contentstyle:Object.assign({},contentstyle,{backgroundImage:"url('http://localhost:8000/images/arrow_12.png')" }),
      })
    }else{
      this.setState({
        contentstyle:Object.assign({},contentstyle,{backgroundImage:"url('http://localhost:8000/images/arrow_10.png')" }),
      })
    }
  }
  render(){
    return(
      <List renderHeader={() => <Head
            money="借款合同"
            style={boxstyle}
            callback={this.onChange}
            leftstyle={leftstyle}
            contentstyle= {this.state.contentstyle} />}>
     </List>
  )
}
}
