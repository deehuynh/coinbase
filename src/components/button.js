export default function Button (props) {
  const handleClick = () => {
    if (props.refModal) {
      props.refModal.current.style = "display: block"
    }
  }
  return (
    <div onClick={handleClick} id={props.id} className={`button ` + props.className}>
      <span className={`button__text ` + props.textClassName}>{props.name}</span>
    </div>
  )
}