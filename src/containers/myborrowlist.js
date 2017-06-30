import React from  'react';
import {any} from '../services/example.js';
import MyBorrowListUi from '../components/myborrowlistui.js';
export default class MyBorrowList extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      productlists:[1,2,3]
    }
  }
  componentWillMount () {

  }
  render () {
    return(
        <MyBorrowListUi {...this.state} />
    )
  }
  //查看状态是否已更新
  postData=()=>{
    let arr = this.state.productlists;
  }

  componentDidMount () {
    var that = this;
    any().then(res=>{
      that.setState({
         productlists:res.data.products
      },this.postData)
  })
  }
  componentWillReceiveProps(nextprops){
    //传递不同的参数
    console.log(nextprops);
  }
}
