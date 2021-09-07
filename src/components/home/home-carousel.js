// Importing the splice
import { Carousel } from 'react-materialize';
import "materialize-css";
// import button
import Button from '../button';

export default function HomeCarousel () {
  return (
      <Carousel
        className="home-carousel"
        options={{
          dist: -40,
          duration: 100,
        }}
      >
        <div className="home-carousel__slide">
          <h5><span>19 JUNE, 2019</span> BUSINESS</h5>
          <h2>ETH TO NAIRA EXCHANGE <br />
            RATE IS NOW #400 PER...
          </h2>
          <p>Lorem ipsum dolor sit amet, magna habemus
            ius <br /> ad, qui minimum voluptaria in. Ad mei modus <br />
            quodsi complectitur, postea...
          </p>
          <Button className='button--not-active button--pd-15-30' name='read more' />
        </div>

        <div className="home-carousel__slide">
          <h5><span>19 JUNE, 2019</span> LIFESTYLE</h5>
          <h2>EXCHANGE 5 PRODUCTS & <br />
                      GET 1 FREE PRODUCT.
                  </h2>
          <p>Lorem ipsum dolor sit amet, magna habemus
            ius <br /> ad, qui minimum voluptaria in. Ad mei modus <br />
            quodsi complectitur, postea...
          </p>
          <Button className='button--not-active button--pd-15-30' name='read more' />
        </div>

        <div className="home-carousel__slide">
          <h5><span>19 JUNE, 2019</span> TECHNOLOGY</h5>
          <h2>HOW TO SELL YOUR ITUNES <br />
                      GIFTCARD WITH US .
                  </h2>
                  <p>Lorem ipsum dolor sit amet, magna habemus
            ius <br /> ad, qui minimum voluptaria in. Ad mei modus <br />
            quodsi complectitur, postea...
          </p>
          <Button className='button--not-active button--pd-15-30' name='read more' />
        </div>
      </Carousel>
  )
}