import React from 'react';
import {Link} from "dva/router";
import CSSmodules from 'react-css-modules';
import {List} from 'antd-mobile';
import {anotherButton} from './anotherbutton';
import MyNavBar from './navbar.js';
const style = {
  backgroundColor:'#ddd',
}
export default class MySettings extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      hasError: false,
      value: '',
      loaded:false,
      disabled:false,
      children:"退出登录",
      style:null,
    }
  }
  getCofirmWord = (e)=> {
    this.setState({
      disabled:true,
      style:style
    })
  }
  // set=(value)=>{
  //   switch (value) {
  //     case "账号与安全":
  //     let clicked=!this.state.clicked1;
  //     this.setState({
  //       clicked1:!this.state.clicked1,
  //     })
  //     if(clicked){
  //       this.setState({
  //         arrow1:"down",
  //       })
  //     }else{
  //       this.setState({
  //         arrow1:"horizontal",
  //       })
  //     }
  //       break;
  //       case "意见与反馈":
  //       let clicked2=!this.state.clicked2;
  //       this.setState({
  //         clicked2:!this.state.clicked2,
  //       })
  //       if(clicked2){
  //         this.setState({
  //           arrow2:"down",
  //         })
  //       }else{
  //         this.setState({
  //           arrow2:"horizontal",
  //         })
  //       }
  //         break;
  //         case "关于我们":
  //         let clicked3=!this.state.clicked3;
  //         this.setState({
  //           clicked3:!this.state.clicked3,
  //         })
  //         if(clicked3){
  //           this.setState({
  //             arrow3:"down",
  //           })
  //         }else{
  //           this.setState({
  //             arrow3:"horizontal",
  //           })
  //         }
  //           break;
  //
  //   }
  // }
  render() {
    return (
      <div>
      <MyNavBar title="我的设置"/>
        <List>
          <List.Item
          ><Link to='/mine/settings/accountsecure'>账号与安全</Link></List.Item>
          <List.Item
          ><Link to='/mine/settings/advice'>意见与反馈</Link></List.Item>
          <List.Item
          ><Link to='/mine/settings/aboutus'>关于我们</Link></List.Item>
        </List>
        {anotherButton(this.getCofirmWord,{...this.state})}
      </div>
    )
  }
}
