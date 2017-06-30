import request from '../utils/request';

// export  async const query() {
//   return request('/data.json');
// }
// export async const query() {
//   return request('/api/users')
// }
// module.exports={
//   query:const(){
//     return request('/api/users')
//   },
//   any :const(){
//     return request('/data.json');
//   }
// }
const query=function() {
    return request('/api/users')
}
const any=function() {
  return request('/data.json')
}
const getCardDetail=function(){
  return request('/card.json')
}
const getProfit=function(){
  //判断客户是否为登录状态或者有没有投标收益
  // if(2>4){
  //   return request('/profit.json')
  // }else{
  //
  // }
  return request('/profit.json');

}
const getTotalmoeny=function(){
  return request('/totalmoney.json')
}
const getTotalPro=function(){
  return request('/data.json');
}
const checkUser=function(callback,info) {
  if(2>3){
    //调用接口验证客户是否验证完信息
  }else{
    callback(info);
  }
}
const accountLogin=function(callback,info) {
  checkUser(callback,info)
  //post data to backend
}
const mobileLogin=function(callback,info){
  checkUser(callback,info)
    //post data to backend
}
const userRegister=function(callback,info) {
    checkUser(callback,info)
    //postdata to backend
}
const getAccoutinfo = function(){
  return request('/account.json');
}
const getIcon = function(){
  return request('/icon.json');
}
export {query,any,
      getCardDetail,
      getProfit,
      getTotalmoeny,
      getTotalPro,
      checkUser,
      getAccoutinfo,
      accountLogin,
      mobileLogin,
      userRegister,
      getIcon
    }
