import React from 'react';
import {Link } from 'dva/router';
import CSSmodules from 'react-css-modules';
import {Flex} from 'antd-mobile';
import styles from '../styles/third.less';
import classNames from 'classnames';
class ThirdWayLogin extends React.Component {
  constructor(props) {
    super(props)
  }
  render () {
    return (
      <div styleName='footer'>
        <div styleName='borderbox'>
              <h3 styleName='thirdway_login'>使用第三方登录</h3>
        </div>
        <div styleName='login_footer'>
          <Flex justify="between">
            <Link to='/quickbind' styleName='thirdway'>
              <img styleName='img1' alt = "" src='http://localhost:8000/images/login_02.png'/>
            </Link>
            <Link to='/quickbind' styleName='thirdway'>
              <img styleName='img2' alt = "" src='http://localhost:8000/images/login_02.png'/>
            </Link>
            <Link to='/quickbind' styleName='thirdway'>
              <img styleName='img3' alt = "" src='http://localhost:8000/images/login_02.png'/>
            </Link>
          </Flex>
        </div>
      </div>
    )
  }
}
export default CSSmodules(ThirdWayLogin,styles)
