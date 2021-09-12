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
import Sell from "./sell"
// import ScrollToTopBtn from "./top-btn"
import { useRef, useEffect } from "react"

// Importing the react-router
import {
  BrowserRouter as Router,
  Switch, Route
} from 'react-router-dom'

export default function Layout () {
  const refModal = useRef(null);
  const refSell = useRef(null);
  const refSellB = useRef(null);
  const refSellG = useRef(null);
  const refDetailB = useRef(null);
  const refDetailE = useRef(null);
  const refDetailAm = useRef(null);
  const refDetailAs = useRef(null);
  const refDetailS = useRef(null);
  const refDetailGg = useRef(null);
  const refDetailO = useRef(null);
  

  useEffect(()=>{
    window.onclick = (e) => {
      if (e.target.id === refModal.current.id) {
        refModal.current.style = "display: none";
        document.body.style.overflow = "auto";
      }

      if (e.target.id === refSell.current.id) {
        refSell.current.style = "display: none";
        refSellB.current.style = "display: none";
        refSellG.current.style = "display: none";
        refDetailB.current.style = "display: none";
        refDetailE.current.style = "display: none";
        refDetailAm.current.style = "display: none";
        refDetailAs.current.style = "display: none";
        refDetailS.current.style = "display: none";
        refDetailGg.current.style = "display: none";
        refDetailO.current.style = "display: none";
        document.body.style.overflow = "auto";
      }
    }
  });
  
  return (
    <div className="layout">
      <Router>
        <ScrollToTop />
        {/* Header component */}
        <Header>
          <Logo />
          <Nav />
          <Dropdown refSell={refSell} refSellB={refSellB} refSellG={refSellG} />
          <div className="m-menu-group">
            <Button refModal={refModal} name='login' id="header__login-btn" className="button--linear-white button--pd-18-55" />
            <MobileNav refSell={refSell} refSellB={refSellB} refSellG={refSellG} refModal={refModal} />
          </div>
        </Header>

        {/* Content */}
        <Switch>
          <Route exact path='/'>
            <Home refSell={refSell} refSellB={refSellB} />
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

        <Signin refModal={refModal} />
        <Sell 
          refDetailB={refDetailB} refDetailE={refDetailE}
          refDetailAm={refDetailAm} refDetailAs={refDetailAs} refDetailS={refDetailS} 
          refDetailGg={refDetailGg} refDetailO={refDetailO}
          refSell={refSell} refSellB={refSellB} refSellG={refSellG} />
        {/* <ScrollToTopBtn /> */}
      </Router>
    </div>
  )
}