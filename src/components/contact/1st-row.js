import Row from "../row"
import Col from "../column"
import ColImage from "../column-image"

export default function FirstRow () {
  return (
    <Row className="contact__1st-row">
      <Col className="contact__col-1-1"></Col>
      <ColImage className="contact__col-1-2" />
    </Row>
  )
}