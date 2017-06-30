import React from 'react';
import Bannerlist from '../components/banner.js';
import request from '../utils/request.js';
export default class BannerContainer extends React.Component{
  constructor(props){
    super(props)
    this.state= {
      bannerlist:[]
    }
  }
  render () {
    return(
      <Bannerlist bannerlist={this.state.bannerlist}/>
    )

  }
  componentDidMount () {
    request("http://101.200.146.108:8080/v1/focus/list",{method:"post",mode:"no-cors"})
    this.setState({
      bannerlist:[2,5,10]
    })
  }
}
