import Button from './button'

export default function Article (props) {
  return (
    <article className="article">
      <img src={props.img} alt="Article img" />
      <h1></h1>
      <h5></h5>
      <p></p>
      <Button className="button--linear-white" name="discover" />
    </article>
  )
}