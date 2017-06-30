import React from 'react';
import {any} from '../services/example.js';
import SinglePro from '../components/singal.js';
export default class ContainerDetail extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      products :[],
    }
  }
  render () {
    return (
      <SinglePro {...this.state}/>
    )
  }
  componentDidMount () {
    any().then((data)=>console.log(data));
  }
}
