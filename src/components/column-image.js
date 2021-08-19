

export default function ColImage (props) {
  return (
    <div className={`col-image ` + props.className}>
      <img src={props.image} alt="Col" />
    </div>
  )
}