import Row from "./row"
import Col from "./column"
import ColImage from "./column-image"

export default function Hero (props) {
  const addClass = props.className ? props.className : '';
  return (
    <Row className="hero">
      <Col className="hero__col-1">
        {props.children}
      </Col>
      <ColImage className={`hero__col-2 ` + addClass} image={props.image} />
    </Row>
  )
}