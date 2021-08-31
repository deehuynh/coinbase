import Button from './button'

export default function MessageForm (props) {
  return (
    <form className="massage-form">
      <div className="message-form__input-group">
        <input type="text" />
        <input type="text" />
      </div>
    </form>
  )
}