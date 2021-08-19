export default function IntroImage (props) {
  return (
    <div className={`intro-image `+ props.className}>
      <img src={props.image} alt="intro" />
    </div>
  )
}