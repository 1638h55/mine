import React from 'react';
import { Router, Route, IndexRoute,Redirect, IndexLink,hashHistory,browserHistory,IndexRedirect }  from 'dva/router';
import IndexPage from './routes/IndexPage';
import MineIndexpage from './routes/MineIndexpage';
import MySettingsIndexPage from './routes/mysettingsindexpage.js';
import Recommend from './components/recommend.js';
import Me from './components/mine.js';
import Activecenter from './containers/r_activecenter.js';
import Detail from './containers/detailcontainer.js';
import Recharge from './components/mine_recharge.js';
import MyAccount from './components/mine_account.js';
import MyBorrow from './components/mine_borrow.js';
import MyBorrowIndex from './routes/myborrowinfo.js';
import Info from './components/info.js';
import MyMoney from './components/mine_money.js';
import MyDiscount from './components/mine_discount.js';
import MySettings from './components/mine_settings.js';
import MobileLogin from './components/mobilelogin.js';
import Accountlogin from './components/accountlogin.js';
import Register from './components/register.js';
import Contract from './components/contract.js';
import BindBank from './components/bindbank.js';
import GetPasswordBack from './components/findpasswordback.js';
import Bindcardcharge from './components/bind_card_recharge.js';
import ConfirmRecharge from './components/confirmrecharge.js';
import RechargeReaust from './components/recharge_result.js';
import NonebindCard from './components/none_bindcard_recharge.js';
//import ConfimPay from './components/confirmpay.js';
//确认支付页面已跳转至包商银行页面，只返回支付结果
import PayResult from './components/payresult.js';
import AccoutSecure from './components/accountsecure.js';
import Advice from './components/advice';
import Aboutus from './components/aboutus';
import FixPayWord from './components/fixpayword';
import FixLoginWord from './components/fixloginword';
import TotalMoney from './components/totalmoney.js';
import BorrowContainer from './containers/borrow_project_container.js';
import Try  from './components/try.js';
import DoneCard from './routes/donecard';
import DoneCardShow from './components/donecardshow';
import DoneCardDetail from './components/donecarddetail';
import QuickBind from './components/quickbindmobile';
import Relatived from './components/relatedaccount';
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
  );
}

export default RouterConfig;
