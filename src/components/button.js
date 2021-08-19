export default function Button (props) {
  return (
    <div className={`button ` + props.className}>
      <span className={`button__text ` + props.textClassName}>{props.name}</span>
    </div>
  )
}