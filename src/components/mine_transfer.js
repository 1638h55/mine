import React from 'react';
import {SegmentedControl,Tag} from 'antd-mobile';
import MyNavBar from './navbar';
import MyBorrowList from '../containers/myborrowlist';
import {whiteSpace} from './whitespace';
import {FilterWindow} from './fifter';
const whitestyle = {
  height:"0.333rem",
  backgroundColor:"#efeff4",
}
export default class MyTransfer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isShow:false,
      isActive:"",
      choosewhat:"cantransfer",
      path:'/mine/transfer/cantransfer',
    }
  }
  onChange=(e)=>{
    this.setState({
      isShow:!this.state.isShow,
    })
  }
  switch=(e)=>{
    let index = e.nativeEvent.selectedSegmentIndex;
    switch (index) {
      case 0:
      this.setState({
        choosewhat:"cantransfer",
        path:'/mine/transfer/cantransfer',
      })
        break;
        case 1:
          this.setState({
            choosewhat:"transfering",
            path:'/mine/transfer/transfering',
          })
          break;
          case 2:
            this.setState({
              choosewhat:"transfered",
              path:'/mine/transfer/transfered',
            })
            break;
    }
  }
  close=(e)=>{
    this.setState({
      isShow:false,
    })
  }
  controll=(e)=>{
    var that =this;
    this.setState({
      isActive:true,
    })
    setTimeout(function(){
      that.setState({
        isActive:""
      })
    },2000)
  }
  render(){
    return(
      <div>
        <MyNavBar title="我的债转"/>
        <div className="box-segement">
          <SegmentedControl
            values={['可转让', '转让中', '转让完']}
            onChange={this.switch}
            className="am_segmented_custom"
          />
          <Tag onChange={this.onChange}>筛选</Tag>
        </div>
        {whiteSpace(whitestyle)}
        <MyBorrowList path={this.state.path} what={this.state.choosewhat}/>
        {this.state.isShow ? <FilterWindow
              close={this.close}
              controller={this.controll}
              isActive={this.state.isActive}
          /> : ''}
          {this.props.children}
        <div>下拉加载更多</div>
      </div>
    )
  }
}
