// Importing the components
import { 
  Header,
  Logo,
  Nav,
  Dropdown
} from "./header"
import Button from '../components/button'
import Home from "./home"
import Row from "./row"

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
            <Home>
              <Row className="home__f-row" />
            </Home>
          </Route>


        </Switch>
      </Router>
    </div>
  )
}