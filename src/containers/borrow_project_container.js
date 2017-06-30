import React from 'react';
import {Tabs,Accordion,List,WhiteSpace, RefreshControl, ListView,NavBar} from 'antd-mobile';
let TabPane = Tabs.TabPane;
import TotalProUi from '../components/totalproui.js';
import {getTotalPro} from '../services/example';
import Footer from '../components/footer.js';
export default class BorrowContainer extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      items:[]
    }
  }
  callback=(key)=>{
    console.log('onChange', key);
  }
  handleTabClick=(key)=>{
    console.log('onTabClick', key);
  }
  render () {
    return(
      <div>
        <NavBar leftContent={<img alt="" src = "http://localhost:8000/images/login_08.png"/>}
            children={<span>项目出借</span>}
        ></NavBar>
        <Tabs defaultActiveKey="1" animated={false} onChange={this.callback} onTabClick={this.handleTabClick}>
            <TabPane tab="项目出借" key="1">
              <div>
                 <span>全部</span><span>1月内</span><span>1月-3月</span>
                <span>3月-6月</span><span>6月以上</span>
              </div>
            </TabPane>
            <TabPane tab="项目债转" key="2">
              <div>项目债转</div>
            </TabPane>
          </Tabs>
          <TotalProUi {...this.state}/>
          <Footer />
      </div>
    )
  }
  componentDidMount () {
    getTotalPro().then(res=>this.setState({
      items:res.data.products
    }));
  }
}
