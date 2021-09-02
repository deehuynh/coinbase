export default function Button (props) {
  return (
    <div id={props.id} className={`button ` + props.className}>
      <span className='button__text'>{props.name}</span>
    </div>
  )
}