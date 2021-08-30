import Row from "../row"
import Col from "../column"
import ColImage from "../column-image"

export default function FirstRow () {
  return (
    <Row className="contact__1st-row">
      <Col className="contact__col-1-1">
        <h5>HOME/Contact us</h5>

        <h1>
          24/7 Customer support <br />
          Including weekends.
        </h1>

        <p>
          We’re always there ti help regardless the number <br />
          of queries at hand.
        </p>
      </Col>
      <ColImage className="contact__col-1-2" />
    </Row>
  )
}