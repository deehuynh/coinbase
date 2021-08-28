import Row from "../row"
import Article from "../article"
// Import image
import Thumb1 from '../../images/blog-thumb-1.png'

export default function SecondRow () {
  return (
    <Row className="blog__2nd-row">
      <Article 
        image={Thumb1}
        title="HOW TO SELL YOUR ITUNES GIFTCARD WITH US"
        time="19 JUNE, 2019" genre="business"
        description="
        Lorem ipsum dolor sit amet, magna habemus ius ad,
        qui minimum voluptaria in. Ad mei modus quodsi complectitur, 
        postea verterem persecuti cu est, sea epicuri.
        "
      />
    </Row>
  )
}