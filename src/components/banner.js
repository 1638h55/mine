import React from 'react';
import {Link} from 'dva/router';
import BannerAnim,{Element,Arrow,Thumb} from 'rc-banner-anim';
import TweenOne,{tweenOneGroup}from 'rc-tween-one';
import CSSModules from 'react-css-modules';
import styles from '../styles/banner.less';
const BgElement = Element.BgElement;
class Banner extends React.Component{
  constructor(props){
    super(props)
  }
  changeWay () {
    alert("heloo");
  }
  render() {
    return(
      <BannerAnim
      type="across"
      autoPlay
       >
   <Element
     key="0"
   >
     <BgElement
      key="1"
       style={{
         backgroundColor:"green",
         backgroundImage:"url('http://localhost:8000/images/abad02.png')",
         backgroundSize:"contain",
       }}
     />
   </Element>
   <Element
     key="1"
     style={{paddingLeft:'0',paddingRight:'0',paddingTop:'0'}}
   >
     <BgElement
      key="2"
       style={{

         backgroundImage:"url('http://localhost:8000/images/abad04.png')",
         backgroundSize:"contain",
       }}
     />
   </Element>
 </BannerAnim>
    )

  }
}
export default CSSModules(Banner,styles);
