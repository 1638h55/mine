import React from 'react';
import {Link } from 'dva/router';
export default class AboutUs extends  React.Component {
  constructor(props){
    super(props)
  }
  render () {
    return(
      <div className="aboutus">
        <Link to="" >
          <span></span>
          <span>六重保证</span>
        </Link>
        <Link to="" >
          <span></span>
          <span>信息披露</span>
        </Link>
        <Link to="" >
          <span></span>
          <span>运营报表</span>
        </Link>
      </div>
    )
  }
}
