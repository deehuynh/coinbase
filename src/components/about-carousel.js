import { Carousel } from 'react-materialize';
import "materialize-css";
import { Link } from 'react-router-dom';
// import "materialize-css/dist/css/materialize.min.css"

export default function AboutCarousel () {
  return (
    <Carousel
      className="about-carousel"
      options={{
        dist: -40,
        duration: 100,
      }}
    >
      <Link to='/'>
        <div>
          <h5>CEO</h5>
          <p>Amanda Roth</p>
        </div>
      </Link>
      <Link to='/'></Link>
      <Link to='/'></Link>
      <Link to='/'></Link>
      <Link to='/'></Link>
    </Carousel>
  )
}