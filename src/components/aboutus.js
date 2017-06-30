import React from 'react';
import MyNavBar from './navbar.js';
import {Button} from 'antd-mobile';
import {contactUs} from './contactus';
import CSSmodules from "react-css-modules";
import styles from '../styles/aboutus.less';
@CSSmodules(styles)
 export default class AboutUs extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    return(
      <div>
      <MyNavBar title="关于我们"/>
      <div>

      <div styleName="picture">
        <img alt="" src="http://localhost:8000/images/us_03.png" styleName="img"/>
      </div>
      <p styleName="am_p_text">
      好收益成立于2014年，注册资金5000万。拥有多年互
联网和金融行业从业经验
      </p>
      <p styleName="am_p_text">
      我们致力于为广大投资人提供一个便捷、安全、好收益
      的理财渠道。作为领先的P2P平台，我们把风控作为企业的
      核心，严格审核上线项目，为理财用户提供三重安全保障：
      足值抵押物、债权推荐机构回购、风险保障金。
      </p>

      </div>
      <span
          styleName="am_span_button"
          onClick={()=>contactUs()}
          >联系我们
          <img styleName="am_img_right" alt="" src="http://localhost:8000/images/arrow_10.png"/>
      </span>
      </div>
    )
  }
}
