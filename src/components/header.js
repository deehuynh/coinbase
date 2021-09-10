import LogoI3 from '../images/Logo-3.png'
import {NavLink} from 'react-router-dom'
import { useRef} from 'react'

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
      <NavLink exact to='/'>
        <img src={LogoI3} alt="Logo" />
      </NavLink>
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
    if (item.name === 'Home') {
      data.push(
        <NavLink
          exact
          key={index}
          to={item.url}
          activeClassName="header__nav--active"
        >{item.name}</NavLink>
      );
    } else {
      data.push(
        <NavLink
          key={index}
          to={item.url}
          activeClassName="header__nav--active"
        >{item.name}</NavLink>
      );
    }
  });

  return (
    <nav className="header__nav">
      {data}
    </nav>
  )
}

/* Dropdown component */
function Dropdown (props) {
  const refContainer = useRef(null);
  const handleDropdown = () => {
    const style = refContainer.current.style.display; 
    if (style === 'none') {
      refContainer.current.style = "display: block"
    } else if (style === 'block') {
      refContainer.current.style = "display: none"
    }
  }
  const openSellB = () => {
    props.refSell.current.style = "display: block";
    props.refSellB.current.style = "display: block";
  }

  const openSellG = () => {
    props.refSell.current.style = "display: block";
    props.refSellG.current.style = "display: block";
  }

  return (
    <div className="header__dropdown">
      <div className="header__dropdown-title" onClick={handleDropdown}>
        Sell Bitcoin/ Giftcard <span id="header__dropdown-arrow"></span>

        <div ref={refContainer} style={{display: 'none'}} id="dropdown" className="header__dropdown-content">
          <span onClick={openSellB}>Sell Bitcoin</span>
          <span onClick={openSellG}>Sell Giftcard</span>
        </div>
        
      </div>
    </div>
  )
}

export {Header, Logo, Nav, Dropdown};