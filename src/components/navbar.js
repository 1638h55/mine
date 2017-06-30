import { NavBar} from 'antd-mobile';
import {rem} from 'polished';
import CSSModules from 'react-css-modules';
import styles from '../styles/nav.less';
const navstyle = {
  marginTop:rem(48,75),
  height:rem(88,75),
  borderBottom:"1px solid #ddd"
}
@CSSModules(styles)
 export default class MyNavBar extends React.Component{
  constructor(props){
    super(props)
  }
  render (){
    return(
      <NavBar
        style={navstyle}
        mode="light"
        onLeftClick={()=>history.back()}
        leftContent={<img alt="" src = "http://localhost:8000/images/login_08.png"/>}
        children={this.props.title}
        ></NavBar>
    )
  }
}
