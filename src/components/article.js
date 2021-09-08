import Button from './button'
import { Link } from 'react-router-dom'
import useFormatUrl from '../Hooks/useFormatUrl'

export default function Article (props) {
  const url = useFormatUrl(props.title);
  return (
    <article className={`article ` + props.className}>
      <img src={props.image} alt="Article img" />
      <div className="article__border-gradient">
        <div className="article__info">
          <Link to={`/blog/` + url}><h1>{props.title}</h1></Link>
          <h5><span>{props.time}</span>{props.genre}</h5>
          <p>{props.description}</p>
          <Button id="article__btn" className="button--linear-white button--pd-18-40" name="discover" />
        </div>
      </div>
    </article>
  )
}