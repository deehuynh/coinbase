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

// Importing the react-router
import {
  BrowserRouter as Router,
  Switch, Route
} from 'react-router-dom'

export default function Layout () {
  const baseUrl = '/coinbase';
  return (
    <div className="layout">
      <Router>
        {/* Header component */}
        <Header>
          <Logo />
          <Nav baseUrl={baseUrl}/>
          <Dropdown />
          <div className="m-menu-group">
            <Button name='login' id="header__login-btn" className="button--linear-white button--pd-18-55" />
            <MobileNav />
          </div>
        </Header>

        {/* Content */}
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>

          <Route path={baseUrl + `/about-us`}>
            <About />
          </Route>
          
          <Route path={baseUrl + `/blog`}>
            <Blog />
          </Route>

          <Route path={baseUrl + `/contact-us`}>
            <Contact />
          </Route>
        </Switch>

        <Footer />
      </Router>
    </div>
  )
}