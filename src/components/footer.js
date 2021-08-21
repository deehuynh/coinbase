import Col from './column'
import Logo from '../svgs/full-logo.svg'
import FullLogo from './full-logo'

export default function Footer () {
  return (
    <footer className="footer">
      <Col className="footer__col-1">
        <div className="footer__logo">
          <FullLogo />
        </div>
      </Col>

      <Col className="footer__col-2"></Col>

      <Col className="footer__col-3"></Col>

      <Col className="footer__col-4"></Col>
    </footer>
  )
}