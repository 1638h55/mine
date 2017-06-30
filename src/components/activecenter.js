import React from 'react';
export default class ActiveCenter extends React.Component{
  constructor(props){
    super(props)
  }
  render () {
    return (
      <ul>
          {this.props.items.map((value,index)=>{
            return <li key={index}>{value}</li>
          })}
      </ul>
    )

  }
}
