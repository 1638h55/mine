
import classname from 'classnames';
export function myBadge (text) {
  const independentclass =`badge${text=="推荐"?'-recon':text=="出借中"?'-saling':'-over'}`;
  const classnames = classname(independentclass,'badge')
  return(
   <div className={classnames}><p className="am_p_text"><span styleName="am_span_text">{text}</span></p></div>
  )
}
