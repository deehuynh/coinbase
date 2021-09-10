export default function Sell (props) {
  return (
    <div className="sell">
      <Menu>
        ...
      </Menu>
    </div>
  )
}

function Menu (props) {
  return (
    <div className="sell__menu">
      {props.children}
    </div>
  )
}