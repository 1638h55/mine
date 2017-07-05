import React from 'react';
import CSSModules from 'react-css-modules';
import styles from '../styles/list.less'
// import styles from '../styles/productslist.less'
class Objects extends React.Component {
  constructor(props){
    super(props)
    this.renderComment= this.renderComment.bind(this);
    this.goDetailPages = this.goDetailPages.bind(this);
  }
  renderComment () {

  }
  goDetailPages (e) {
    console.log(e.target)
    location.href = "http://localhost:8000/detail";
  }
  render () {
    return (
      <ul>
        {this.props.items ? this.props.items.map((value,index)=>{
          return <li key={index}>
          <div>{value.name}</div>
          <div>
            <span><span>{value.rate[0]}</span><span>+{value.rate[1]}</span></span>
            <span>{value.time}<span>天</span></span>
            <span>{value.money}<span>万元</span></span>
          </div>
          <div onClick={this.goDetailPages}>立即抢</div>
          <div></div>
          </li>
        }):<div styleName='picturebox'><img styleName='picture' alt="" src='/images/box.png'/><span styleName='text'>暂无推荐项目</span></div>}
      </ul>
    )
  }
}
export default CSSModules(Objects,styles)
