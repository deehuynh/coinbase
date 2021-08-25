// Import row
import Row from "./row"
//Import column
import Col from './column'

export default function About (props) {
    return (
      <div className="about">
        <Row className="about__1st-row">
          <Col className="about__col-1-1">
            <h5>HOME/BLOG</h5>

            <h1>Stay updated, <br />
                Never miss a post.
            </h1>

            <p>
              Get to know the latest stuff about our services <br />
              via our blog post.
            </p>
          </Col>

          <Col className="about__col-1-2">

          </Col>
        </Row>
      </div>
    )
  }