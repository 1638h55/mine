import Guarantee from '../containers/guarantee.js';
import RiskManger from '../containers/riskmanger.js';
import PayBackInfoList from '../containers/paybackinfocontainer.js';
import Borrower from '../containers/borrower.js';
import {repayMent} from '../components/repaymentcontract';
export function LoadMoreDetails(props) {
  return(
    <div>
        <PayBackInfoList />
        <Borrower />
        {repayMent()}
        <Guarantee />
        <RiskManger/>
    </div>
  )
}
