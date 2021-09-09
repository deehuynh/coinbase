import Button from './button'
import { Link } from 'react-router-dom'
import useFormatUrl from '../Hooks/useFormatUrl'
import {useMediaQuery} from 'react-responsive'

export default function Article (props) {
  const url = useFormatUrl(props.title);
  const transform = useMediaQuery({maxWidth: 425});
  if (transform) {
    return (
      <Link className="article-link" to={`/blog/` + url}><div>
      <article className={`article ` + props.className}>
        <img src={props.image} alt="Article img" />
        <div className="article__border-gradient">
          <div className="article__info">
            <Link to={`/blog/` + url}><h1>{props.title}</h1></Link>
            <h5><span>{props.time}</span>{props.genre}</h5>
            <p>{props.description}</p>
            <Link to={`/blog/` + url}><Button id="article__btn" className="button--linear-white button--pd-18-40" name="discover" /></Link>
          </div>
        </div>
      </article></div>
      </Link>
    )
  }

  return (
    <article className={`article ` + props.className}>
      <img src={props.image} alt="Article img" />
      <div className="article__border-gradient">
        <div className="article__info">
          <Link to={`/blog/` + url}><h1>{props.title}</h1></Link>
          <h5><span>{props.time}</span>{props.genre}</h5>
          <p>{props.description}</p>
          <Link to={`/blog/` + url}><Button id="article__btn" className="button--linear-white button--pd-18-40" name="discover" /></Link>
        </div>
      </div>
    </article>
  )
}