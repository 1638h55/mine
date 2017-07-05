import React from 'react'
import {Link} from 'dva/router'
import {rem} from 'polished'
import { RefreshControl, ListView } from 'antd-mobile'
import CSSModules from 'react-css-modules'
import styles from '../styles/myborrowfooter.less'
import {whiteSpace} from "./whitespace"
import {showList} from './listview'
// import {showList} from './anothershowlist'
const whtitestyle = {
  height:rem(25,75),
  backgroundColor:"#efeff4",
}
class MyBorrowListUi extends React.Component {
  constructor(props){
    super(props)
    const dataSource = new ListView.DataSource({
      rowHasChanged: (row1, row2) => row1 !== row2,
    })

    this.initData = []
    for (let i = 0 ;i < 20; i++) {
      this.initData.push(`r${i}`)
    }
    this.state = {
      pro : this.props.productlists,
      dataSource: dataSource.cloneWithRows(this.initData),
      refreshing: false
    }
  }
  onRefresh = () => {
    this.setState({ refreshing: true })
    setTimeout(() => {
      this.initData = [`ref${pageIndex++}`, ...this.initData]
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(this.initData),
        refreshing: false,
      })
    }, 1000)
  }
  onScroll = () => {
    console.log('sss')
  }
  render (){
    return (
      <ul>
        {this.state.pro.map(({path,money,name},index)=>{
          return showList({path,money,name,index})
        })}
      </ul>

    )
  }
  //修改组件的状态
  componentWillReceiveProps (nextProps) {
  let arr = []
  //根据不同的债转类型跳转不同的页面
  let path = {path:nextProps.path}
  arr = nextProps.productlists.map(items=>{
    return Object.assign({},items,path)
  })
    this.setState({
      pro : arr
    })
  }

  //是否需要更新
  shouldComponentUpdate () {
      return true
  }


}
export default CSSModules(MyBorrowListUi,styles)
