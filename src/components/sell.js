export default function Sell (props) {
  return (
    <div ref={props.refSell} style={{display: "none"}} className="sell">
      <Menu ref={props.refSellB} display="block">
        Sell Bitcoin
      </Menu>

      <Menu ref={props.refSellG} display="none">
        Sell
      </Menu>
    </div>
  )
}

function Menu (props) {
  return (
    <div style={{display: props.display}} className="sell__menu">
      {props.children}
    </div>
  )
}