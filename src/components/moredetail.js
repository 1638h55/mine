import Guarantee from '../containers/guarantee'
import RiskManger from '../containers/riskmanger'
import PayBackInfoList from '../containers/paybackinfocontainer'
import Borrower from '../containers/borrower'
import RepayMent from '../components/repaymentcontract'

export function LoadMoreDetails(props) {
  return(
    <div>
        <PayBackInfoList />
        {!props.show ?<Borrower /> : ""}
        <RepayMent />
        {!props.show ? <Guarantee /> :""}
        {!props.show ? <RiskManger/> :""}
    </div>
  )
}
