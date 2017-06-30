import React from 'react';
import Footer from './footer.js';
import BannerContainer from '../containers/requestbanner_picture.js';
import ObjectsContainer from '../containers/requestobject.js';
import Sales from './sales.js';
import Information from './ourinformation.js';
import CSSmodules from 'react-css-modules';
import styles from '../styles/global.less';
class Recommend extends React.Component{
  constructor(props) {
      super(props)
  }
  render () {
    return(
      <section>
        <BannerContainer />
        <Information />
        <Sales/>
        <ObjectsContainer/>
        <Footer />
      </section>
    )
  }
}
export default CSSmodules(Recommend,styles)
