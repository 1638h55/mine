import {Tabs} from 'antd-mobile';
let TabPane = Tabs.TabPane;
import {SegementedControl} from './segementcontroll';
const value = ['全部','1月内','1-3月','3-6月','6月以上']
export function tabBars(state,callback,choosetime){
  return(
    <Tabs defaultActiveKey="1" animated={false}  onTabClick={callback}>
        <TabPane tab="项目出借" key="1">
        <SegementedControl value={value} fn={choosetime}/>
        </TabPane>
        <TabPane tab="项目债转" key="2">
          <div>项目债转</div>
        </TabPane>
  </Tabs>
  )
}
