export default function Row (props) {
  return (
    <div className={props.className}>
      {props.children}
    </div>
  )
}