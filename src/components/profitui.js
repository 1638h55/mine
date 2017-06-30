import React from 'react';
import {rem,borderWidth} from 'polished';
import {Link} from 'dva/router';
import {compose} from 'ramda';
const box = {
  'height':rem(292,75),
  'backgroundColor':'#ff5500',
  'color':"#fff",
  boxSizing:'border-box',
  paddingLeft:rem(30,75),
}
const styles = {
  display:'flex',
  flexDirection:'column',
}
const total = {
  fontSize:rem(22,75),
  paddingTop:rem(35,75),
  paddingBottom:rem(30,75),
}
const money = {
  fontSize:rem(42,75),
  position:'relative',
}
const money_box={
  display:"flex",
}
const am_money = {
  display:'flex',
  flexDirection:'column',
  flex:1,
  paddingTop:rem(50,75),
}
const am_tixian={
  paddingBottom:rem(30,75),
  fontSize:rem(22,75),
}
const am_money_d={
  fontSize:rem(24,75),
}
const img = {
  position:'absolute',
  top:0,
  right:"0.4rem",
  width:rem(50,75),
  height:rem(32,75),
}
class ProfitUi extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      login:"",
      eyesrc:""
    }

  }
  render() {
    return(
      <div>
        {this.props.profit.map(({profit,totalmoney,withdraw})=>{
          return <div key={totalmoney} style={box}>
            <Link style={styles} to='/mine/totalmoney'>
              <span style={total}>累计收益(元)</span>
              <span style={money}>{profit}
              <img style={img} alt="" src={this.state.eyesrc}/>
              </span>
            </Link>
            <div style={money_box}>
              <div style={am_money}><span style={am_tixian}>可提现金额(元)</span><span style={am_money_d}>{withdraw}</span></div>
              <div style={am_money}><span style={am_tixian}>冻结金额(元)</span><span style={am_money_d}>{totalmoney}</span></div>
            </div>
          </div>
        })}
      </div>
    )
  }
  componentWillReceiveProps (nextprops) {
    let login = nextprops.login;
      this.setState({
        login:nextprops.login
      })
      if(login){
        this.setState({
          eyesrc:"http://localhost:8000/images/eye_02.png"
        })
      }else{
        this.setState({
            eyesrc:"http://localhost:8000/images/eye_04.png"
        })

      }

  }
}
export default ProfitUi
