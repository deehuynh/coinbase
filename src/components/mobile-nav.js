import MenuBtn from '../svgs/menu-btn.svg'
import { NavLink } from 'react-router-dom';
import Button from './button'
import { useRef } from 'react';

export default function MobileNav () {

  const refContainer = useRef(null);
  const refRightArrow = useRef(null);
  const refDownArrow = useRef(null);

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
    tabs.push(
      <NavLink 
        exact
        key={index}
        to={item.url}
        activeStyle={{color: 'limegreen'}}
      >{item.name}</NavLink>
    );
  });

  return (
    <nav className="m-nav">
      <img className="m-nav__btn" src={MenuBtn} alt="Menu" />

      <div className="m-nav__content" id="m-nav__content">
        <div className="m-nav__tab">
          {tabs}
        </div>

        <div onClick={handleDropdown} className="m-nav__dropdown">
          Sell Bitcoin/ Giftcard
          <span ref={refRightArrow} style={{display: 'block'}} className="m-nav__arrow"></span>
          <span ref={refDownArrow} style={{display: 'none'}} className="m-nav__down-arrow"></span>

          <div ref={refContainer} style={{display: 'none'}} className="m-nav__dropdown-content">
            <a href="/">Sell Bitcoin</a>
            <a href="/">Sell Giftcard</a>
          </div>
        </div>

        <Button name='login' id="m-nav__login-btn" className="button--linear-white button--pd-18-55" />
      </div>
    </nav>
  )
}