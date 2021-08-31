import Button from './button'

export default function MessageForm (props) {
  return (
    <form className="message-form">
      <div className="message-form__input-group">
        <input type="text" placeholder="Name *" />
        <input type="text" placeholder="Email *" />
      </div>

      <textarea rows="10" placeholder="Your Comment"></textarea>

      <Button className="button--linear-white button--pd-15-40" name="publish" />
    </form>
  )
}