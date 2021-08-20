import Row from "./row"
import Button from "./button"

export default function About (props) {
    return (
      <div className="about">
        <Row className="about__f-row">
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
        </Row>
      </div>
    )
  }