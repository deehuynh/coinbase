export default function Sell (props) {
  return (
    <div ref={props.refSell} style={{display: "none"}} className="sell">
      <Menu refSell={props.refSellB} display="none">
        Sell Bitcoin
      </Menu>

      <Menu refSell={props.refSellG} display="none">
        Sell
      </Menu>
    </div>
  )
}

function Menu (props) {
  return (
    <div ref={props.refSell} style={{display: props.display}} className="sell__menu">
      {props.children}
    </div>
  )
}