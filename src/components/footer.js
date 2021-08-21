import Col from './column'
import LogoI from '../images/Logo.png'

export default function Footer () {
  return (
    <footer className="footer">
      <Col className="footer__col-1">
        <div className="footer__logo">
          <img src={LogoI} alt="Logo" />
        </div>
      </Col>

      <Col className="footer__col-2"></Col>

      <Col className="footer__col-3"></Col>

      <Col className="footer__col-4"></Col>
    </footer>
  )
}