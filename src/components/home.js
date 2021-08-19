import Row from "./row"
import IntroText from "./intro-text"
import IntroImage from "./intro-image"
import Button from "./button"
import HomeImg from '../images/home-hero.png'


export default function Home (props) {
  return (
    <div className="home">
      {/* First row */}
      <Row className="home__f-row">
        <IntroText>
          <p>
            We provide easy solution
            to exchange your <span>
              Bitcoin/
              GiftCard for money
            </span>
          </p>

          <p className="intro-text--light">
            CoinBase is a platform for trading your bitcoin and
            giftcard at the best rate, why not give us a trial.
          </p>

          <Button
            name="get started" className="button--white-linear"
            textClassName="button__text--linear"
          />
        </IntroText>

        <IntroImage image={HomeImg} />
      </Row>

      {/* Second row */}
    </div>
  )
}