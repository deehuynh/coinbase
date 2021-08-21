

export default function GradientInput (props) {
  return (
    <div className={props.className}>
      <input type='text' defaultValue='' placeholder={props.placeholder} />
    </div>
  )
}