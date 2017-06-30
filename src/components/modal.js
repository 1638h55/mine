import {Modal} from 'antd-mobile';
let alert = Modal.alert;
const style1 = {
  fontWeight:'blod',
  color:'red',
}
const style2 = {
  color:'#1a90e9'
}
const info = {headline:'开通银行存管',
            subline:'好收益同包商银行合作，包商银行进行资金管理，更安全'}
export function modalWindow ({headline=info.headline,subline=info.subline}) {
  alert(headline,subline,[
    { text: '取消',
      onPress: () => false,
      style:style1
    },
    {
      text: '现在就去',
      onPress: () => new Promise((resolve) => {
        // Toast.info('onPress Promise', 1);
        setTimeout(function(){
          location.href="http://localhost:8000/bindbank";
        }, 300);
      }),
      style: style2,
    },
  ])
}
