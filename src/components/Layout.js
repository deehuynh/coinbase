// Importing the components
import { 
  Header,
  Logo,
  Nav,
  Dropdown
} from "./header"
import MobileNav from './mobile-nav'
import Button from '../components/button'
import Home from "./home"
import About from "./about"
import Blog from "./blog/blog"
import Contact from "./contact/contact"
import Footer from "./footer"
import ScrollToTop from "./scrollToTop"
import Signin from "./signin"
import useModal from '../Hooks/useModal'
import { useRef } from "react"

// Importing the react-router
import {
  BrowserRouter as Router,
  Switch, Route
} from 'react-router-dom'

export default function Layout () {
  const refSignin = useRef(null);
  console.log(refSignin.current);
  return (
    <div className="layout">
      <Router>
        <ScrollToTop />
        {/* Header component */}
        <Header>
          <Logo />
          <Nav />
          <Dropdown />
          <div className="m-menu-group">
            <Button refSignin={refSignin} name='login' id="header__login-btn" className="button--linear-white button--pd-18-55" />
            <MobileNav />
          </div>
        </Header>

        {/* Content */}
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>

          <Route path='/about-us'>
            <About />
          </Route>
          
          <Route path='/blog'>
            <Blog />
          </Route>

          <Route path='/contact-us'>
            <Contact />
          </Route>
        </Switch>

        <Footer />

        <Signin refSignin={refSignin} />
      </Router>
    </div>
  )
}