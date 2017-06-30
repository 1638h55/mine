import React from 'react';
import {List} from 'antd-mobile';
import CSSmodules from 'react-css-modules';
import styles from '../styles/riskmanger.less';
let Item = List.Item;
class RiskManger extends React.Component {
  constructor(props) {
      super(props)
  }
  render () {
    return(
      <List>
        <Item arrow="horizontal" children="风控信息">
        </Item>
      </List>
    )
  }
}
export default CSSmodules(RiskManger,styles)
