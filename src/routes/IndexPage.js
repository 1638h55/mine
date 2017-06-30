import React from 'react';
import { connect } from 'dva';
class IndexPage extends React.Component {
  constructor(props){
    super(props)
  }
  render () {
    return (
      <div>
          {this.props.children}
      </div>
    )
  }

}

export default connect()(IndexPage);
