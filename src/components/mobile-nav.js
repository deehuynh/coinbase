import MenuBtn from '../svgs/menu-btn.svg'
import { NavLink } from 'react-router-dom';
import Button from './button'

export default function MobileNav () {

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

        <div id="m-nav__dropdown-btn" className="m-nav__dropdown">
          Sell Bitcoin/ Giftcard
          <span className="m-nav__arrow"></span>

          <div id="m-nav__dropdown" className="m-nav__dropdown-content">
            <a href="/">Sell Bitcoin</a>
            <a href="/">Sell Giftcard</a>
          </div>
        </div>

        <Button name='login' id="m-nav__login-btn" className="button--linear-white button--pd-18-55" />
      </div>
    </nav>
  )
}