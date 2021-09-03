import ColImage from "../column-image"
import Col from "../column"
import Button from "../button"

export default function HomeHero (props) {
  return (
    <div className="home-hero">
      <Col className="home-hero__col-1">
        <p>
          We provide easy solution
          <br />to exchange your <span>
          Bitcoin/ <br />
          GiftCard for money
          </span>
        </p>

        <p>
          CoinBase is a platform for trading your bitcoin and <br />
          giftcard at the best rate, why not give us a trial.
        </p>

        <Button
          name="get started" className="button--white-linear button--pd-20-35"
          textClassName="button__text--linear"
        />
      </Col>

      <ColImage className="home-hero__col-2" image={props.image} />
    </div>
  )
}