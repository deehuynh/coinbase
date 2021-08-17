import { 
  Header,
  Logo,
  Nav,
  Dropdown
} from "./header"

export default function Layout () {
  return (
    <div className="layout">
      <Header>
        <Logo />
        <Nav />
        <Dropdown />
      </Header>
    </div>
  )
}