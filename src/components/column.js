

export default function Col (props) {
  return (
    <div className={`col ` + props.className}>
      {props.children}
    </div>
  )
}