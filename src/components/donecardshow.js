import react from 'react';
import {NavBar,List,Card} from 'antd-mobile';
import {Link} from 'dva/router';
const style = {
  "display":"flex",
  "justifyContent":"space-around",
}
const span = {
  "color":"red",
}
class DoneCardShow extends React.Component{
  constructor(props){
    super(props)
  }
  render() {
    return(
      <div>
        <NavBar
             onLeftClick={()=>{history.back()}}
            leftContent={<img alt="" src = "http://localhost:8000/images/login_08.png"/>}
            children={<span>已绑定的银行卡</span>}
        ></NavBar>
        <Card.Header
          title="广发银行"
          thumb="https://cloud.githubusercontent.com/assets/1698185/18039916/f025c090-6dd9-11e6-9d86-a4d48a1bf049.png"
          extra={
            <Link  style={style} to="/mine/donecard/donecarddetail"><span style={span}>555555555555</span><img alt="" src="http://localhost:8000/images/login_08.png"/></Link>}
        />

      </div>
    )
  }
}
export default DoneCardShow
