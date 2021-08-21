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
        <Row className="footer__row-11">
          <img src={LogoI} alt="Logo" />
        </Row>

        <Row className="footer__row-12">
          Fusce ut elit aliquet, fermentum leo vel, tempus nunc.
          Fusce eu rhoncus augue. Fusce vel metus pharetra, fermentum 
        </Row>

        <Row className="footer__row-13">
          <span><img src={GGI} alt="ICON" /></span>
          <span><img src={FBI} alt="ICON" /></span>
          <span><img src={TWTI} alt="ICON" /></span>
          <span><img src={ISTGRI} alt="ICON" /></span>
        </Row>
      </Col>

      <Col className="footer__col-2">
        <h3>CoinBase Links</h3>

        <div>
          <span><a href="/">Home</a></span>
          <span><a href="/">About</a></span>
          <span><a href="/">Blog</a></span>
          <span><a href="/">Sell</a></span>
          <span><a href="/">Contact Us</a></span>
        </div>
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

        <Row className="footer__row-14">
          <div></div>
          <div className="footer__album--plus"></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </Row>
      </Col>
    </footer>
  )
}