// Importing the splice
import {Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/themes/splide-skyblue.min.css';
// import button
import Button from './button';

export default function Carousel () {
  return (
    <div className="home-carousel">
      <Splide
        options = {{
          type: 'loop',
          perPage: 3,
          perMove: 1,
          focus: 'center',
        }}
      >
        <SplideSlide className="home-carousel__slide">
          <h5><span>19 JUNE, 2019</span> BUSINESS</h5>
          <h2>ETH TO NAIRA EXCHANGE <br />
            RATE IS NOW #400 PER...
          </h2>
          <p>Lorem ipsum dolor sit amet, magna habemus
            ius ad, qui minimum voluptaria in. Ad mei modus
            quodsi complectitur, postea...
          </p>
          <Button className='button--not-active button--pd-15-30' name='read more' />
        </SplideSlide>

        <SplideSlide>
          <h5><span>19 JUNE, 2019</span> BUSINESS</h5>
          <h2>ETH TO NAIRA EXCHANGE <br />
            RATE IS NOW #400 PER...
          </h2>
          <p>Lorem ipsum dolor sit amet, magna habemus
            ius ad, qui minimum voluptaria in. Ad mei modus
            quodsi complectitur, postea...
          </p>
          <Button className='button--not-active button--pd-15-30' name='read more' />
        </SplideSlide>

        <SplideSlide>
          <h5><span>19 JUNE, 2019</span> BUSINESS</h5>
          <h2>ETH TO NAIRA EXCHANGE <br />
            RATE IS NOW #400 PER...
          </h2>
          <p>Lorem ipsum dolor sit amet, magna habemus
            ius ad, qui minimum voluptaria in. Ad mei modus
            quodsi complectitur, postea...
          </p>
          <Button className='button--not-active button--pd-15-30' name='read more' />
        </SplideSlide>
      </Splide>
    </div>
  )
}