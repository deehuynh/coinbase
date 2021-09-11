export default function Button (props) {
  const handleClick = () => {
    if (props.refModal) {
      props.refModal.current.style = "display: block";
      document.body.style.overflow = "hidden";
    } 

    if (props.refSell) {
      props.refSell.current.style = "display: block";
      props.refSellB.current.style = "display: block";
      document.body.style.overflow = "hidden";
    }
  }
  return (
    <div onClick={handleClick} id={props.id} className={`button ` + props.className}>
      <span className={`button__text ` + props.textClassName}>{props.name}</span>
    </div>
  )
}