export default function IntroText (props) {
  return (
    <div className={`intro-text ` + props.className}>
      {props.children}
    </div>
  )
}