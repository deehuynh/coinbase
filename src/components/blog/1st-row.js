import Row from "../row"
import Col from "../column"
import ColImage from "../column-image"
import IMG1 from '../../images/blog-img-1.png'

export default function FirstRow () {
  return (
    <Row className="blog__1st-row">
      <Col className="blog__col-1-1">
        <h2>
          Stay updated, <br />
          Never miss a post.
        </h2>
      </Col>
      <ColImage className="blog__col-1-2" image={IMG1} />
    </Row>
  )
}