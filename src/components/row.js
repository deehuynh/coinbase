import IntroText from "./intro-text"
import IntroImage from "./intro-image"
import HomeImg from '../images/home-hero.png'
import Button from "./button"

export default function Row (props) {
  return (
    <div className={props.className}>
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
    </div>
  )
}