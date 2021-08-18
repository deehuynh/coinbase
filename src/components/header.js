import LogoI from '../images/Logo.png'
import {NavLink} from 'react-router-dom'

function Header (props) {
  return (
    <header className="header header--pd">
      {props.children}
    </header>
  )
}

/* Logo component */
function Logo () {
  return (
    <div className="header__logo">
      <img src={LogoI} alt="Logo" />
    </div>
  )
}

/* Navigation component */
function Nav () {
  const Link = (props) => {
    return (
      <NavLink to="/">{props.name}</NavLink>
    )
  }

  const data = [];
  const listNav = ['Home', 'About Us', 'Blog', 'Contact Us'];
  listNav.forEach((item,index) => {
    data.push(
      <Link key={index} name={item} />
    );
  });

  return (
    <nav className="header__nav">
      {data}
    </nav>
  )
}

/* Dropdown component */
function Dropdown () {
  return (
    <div className="header__dropdown">
      <div className="header__dropdown-title">
        Sell Bitcoin/ Giftcard

        <div className="header__dropdown-content">
          <span>Sell Bitcoin</span>
          <span>Sell Giftcard</span>
        </div>
        
      </div>
    </div>
  )
}

export {Header, Logo, Nav, Dropdown};