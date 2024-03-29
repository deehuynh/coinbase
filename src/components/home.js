// Importing the row component
import Row from "./row"
// Importing the column component
import Col from './column'
import ColImage from "./column-image"
import Image from "./image";
// Importing the button component
import Button from "./button"
import ImageButton from "./image-button"
// Importing the image
import HomeImg from '../images/home-hero.png'
import HomeImg2 from '../images/s-row-img.png'
import HomeImg3 from '../images/home-img-3.png'
import BitCoin from '../svgs/bitcoin.svg'
import Gifcard from '../svgs/giftcard.svg'
import Testimonial from '../images/testimonial.png'
import AppStoreDownload from '../images/app-store.png'
import GGPlayDownload from '../images/gg-play.png'
import Phone1 from '../images/phone-1.png'
import Phone2 from '../images/phone-2.png'
import EthI from '../svgs/Eth.svg'
import BankI from '../svgs/bank-building.svg'
import Transfer from '../svgs/Transfer.svg'
import Transfer2 from '../svgs/Transfer2.svg'
// Import home-hero
import HomeHero from "./home/home-hero";
import EmailForm from "./email-form"
import HomeCarousel from "./home/home-carousel";

export default function Home (props) {
  return (
    <div className="home">
      <HomeHero refSell={props.refSell} refSellB={props.refSellB} image={HomeImg} />

      {/* Second row */}
      <Row className="home__s-row">
        <ColImage className="col-image--home-2" image={HomeImg2} />

        <Col className="col--home-2">
          <h2>Welcome to CoinBase</h2>
          <p>
          We have the best rates . Simply start your exchange right now.
          Sign up for our Affiliate program and earn commission from each exchange.
          The earnings are credited in your account instantly and can be withdrawn 
          right away. Also note some exchange directions are hidden for unregistered 
          user. To ensure to have access to all our exchange directions and benefits 
          kindly sign up and verify your identity.
          </p>

          <Button id="home__btn-row2" className="button--linear-white button--pd-18-40" name="discover" />
        </Col>
      </Row>

      {/* Third row */}
      <Row className="home__th-row">
        <Col className="col--home-3">
          <Row className="home__th-row-1">
            <span>OUR RATES</span>
            <span>OUR RESERVES</span>
            <span>LATEST EXCHANGES</span>
          </Row>
          <Row className="home__th-row-2">
            <Row className="home__th-row-3">
              <Button
                className="button--linear-white button--pd-10-20 button--s8"
                name="8 hours ago" 
              />
            </Row>

            <Row className="home__th-row-4">
              <Row className="home__th-row-1-clone">
                <span>OUR RATES</span>
                <span>OUR RESERVES</span>
                <span>LATEST EXCHANGES</span>
              </Row>
              <Row className="home__th-row-3-clone">
                <Button
                  className="button--linear-white button--pd-10-20 button--s8"
                  name="8 hours ago" 
                />
              </Row>
              <div className="home__th-row-4--container">
              <Col className="home__ch-col-1">
                <div>
                  <p>
                    <img src={BitCoin} alt="bitcoin" />
                    <span>BTC</span>
                  </p>
                  <p>
                    <img src={EthI} alt="Eth" />
                    <span>ETH</span>
                  </p>
                </div>

                <div>
                  <p>
                    <span>We Buy <strong>@ ₦350/$</strong></span>
                    <span>We Sell <strong>@ ₦370/$</strong></span>
                  </p>
                  <p>
                    <span>We Buy <strong>@ ₦345/$</strong></span>
                    <span>We Sell <strong>@ ₦370/$</strong></span>
                  </p>
                </div>
              </Col>
              <Col className="home__ch-col-2">
                <div>
                  <p>
                    <img src={BankI} alt="Bank transfer" />
                    <span>Bank transfer</span>
                  </p>
                  <p>
                    <img src={BitCoin} alt="bitcoin" />
                    <span>Bitcoin</span>
                  </p>
                  <p>
                    <img src={EthI} alt="Ethereum" />
                    <span>Ethereum</span>
                  </p>
                </div>
                <div>
                  <p>NGN</p>
                  <strong>#3452030300303.24/$</strong>
                  <p><strong>399.98</strong> BTC</p>
                  <p><strong>1000.00</strong> ETH</p>
                </div>
              </Col>
              <Col className="home__ch-col-3">
                <p>Bitcoin BTC <img src={Transfer} alt="transfer" /> Bank <br /> Transfer NGN</p>
                <p>
                  <span><strong>1.16</strong> BTC</span>
                  <img src={Transfer2} alt="doubletransfer" />
                  <span><strong>696152299929.23</strong> NGN</span>
                </p>
                <p>
                  Amazon Card <img src={Transfer} alt="transfer" /> Bank <br /> Transfer NGN
                </p>
              </Col>
              </div>
            </Row>
          </Row>
        </Col>
      </Row>

      {/* Fourth row */}
      <Row className="home__fourth-row">
       <Col className="col--home-4-1">
          <h2>Great experience <br /> with CoinBase</h2>
          <p>
          CoinBase is an online site and a p2admin platform that allows <br /> users to buy, 
          sell and/ or exchange digital and fiat assets safely. <br /> Owned and managed 
          by CoinBase Business Services established <br /> and Incoperated in Nigeria.
          </p>

          <Button id="home__btn-row4" className="button--linear-white button--pd-18-40" name="discover" />
        </Col>

        <div className="col--home-4-2">
          <img src={HomeImg3} alt="Homeimg" />
        </div>
      </Row>

      {/* fifth row */}
      <Row className="home__fifth-row">
        <Col className="col--home-5">
          <h2>Trade from anywhere</h2>

          <div>
            <p>
              <img src={BitCoin} alt="Bitcoin" />
              <span>Bitcoin</span>
            </p>
            <p>
              <img src={Gifcard} alt="Giftcard" />
              <span>Gift Cards</span>
            </p>
          </div>
        </Col>
      </Row>

      {/* Sixth row */}
      <Row className="home__sixth-row">
        <Col className="col--home-6">
          <Row className="home__sixth-row12">
            <h2>Our blog</h2>
            <p>Get to know the latest stuff via our blog post.</p>
          </Row>

          <Row className="home__sixth-row11">
            <HomeCarousel />
          </Row>
        </Col>
      </Row>

      {/* Seventh row */}
      <Row className="home__seventh-row">
        <Col className="col--home-7">
          <h2>
            10,000 Satisfied clients <br />
            around the world
          </h2>

          <p>
          Yeah! we’re proud with numbers. We’ve helped thousands of clients all around 
          the world with our bespoke service. Hover ontop of them pic to view their 
          testimonials.
          </p>

          <img src={Testimonial} alt="Testimonial" />
        </Col>
      </Row>

      {/* Eighth row */}
      <Row className="home__eighth-row">
        <Col className="col--home-8">
          <h2>Download our app</h2>
          <p>
            Discover exclusive deals and discounts with <br />
            our mobile experience.
          </p>

          <div className="button__container">
            <ImageButton image={AppStoreDownload} />
            <ImageButton image={GGPlayDownload} />
          </div>

          <Col className="col--home-9">
            <Image image={Phone1} />
            <Image image={Phone2} />
          </Col>
        </Col>
      </Row>

      {/* Ninth row */}
      <Row className="home__ninth-row">
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
      </Row>
    </div>
  )
}