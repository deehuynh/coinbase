function Header (props) {
  return (
    <header className="header">
      {props.children}
    </header>
  )
}

function Logo () {
  return (
    <div className="header__logo">
      <img src="" alt="" />
    </div>
  )
}

export {Header, Logo};