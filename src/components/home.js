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
import HomeImg3 from '../images/home-img-3.png'
import BigCoin from '../svgs/bitcoin.svg'

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
        ...
      </Row>

      {/* Fourth row */}
      <Row className="home__fourth-row">
       <Col className="col--home-4">
          <h2>Great experience <br /> with CoinBase</h2>
          <p>
          CoinBase is an online site and a p2admin platform that allows users to buy, 
          sell and/ or exchange digital and fiat assets safely. Owned and managed 
          by CoinBase Business Services established and Incoperated in Nigeria.
          </p>

          <Button className="button--linear-white button--pd-18-40" name="discover" />
        </Col>

        <ColImage className="col-image--home-4" image={HomeImg3} />
      </Row>

      {/* fifth row */}
      <Row className="home__fifth-row">
        <Col className="col--home-5">
          <h2>Trade from anywhere</h2>

          <div>
            <p>
              <img src={BigCoin} alt="Bigcoin" />
            </p>
            <p>
              <img src={BigCoin} alt="Giftcard" />
            </p>
          </div>
        </Col>
      </Row>

      {/* Sixth row */}
      <Row className="home__sixth-row"></Row>
    </div>
  )
}