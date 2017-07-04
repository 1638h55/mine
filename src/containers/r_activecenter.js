import React from 'react'
import { RefreshControl, ListView } from 'antd-mobile'
import MyNavBar from '../components/navbar'
import {rem} from 'polished'
import ActiveCenterList from '../components/activecenter.js'
import {Dot} from '../components/dot'
const data = [
  {
    img: 'https://zos.alipayobjects.com/rmsportal/dKbkpPXKfvZzWCM.png',
    title: '端午节',
    des: 'time',
  },
  {
    img: 'https://zos.alipayobjects.com/rmsportal/XmwCzSeJiqpkuMB.png',
    title: '端午节',
    des: '2017-02-05',
  },
  {
    img: 'https://zos.alipayobjects.com/rmsportal/hfVtzEhPzTUewPm.png',
    title: '端午节',
    des: '2017-02-05',
  }
]
let index = data.length - 1

let pageIndex = 0
const dotstsyle = {
  top:"30%",
  right:0,
  backgroundColor:'#ff2a00',
  width:rem(20,75),
  height:rem(20,75),
}
export default class ActiveCenter extends React.Component {
  constructor(props) {
    super(props)
    const dataSource = new ListView.DataSource({
      rowHasChanged: (row1, row2) => row1 !== row2,
    })

    this.initData = []
    for (let i = 0;i < 20;i++) {
      this.initData.push(`r${i}`)
    }
    this.state = {
      dataSource: dataSource.cloneWithRows(this.initData),
      refreshing: false,
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
  render() {
    const separator = (sectionID, rowID) => (
      <div
        key={`${sectionID}-${rowID}`}
        style={{
          backgroundColor: '#F5F5F9',
          height: "0.333rem",
        }}
      />
    )
    const row = (rowData, sectionID, rowID) => {
      if (index < 0) {
        index = data.length - 1
      }
      const obj = data[index--]
      return (
        <div key={rowID}
          style={{
            paddingLeft:"0.267rem",
            paddingRight:'0.267rem',
            backgroundColor: 'white',
            borderRadius:rem(10,75),
           border:"1px solid #ddd",
          }}
        >
          <h5 style={{height:rem(65,75),fontSize:rem(26,75),lineHeight:rem(65,75),position:'relative'}}>
            {obj.title}
            <Dot style={dotstsyle}/>
          </h5>
          <div style={{height:rem(234,75),backgroundColor:'#e5e5e5'}}>

          </div>
          <div style={{height:rem(60,75),lineHeight:rem(60,75),textAlign:'right'}}>
              {obj.des}
          </div>
        </div>
      )
    }
    return (
      <div>
        <MyNavBar title="活动中心"/>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={row}
          renderSeparator={separator}
          initialListSize={5}
          pageSize={5}
          scrollRenderAheadDistance={200}
          scrollEventThrottle={20}
          onScroll={this.onScroll}
          style={{
            height: document.documentElement.clientHeight,
            margin: '0.1rem 0.3rem',
          }}
          scrollerOptions={{ scrollbars: true }}
          refreshControl={<RefreshControl
            refreshing={this.state.refreshing}
            onRefresh={this.onRefresh}
          />}
        />
        <div style={{textAlign:"center"}}>向下滑动加载更多</div>
      </div>

    )
  }
}
