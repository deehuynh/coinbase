import { Carousel } from 'react-materialize';
import "materialize-css";
// import "materialize-css/dist/css/materialize.min.css"

export default function AboutCarousel () {
  return (
    <Carousel
      className="about-carousel"
      options={{
        dist: -30,
        duration: 200,
      }}
    >
      <a href="#one!"><img src="https://lorempixel.com/250/250/nature/1" /></a>
      <a href="#two!"><img src="https://lorempixel.com/250/250/nature/2" /></a>
      <a href="#three!"><img src="https://lorempixel.com/250/250/nature/3" /></a>
      <a href="#four!"><img src="https://lorempixel.com/250/250/nature/4" /></a>
      <a href="#five!"><img src="https://lorempixel.com/250/250/nature/5" /></a>
    </Carousel>
  )
}