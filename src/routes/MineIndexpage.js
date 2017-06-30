import React from 'react';
export default class MineIndexpage extends React.Component {
  constructor(props){
    super(props)
  }
  render() {
    return(
      <div>
        {this.props.children}
      </div>
    )
  }
}
