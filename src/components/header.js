import LogoI from '../images/Logo.png'

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
      <img src={LogoI} alt="Logo" />
    </div>
  )
}

function Nav () {
  return (
    <nav className="nav"></nav>
  )
}

export {Header, Logo, Nav};