import MenuBtn from '../svgs/menu-btn.svg'
import CloseBtn from '../svgs/close-btn.svg'
import { NavLink } from 'react-router-dom';
import Button from './button'
import { useRef } from 'react';

export default function MobileNav (props) {

  const refContainer = useRef(null);
  const refRightArrow = useRef(null);
  const refDownArrow = useRef(null);
  const refNav = useRef(null);
  const refOpenNav = useRef(null);
  const refCloseNav = useRef(null);

  const tabs = [];

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

  const handleNav = () => {
    const style = refNav.current.style.display;
    if (style === 'none') {
      refNav.current.style = "display: block";
      refOpenNav.current.style = "display: none";
      refCloseNav.current.style = "display: block";
    } else if (style === 'block') {
      refNav.current.style = "display: none";
      refOpenNav.current.style = "display: block";
      refCloseNav.current.style = "display: none";
    }
  }

  const handleDropdown = () => {
    const style = refContainer.current.style.display;
    if (style === 'none') {
      refContainer.current.style = "display: block";
      refRightArrow.current.style = "display: none";
      refDownArrow.current.style = "display: block";
    } else if (style === 'block') {
      refContainer.current.style = "display: none"
      refRightArrow.current.style = "display: block";
      refDownArrow.current.style = "display: none";
    }
  }

  listNav.forEach((item,index) => {
    if (item.name === 'Home') {
      tabs.push(
        <NavLink 
          exact
          key={index}
          to={item.url}
          activeClassName="m-nav-active"
        >{item.name}</NavLink>
      );
    } else {
      tabs.push(
        <NavLink 
          key={index}
          to={item.url}
          activeClassName="m-nav-active"
        >{item.name}</NavLink>
      );
    }
  });

  const openSellB = (e) => {
    e.preventDefault();
    props.refSell.current.style = "display: block";
    props.refSellB.current.style = "display: block";
    document.body.style.overflow = "hidden";
  }

  const openSellG = (e) => {
    e.preventDefault();
    props.refSell.current.style = "display: block";
    props.refSellG.current.style = "display: block";
    document.body.style.overflow = "hidden";
  }

  return (
    <nav className="m-nav">
      <img ref={refOpenNav} style={{display: 'block'}} onClick={handleNav} className="m-nav__btn" src={MenuBtn} alt="Menu" />
      <img ref={refCloseNav} style={{display: 'none'}} onClick={handleNav} className="m-nav__btn" src={CloseBtn} alt="Menu" />

      <div ref={refNav} style={{display: 'none'}} className="m-nav__content" id="m-nav__content">
        <div className="m-nav__tab">
          {tabs}
        </div>

        <div onClick={handleDropdown} className="m-nav__dropdown">
          Sell Bitcoin/ Giftcard
          <span ref={refRightArrow} style={{display: 'block'}} className="m-nav__arrow"></span>
          <span ref={refDownArrow} style={{display: 'none'}} className="m-nav__down-arrow"></span>

          <div ref={refContainer} style={{display: 'none'}} className="m-nav__dropdown-content">
            <a href="/" onClick={(e)=>{openSellB(e)}}>Sell Bitcoin</a>
            <a href="/" onClick={(e)=>{openSellG(e)}}>Sell Giftcard</a>
          </div>
        </div>

        <Button refModal={props.refModal} name='login' id="m-nav__login-btn" className="button--linear-white button--pd-18-55" />
      </div>
    </nav>
  )
}