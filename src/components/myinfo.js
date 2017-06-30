import React from 'react';
import {WhiteSpace} from 'antd-mobile';
import {Link } from 'dva/router';
import {rem} from 'polished';
import {getIcon} from '../services/example';
const li = {
  marginLeft:rem(30,75),
  marginRight:rem(30,75),
  display:"flex",
  height:rem(90,75),
  alignItems:"center",
  borderBottom:"1px solid #e0e0e0",
}
const a = {
  display:'flex',
  width:"100%",
  justifyContent:'space-between',
}
const span={
  alignSelf:"center",
}
const img = {
  display:"inline-block",
  width:rem(50,75),
  height:rem(50,75),
  marginRight:rem(30,75),
  overflow:"hidden",
}
const bigspan = {
  lineHeight:rem(50,75),
  height:rem(50,75),
  display:'flex',
  fontSize:rem(34,75),
  color:"#999",
}
const rightspan = {
  display:'flex',
  alignItems:'center',
}
const picture = {
  width:"100%",
  height:"100%",
  objectFit:"contain",
}
const arrowpic = {
  height:rem(24,75),
  width:rem(20,75),
}
export default class List extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      data :[],
      src:"http://localhost:8000/images/arrow_10.png"
    }

  }
  render () {
    return (
      <ul>
        {this.state.data.map((value,index)=>{
           return <li key={index} style={li}>
                  <Link to={value.path} style={a}>
                    <span style={bigspan}><span style={img}><img alt="" src={value.url} style={picture}/></span><span style={bigspan}>{value.account}</span></span>
                    <span style={rightspan}><img alt="" src={this.state.src} style={arrowpic}/></span>
                  </Link>
                </li>
        })}
      </ul>
    )
  }
  componentDidMount () {
    getIcon().then(res=>{
      this.setState({
        data:res.data.icon,
      },()=>console.log(this.state.data))
    });
  }
}
