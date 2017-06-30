import {Modal} from 'antd-mobile';
let alert = Modal.alert;
export function contactUs() {
  return(
    alert('联系客服', '是否要拨打010-98978900', [
     { text: '取消', onPress: () => console.log('cancel') },
     { text: '确定', onPress: () => console.log('ok'), style: { fontWeight: 'bold' } },
   ])
  )
}
