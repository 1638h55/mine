import { NavBar} from 'antd-mobile';
import {rem} from 'polished';
import CSSModules from 'react-css-modules';
import styles from '../styles/nav.less';
const navstyle = {
  marginTop:rem(48,75),
  height:rem(88,75),
  borderBottom:"1px solid #ddd"
}
const add = {
  url:"http://localhost:8000/images/login_08.png"
}
 export default class MyNavBar extends React.Component{
  constructor(props){
    super(props)
  }
  render (){
    const style = Object.assign({},navstyle,this.props.style)
    const newurl = Object.assign({},add,this.props.url)
    const title = this.props.title
    const spanstyle = this.props.spanstyle
    return(
      <NavBar
        style={style}
        mode="light"
        onLeftClick={()=>history.back()}
        leftContent={<img alt="" src ={newurl.url} />}
        children={<span style={spanstyle} children={title}></span>}
        ></NavBar>
    )
  }
}
