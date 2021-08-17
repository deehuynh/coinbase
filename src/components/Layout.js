import { 
  Header, Logo, Nav
} from "./header"

export default function Layout () {
  return (
    <div className="layout">
      <Header>
        <Logo />
        <Nav />
      </Header>
    </div>
  )
}