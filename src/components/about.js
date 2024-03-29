// Import row
import Row from "./row"
//Import column
import Col from './column'
import ColImg from './column-image'
// Import carousel
import AboutCarousel from "./about-carousel"
// Import images
import IMG1 from '../images/about-img-1.png'
import IMG2 from '../images/about-img-2.png'
import IMG3 from '../images/Tree.png'
// Import svgs
import SVG1 from '../svgs/Quality.svg'
import SVG2 from '../svgs/medal.svg'
import SVG3 from '../svgs/customer-review.svg'
import SVG4 from '../svgs/support.svg'
// Import hero
import Hero from "./hero"
import EmailForm from "./email-form"

export default function About () {
    return (
      <div className="about">
        <Hero className="hero__about hero__about-m" image={IMG1}>
          <h5>HOME/about us</h5>

          <h1>
            Great service, <br />
            Professional support
          </h1>

          <p>
            CoinBase is a platform for trading your bitcoin and <br />
            giftcard at the best rate, why not give us a trial.
          </p>
        </Hero>

        <Row className="about__2nd-row">
          <Col className="about__col-2">
            <h2>
              “Morbi sagittis ultricies ex, a tempus lorem suscipit <br /> non.
              Donec semper leo ut lobortis condimentum. Orci <br /> varius natoque penatibus et
              magnis”
            </h2>

            <p>
              Ramon Ridwan • CEO CoinBase
            </p>
          </Col>
        </Row>

        <Row className="about__3th-row">
          <Col className="about__col-3">
            <ColImg className="about__col-3-1" image={IMG2} />

            <h2>About CoinBase</h2>

            <p>
              CoinBase is an online site and a p2admin platform that allows <br /> users
              to buy, sell and/ or exchange digital and fiat assets safely. <br /> Owned
              and managed by CoinBase Business Services established <br /> and Incoperated
              in Nigeria.
            </p>

            <Col className="about__col-3-2">
              <img src={SVG1} alt="qualities" />
              <img src={SVG2} alt="qualities" />
              <img src={SVG3} alt="qualities" />
              <img src={SVG4} alt="qualities" />
            </Col>
          </Col>
        </Row>

        <Row className="about__4th-row">
          <Col className="about__col-4">
            <h2>Our history</h2>

            <div className="about__tree">
              <Col className="about__col-4-1">
                <div>
                  <h1>May 2010</h1>
                  <p>
                    Ut enim mi, mattis at sollicitudin rhoncus, rhoncus <br /> eget sem. 
                    Curabitur aliquam tellus eu nisl suscipit, <br /> at vestibulum ex rutrum. 
                    Nulla facilisi. Cras <br /> ullamcorper pellentesque orci, nec vestibulum <br />
                    nibh.uspendisse
                  </p>
                </div>

                <div>
                  <h1>May 2019</h1>
                  <p>
                    Ut enim mi, mattis at sollicitudin rhoncus, rhoncus <br /> eget sem. 
                    Curabitur aliquam tellus eu nisl suscipit, <br /> at vestibulum ex rutrum. 
                    Nulla facilisi. Cras <br /> ullamcorper pellentesque orci, nec vestibulum <br />
                    nibh.uspendisse
                  </p>
                </div>
              </Col>
              <Col className="about__col-4-2">
                <img src={IMG3} alt="Tree" />
              </Col>
              <Col className="about__col-4-3">
                <div>
                  <h1>May 2017</h1>
                  <p>
                    Ut enim mi, mattis at sollicitudin rhoncus, rhoncus <br /> eget sem. 
                    Curabitur aliquam tellus eu nisl suscipit, <br /> at vestibulum ex rutrum. 
                    Nulla facilisi. Cras <br /> ullamcorper pellentesque orci, nec vestibulum <br />
                    nibh.uspendisse
                  </p>
                </div>
              </Col>
            </div>

            <h3>To be continue…</h3>
          </Col>
        </Row>

        <Row className="about__5th-row">
          <Col className="about__col-5">
            <h2>Meet the team</h2>

            <p>
              Meet the team that  makes the process of this system fast and <br />
              painless as possible to provide you with good result 
            </p>

            <AboutCarousel />
          </Col>
        </Row>

        <Row className="about__6th-row">
          <Col className="about__col-6">
            <h2>Subscribe our newsletter</h2>

            <p>
              Subscribe to our newsletter for daily/weekly <br />
              update of our products and services.
            </p>

            <EmailForm className="about__email-form" />
          </Col>
        </Row>
      </div>
    )
  }