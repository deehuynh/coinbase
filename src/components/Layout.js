// Importing the components
import { 
  Header,
  Logo,
  Nav,
  Dropdown
} from "./header"
import Button from '../components/button'
import Home from "./home"
import About from "./about"

// Importing the react-router
import {
  BrowserRouter as Router,
  Switch, Route
} from 'react-router-dom'

export default function Layout () {
  return (
    <div className="layout">
      <Router>
        {/* Header component */}
        <Header>
          <Logo />
          <Nav />
          <Dropdown />
          <Button name='login' className="button--linear-white" />
        </Header>

        {/* Content */}
        <Switch>
          {/* Home component */}
          <Route exact path='/'>
            <Home />
          </Route>

          <Route path='/about-us'>
            <About />
          </Route>
        </Switch>
      </Router>
    </div>
  )
}