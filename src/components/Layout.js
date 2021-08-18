// Importing the components
import { 
  Header,
  Logo,
  Nav,
  Dropdown
} from "./header"
import Button from '../components/button'

// Importing the react-router
import {
  BrowserRouter as Router,
  Switch, Route
} from 'react-router-dom'

export default function Layout () {
  return (
    <div className="layout">
      <Router>
        <Header>
          <Logo />
          <Nav />
          <Dropdown />
          <Button name='login' />
        </Header>
      </Router>
    </div>
  )
}