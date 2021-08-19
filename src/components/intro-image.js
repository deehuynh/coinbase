export default function IntroImage (props) {
  return (
    <div className="intro-image intro-image--spacing">
      <img src={props.image} alt="intro" />
    </div>
  )
}