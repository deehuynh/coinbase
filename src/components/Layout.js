import { 
  Header,
  Logo,
  Nav,
  Dropdown
} from "./header"
import Button from '../components/button'

export default function Layout () {
  return (
    <div className="layout">
      <Header>
        <Logo />
        <Nav />
        <Dropdown />
        <Button name='login' />
      </Header>
    </div>
  )
}