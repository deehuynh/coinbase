export default function Button (props) {
  return (
    <div onClick={()=>{props.refSignin.current.style = "display: block"}} id={props.id} className={`button ` + props.className}>
      <span className={`button__text ` + props.textClassName}>{props.name}</span>
    </div>
  )
}