import LogoI3 from '../images/Logo-3.png'
import {NavLink} from 'react-router-dom'
import { useRef} from 'react'

const baseUrl = "http://localhost:3000/"
// const baseUrl = "https://dh-coinbase.web.app/"

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
      <a href={baseUrl}>
        <img src={LogoI3} alt="Logo" />
      </a>
    </div>
  )
}

/* Navigation component */
function Nav (props) {

  const data = [];
  const listNav = [
    {
      name: 'Home', url: '/'
    },
    {
      name: 'About Us', url: '/about-us'
    },
    {
      name: 'Blog', url: '/blog'
    },
    {
      name: 'Contact Us', url: '/contact-us'
    },
  ];
  listNav.forEach((item,index) => {
    data.push(
      <NavLink 
        exact
        key={index}
        to={item.url}
        activeClassName="header__nav--active"
      >{item.name}</NavLink>
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
  const refContainer = useRef(null);
  const handleDropdown = () => {
    const style = refContainer.current.style.display; 
    if (style === 'none') {
      refContainer.current.style = "display: block"
    } else if (style === 'block') {
      refContainer.current.style = "display: none"
    }
  }

  return (
    <div className="header__dropdown">
      <div className="header__dropdown-title" onClick={handleDropdown}>
        Sell Bitcoin/ Giftcard <span></span>

        <div ref={refContainer} style={{display: 'none'}} id="dropdown" className="header__dropdown-content">
          <span>Sell Bitcoin</span>
          <span>Sell Giftcard</span>
        </div>
        
      </div>
    </div>
  )
}

export {Header, Logo, Nav, Dropdown};