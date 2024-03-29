import Row from "../row"
import Article from "../article"
// Import image
import Thumb1 from '../../images/blog-thumb-1.png'
import Thumb2 from '../../images/blog-thumb-2.png'
import Thumb3 from '../../images/blog-thumb-3.png'

export default function SecondRow () {
  return (
    <Row className="blog__2nd-row">
      <Article
        className="article--mgbt-50"
        image={Thumb1}
        title="HOW TO SELL YOUR ITUNES GIFTCARD WITH US"
        time="19 JUNE, 2019" genre="business"
        description="
        Lorem ipsum dolor sit amet, magna habemus ius ad,
        qui minimum voluptaria in. Ad mei modus quodsi complectitur, 
        postea verterem persecuti cu est, sea epicuri.
        "
      />

      <Article
        className="article--mgbt-50"
        image={Thumb2}
        title="EXCHANGE 5 PRODUCTS & GET 1 FREE PRODUCT."
        time="09 september, 2019" genre="business"
        description="
        Lorem ipsum dolor sit amet, magna habemus ius ad,
        qui minimum voluptaria in. Ad mei modus quodsi complectitur, 
        postea verterem persecuti cu est, sea epicuri.
        "
      />

      <Article
        className="article--mgbt-50"
        image={Thumb3}
        title="ETH TO NAIRA EXCHANGE RATE IS NOW #400 PER..."
        time="18 JUNE, 2019" genre="business"
        description="
        Lorem ipsum dolor sit amet, magna habemus ius ad,
        qui minimum voluptaria in. Ad mei modus quodsi complectitur, 
        postea verterem persecuti cu est, sea epicuri.
        "
      />
    </Row>
  )
}