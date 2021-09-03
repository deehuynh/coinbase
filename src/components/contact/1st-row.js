import Row from "../row"
import Col from "../column"
import ColImage from "../column-image"
import IMG1 from "../../images/contact-img-1.png"
import Hero from "../hero"

export default function FirstRow () {
  const testHero = true;

  if (!testHero) {
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
        <ColImage className="contact__col-1-2" image={IMG1} />
      </Row>
    )
  }

  return (
    <Hero className="hero__contact" image={IMG1}>
      <h5>HOME/Contact us</h5>
      
      <h1>
        24/7 Customer support <br />
        Including weekends.
      </h1>

      <p>
        We’re always there ti help regardless the number <br />
        of queries at hand.
      </p>
    </Hero>
  )
}