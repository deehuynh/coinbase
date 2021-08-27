import Row from "../row"
import Col from "../column"
import ColImage from "../column-image"
import IMG1 from '../../images/blog-img-1.png'

export default function FirstRow () {
  return (
    <Row className="blog__1st-row">
      <Col className="blog__col-1-1">
        <h5>HOME/BLOG</h5>

        <h1>
          Stay updated, <br />
          Never miss a post.
        </h1>

        <p>
          Get to know the latest stuff about our services <br />
          via our blog post.
        </p>
      </Col>
      <ColImage className="blog__col-1-2" image={IMG1} />
    </Row>
  )
}