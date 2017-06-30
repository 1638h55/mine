import React from 'react';
import {Tag,SegmentedControl} from 'antd-mobile';
import CSSModules from 'react-css-modules';
import MyNavBar from './navbar.js';
import {whiteSpace} from './whitespace.js';
import {FilterWindow} from './fifter';
import styles from '../styles/myborrow.less';
import MyBorrowList from '../containers/myborrowlist.js';
const whitestyle = {
  height:"0.333rem",
  backgroundColor:"#efeff4",
}
function callback(key) {
  console.log('onChange', key);
}
function handleTabClick(key) {
  console.log('onTabClick', key);
}
class MyBorrow extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isShow:false,
      isActive:"",
      choosewhat:"all"
    }
  }
  onChange=(e)=>{
    this.setState({
      isShow:!this.state.isShow,
    })
  }
  //点击不同按钮加载不同的内容
  switch=(e)=>{
    let index = e.nativeEvent.selectedSegmentIndex;
    switch (index) {
      case 0:
      this.setState({
        choosewhat:"all"
      })
        break;
        case 1:
          this.setState({
            choosewhat:"borrowing"
          })
          break;
          case 2:
            this.setState({
              choosewhat:"finish"
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
      <MyNavBar title="我的出借"/>
      <div styleName="box">
        <SegmentedControl
          values={['全部', '还款中', '还款完成']}
          onChange={this.switch}
          styleName="am_segmented_custom"
        />
        <Tag onChange={this.onChange}>筛选</Tag>
      </div>
      {whiteSpace(whitestyle)}
      <MyBorrowList what={this.state.choosewhat}/>
      {this.state.isShow ? <FilterWindow
            close={this.close}
            controller={this.controll}
            isActive={this.state.isActive}
        /> : ''}
      <div>下拉加载更多</div>
      </div>
    )
  }
  componentDidMount () {

  }
}
export default CSSModules(MyBorrow,styles)
