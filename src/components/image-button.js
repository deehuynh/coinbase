export default function ImageButton (props) {
  return (
    <a href="/" className={`image-button ` + props.className}>
      <img src={props.image} alt="Button" />
    </a>
  )
}