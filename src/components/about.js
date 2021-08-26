// Import row
import Row from "./row"
//Import column
import Col from './column'
import ColImg from './column-image'
// Import images
import IMG1 from '../images/about-img-1.png'

export default function About (props) {
    return (
      <div className="about">
        <Row className="about__1st-row">
          <Col className="about__col-1-1">
            <h5>HOME/about us</h5>

            <h1>
              Great service, <br />
              Professional support
            </h1>

            <p>
              CoinBase is a platform for trading your bitcoin and <br />
              giftcard at the best rate, why not give us a trial.
            </p>
          </Col>

          <ColImg className="about__col-1-2" image={IMG1} />
        </Row>

        <Row className="about__2nd-row">
          <Col className="about__col-2">
            <h4>
              “Morbi sagittis ultricies ex, a tempus lorem suscipit non.
              Donec semper leo ut lobortis condimentum. Orci varius natoque penatibus et
              magnis”
            </h4>
          </Col>
        </Row>
      </div>
    )
  }