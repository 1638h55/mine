import React from 'react';
import {Link} from 'react-router';
import {Button } from 'antd-mobile';
export default class Sales extends React.Component {
  constructor(props){
    super(props)
  }
  render () {
    return (
        <div>
              <Link to="/active"></Link>
        </div>
    )
  }
}
