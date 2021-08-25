// Import row
import Row from "./row"
//Import column
import Col from './column'

export default function About (props) {
    return (
      <div className="about">
        <Row className="about__1st-row">
          <Col className="about__col-1-1">
            <h1>Stay updated, <br />
                Never miss a post.
            </h1>
          </Col>

          <Col className="about__col-1-2">

          </Col>
        </Row>
      </div>
    )
  }