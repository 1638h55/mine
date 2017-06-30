import React from 'react';
import {Link } from 'dva/router';
import {NavBar,Button,Result,WhiteSpace,Modal,Toast} from 'antd-mobile';
const stylea = {
  display:'block',
  width:'100%',
  height:'1.6rem',
  lineHeight:'1.6rem',
  textAlign:'center'
}
let Alert = Modal.alert;
export default class RechageReauslt extends React.Component {
  constructor(props) {
    super(props)
    this.state= {
      time:"",
      success:true,
      reason:'',
    }
  }
  go=(e)=>{
    history.go('http://localhost:8000/');
  }
  ask=(e)=>{
    Alert('联系客服', '是否要拨打010-510222222联系我们', [
     { text: '取消', onPress: () => console.log('cancel') },
     { text: '确定', onPress: () => console.log('ok'), style: { fontWeight: 'bold' } },
   ])
  }
  render () {
    return(
      <div>
      <NavBar
          onLeftClick={()=>history.back()}
          leftContent={<img alt="" src = "http://localhost:8000/images/login_08.png"/>}
          mode='light'
          children={<span>充值结果</span>}
      ></NavBar>
       <Result
         title="充值成功"
         message={<div>
           <div style={{ fontSize: '0.72rem', color: '#000', lineHeight: 1 }}>充值金额￥<span>2150</span></div>
            <div>{this.state.time}</div>
           </div>}
       />
       <Link
       style={stylea}
          children={<span>立即出借</span>}
          to='/'
       ></Link>
       <Button onClick={this.ask}
       >确认对话框</Button>
      </div>
    )
  }
  componentDidMount () {
    document.getElementsByTagName('header')[0].style.display="none";
    var date = new Date();
    console.log(date.getFullYear());
     this.setState({
       time:date.toLocaleString()
     })
  }
}
