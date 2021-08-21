import Col from './column'
import Row from './row'
import LogoI from '../images/Logo-f.png'
import GGI from '../svgs/Google+.svg'
import FBI from '../svgs/Facebook.svg'
import TWTI from '../svgs/Twitter.svg'
import ISTGRI from '../svgs/Instagram.svg'

export default function Footer () {
  return (
    <footer className="footer">
      <Col className="footer__col-1">
        <Row className="footer__row-1.1">
          <img src={LogoI} alt="Logo" />
        </Row>

        <Row className="footer__row-1.2">
          Fusce ut elit aliquet, fermentum leo vel, tempus nunc.
          Fusce eu rhoncus augue. Fusce vel metus pharetra, fermentum 
        </Row>

        <Row className="footer__row-1.3">
          <span><img src={GGI} alt="ICON" /></span>
          <span><img src={FBI} alt="ICON" /></span>
          <span><img src={TWTI} alt="ICON" /></span>
          <span><img src={ISTGRI} alt="ICON" /></span>
        </Row>
      </Col>

      <Col className="footer__col-2">
        <h3>CoinBase Links</h3>

        <a href="/">Home</a>
        <a href="/">About</a>
        <a href="/">Blog</a>
        <a href="/">Sell</a>
        <a href="/">Contact Us</a>
      </Col>

      <Col className="footer__col-3">
        <h2>Contact Us</h2>

        <p>Phone</p>
        <p>Email</p>
        <p>Address</p>
        <p>Download Our app</p>
      </Col>

      <Col className="footer__col-4">
        <h2>Coinbase Instagram</h2>

        <div className="footer__album">
          <div></div>
          <div className="footer__album--plus"></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </Col>
    </footer>
  )
}