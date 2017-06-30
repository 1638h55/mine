import React from 'react';
import {Link} from 'dva/router';
import styles from '../styles/footer.less';
import CSSModules from 'react-css-modules';
import className from 'classnames';
const activestyle = {
  color:'#f00',
  fontSize:'0.44rem'
}
 class Footer extends React.Component {
  constructor(props) {
    super(props)
  }
  render () {
    return(
      <footer>
        <Link to="/recommend" activeStyle={activestyle} activeClassName="choose" ><i styleName='bgone'></i>推荐</Link>
        <Link to="/project" activeStyle={activestyle} activeClassName="choose" ><i styleName="bgtwo"></i>项目出借</Link>
        <Link to="/mine" activeStyle={activestyle} activeClassName="choose"><i styleName="bgthree"></i>我的</Link>
      </footer>
    )
  }
}
 export default CSSModules(Footer,styles)
