import React from 'react'
import { Router, Route, IndexRoute,Redirect, IndexLink,hashHistory,browserHistory,IndexRedirect }  from 'dva/router'
import IndexPage from './routes/IndexPage'
import MineIndexpage from './routes/MineIndexpage'
import MySettingsIndexPage from './routes/mysettingsindexpage'
import TransferIndex from './routes/transfer'
import Recommend from './components/recommend'
import Me from './components/mine'
import Activecenter from './containers/r_activecenter'
import Detail from './containers/detailcontainer'
import Recharge from './components/mine_recharge'
import MyAccount from './components/mine_account'
import MyBorrow from './components/mine_borrow'
import MyTransfer from './components/mine_transfer'
import Transfered from './components/transfered'
import Tranfering from './components/transfering'
import CanTransfer from './components/cantransfer'
import MyBorrowIndex from './routes/myborrowinfo'
import Info from './components/info'
import MyMoney from './components/mine_money'
import MyDiscount from './components/mine_discount'
import MySettings from './components/mine_settings'
import MobileLogin from './components/mobilelogin'
import Accountlogin from './components/accountlogin'
import Register from './components/register'
import Contract from './components/contract'
import BindBank from './components/bindbank'
import GetPasswordBack from './components/findpasswordback'
import Bindcardcharge from './components/bind_card_recharge'
import ConfirmRecharge from './components/confirmrecharge'
import RechargeReaust from './components/recharge_result'
import NonebindCard from './components/none_bindcard_recharge'
//import ConfimPay from './components/confirmpay'
//确认支付页面已跳转至包商银行页面，只返回支付结果
import PayResult from './components/payresult'
import AccoutSecure from './components/accountsecure'
import Advice from './components/advice'
import Aboutus from './components/aboutus'
import FixPayWord from './components/fixpayword'
import FixLoginWord from './components/fixloginword'
import TotalMoney from './components/totalmoney'
import BorrowContainer from './containers/borrow_project_container'
import Try  from './components/try'
import DoneCard from './routes/donecard'
import DoneCardShow from './components/donecardshow'
import DoneCardDetail from './components/donecarddetail'
import QuickBind from './components/quickbindmobile'
import Relatived from './components/relatedaccount'
function RouterConfig({ history }) {
  return (
    <Router history={browserHistory}>
        <Route path="/" component={IndexPage}>
         <IndexRedirect to="/recommend" />
        <Route path="recommend" component={Recommend}/>
        <Route path="mine" component={MineIndexpage}>
          <IndexRoute component={Me}/>
          <Route path="me" component={Me}/>
          <Route path="recharge" component={Recharge}>
            <IndexRedirect to="confirmrecharge" />
            <Route path='bindcardcharge' component={Bindcardcharge}/>
            <Route path='nonebindcard' component={NonebindCard}/>
            <Route path='confirmrecharge' component={ConfirmRecharge}/>
            <Route path='result' component={RechargeReaust}/>
          </Route>
          <Route path="donecard" component={DoneCard}>
              <IndexRoute component={DoneCardShow} />
              <Route path="/" component={DoneCardShow}/>
              <Route path="donecarddetail" component={DoneCardDetail}/>
          </Route>
          <Route path="account" component={MyAccount}/>
          <Route path="borrow" component={MyBorrowIndex}>
              <IndexRoute component={MyBorrow} />
              <Route path="/" component={MyBorrow}/>
              <Route path="info" component={Info}/>
          </Route>
          <Route path="money" component={MyMoney} isTrue='true'/>
          <Route path="transfer" component={TransferIndex}>
              <IndexRoute component={MyTransfer} />
              <Route path="/" component={MyTransfer}/>
              <Route path="cantransfer" component={CanTransfer}/>
              <Route path="transfering" component={Tranfering}/>
              <Route path="transfered" component={Transfered}/>
          </Route>
          <Route path="discount" component={MyDiscount}/>
          <Route path="settings" component={MySettingsIndexPage}>
           <IndexRoute component={MySettings}/>
            <Route path="/" component={MySettings}/>
            <Route path="advice" component={Advice}/>
            <Route path="aboutus" component={Aboutus}/>
            <Route path="accountsecure" component={AccoutSecure}/>
            <Route path="fixpayword" component={FixPayWord}/>
            <Route path="fixloginword" component={FixLoginWord}/>
          </Route>
          <Route path="totalmoney" component={TotalMoney}/>
        </Route>
        <Route path="project" component={BorrowContainer}/>
        <Route path="active" component={Activecenter}/>
        <Route path="detail" component={Detail}/>
        <Route path="payresult" component={PayResult}/>
        <Route path="mobilelogin" component={MobileLogin}/>
        <Route path="accountlogin" component={Accountlogin}/>
        <Route path="quickbind" component={QuickBind}/>
        <Route path="related" component={Relatived}/>
        <Route path="register" component={Register}/>
        <Route path="bindbank" component={BindBank}/>
        <Route path="findback" component={GetPasswordBack}/>
        <Route path="contract" component={Contract}/>
        <Route path="try(/:name)" component={Try}/>
      </Route>
    </Router>
  )
}

export default RouterConfig
