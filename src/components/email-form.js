import Button from "./button"

export default function EmailForm (props) {
  return (
    <div className={`email-form ` + props.className}>
      <div className="email-form__input-border">
        <input type="text" defaultValue='' placeholder='EMAIL' />
      </div>
      
      <Button id="email-form__btn" className="button--linear-white button--pd-18-40" name="discover"  />
    </div>
  )
}