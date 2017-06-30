import React from 'react';
import CSSModules from 'react-css-modules';
import styles from '../styles/getdonecardinformation.less';
class GetDoneCardInformation extends React.Component{
  constructor(props){
    super(props)
  }
  render() {
    return(
      <div>
      {this.props.information.map(
        ({bank,number,openingbankaddress,owner,phone,distribute})=>{
          return <ul key={phone}>
          <li styleName="lione"><span>持卡人</span><span>{owner}</span></li>
          <li styleName="litwo"><span>预留手机号</span><span>{number}</span></li>
          <li styleName="li"><span>银行</span><span>{bank}</span></li>
          <li styleName="li"><span>卡号</span><span>{phone}</span></li>
          <li styleName="li"><span>开户地址</span><span>{openingbankaddress}</span></li>
          <li styleName="lilast"><span>支行/分行</span><span>{distribute}</span></li>
          </ul>
        })}
        </div>
    )
  }
  componetWillReceiveProps(props){

  }
}

export default CSSModules(GetDoneCardInformation,styles)
