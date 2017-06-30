import React from 'react';
import {List} from 'antd-mobile';
let Item = List.Item;
class Guarantee extends React.Component {
  constructor(props){
    super(props)
  }
  render () {
    return (
      <List>
        <Item arrow="horizontal" children="抵押物信息">
        </Item>
      </List>
    )
  }
}
export default Guarantee
