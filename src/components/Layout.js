import { 
  Header, Logo 
} from "./header"

export default function Layout () {
  return (
    <div className="layout">
      <Header>
        <Logo />
      </Header>
    </div>
  )
}