// Importing the row component
import Row from "./row"
// Importing the column component
import Col from '../components/column'
import ColImage from "./column-image"
// Importing the button component
import Button from "./button"
// Importing the image
import HomeImg from '../images/home-hero.png'
import HomeImg2 from '../images/s-row-img.png'

export default function Home (props) {
  return (
    <div className="home">
      {/* First row */}
      <Row className="home__f-row">
        <Col className="col--home">
          <p>
            We provide easy solution
            to exchange your <span>
              Bitcoin/
              GiftCard for money
            </span>
          </p>

          <p className="col--light">
            CoinBase is a platform for trading your bitcoin and
            giftcard at the best rate, why not give us a trial.
          </p>

          <Button
            name="get started" className="button--white-linear button--pd-20-35"
            textClassName="button__text--linear"
          />
        </Col>

        <ColImage className="col-image--home" image={HomeImg} />
      </Row>

      {/* Second row */}
      <Row className="home__s-row">
        <ColImage className="col-image--home-2" image={HomeImg2} />

        <Col className="col--home-2">
          <h2>Welcome to CoinBase</h2>
          <p>
          We have the best rates . Simply start your exchange right now.
          Sign up for our Affiliate program and earn commission from each exchange.
          The earnings are credited in your account instantly and can be withdrawn 
          right away. Also note some exchange directions are hidden for unregistered 
          user. To ensure to have access to all our exchange directions and benefits 
          kindly sign up and verify your identity.
          </p>

          <Button className="button--linear-white button--pd-18-40" name="discover" />
        </Col>
      </Row>

      {/* Third row */}
      <Row className="home__th-row">

      </Row>
    </div>
  )
}