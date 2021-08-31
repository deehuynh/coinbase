import Button from './button'

export default function MessageForm (props) {
  return (
    <form className="massage-form">
      <div className="message-form__input-group">
        <input type="text" />
        <input type="text" />
      </div>

      <textarea name="" id="" cols="30" rows="10"></textarea>

      <Button className="button--linear-white button--pd-15-40" name="publish" />
    </form>
  )
}