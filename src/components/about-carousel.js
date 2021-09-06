import { Carousel } from 'react-materialize';
import "materialize-css";

export default function AboutCarousel () {
  return (
    <Carousel
      className="about-carousel"
      options={{
        dist: -40,
        duration: 100,
      }}
    >
      <section>
        <div>
          <h5>CEO</h5>
          <p>Amanda Roth</p>
        </div>
      </section>
      <section></section>
      <section></section>
      <section></section>
      <section></section>
    </Carousel>
  )
}