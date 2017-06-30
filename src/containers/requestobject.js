import React from 'react';
import ObjectsList from '../components/objects.js';
import {any} from '../services/example.js';
import request from '../utils/request.js';
export default class Objects extends React.Component {
  constructor(props){
    super(props)
    this.state ={
      items:[]
    }
  }
  render () {
    return(
      <ObjectsList items={this.state.items}/>
    )
  }
  componentDidMount () {
    any().then(res=>this.setState({
      items:res.data.products
    },function(){
      console.log(this.state.items)
    }));
  }
}
