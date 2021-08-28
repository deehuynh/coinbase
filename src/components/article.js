import Button from './button'

export default function Article (props) {
  return (
    <article className={`article ` + props.className}>
      <img src={props.image} alt="Article img" />
      <h1>{props.title}</h1>
      <h5><span>{props.time}</span> {props.genre}</h5>
      <p>{props.description}</p>
      <Button className="button--linear-white button--pd-18-40" name="discover" />
    </article>
  )
}