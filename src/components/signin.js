import Button from "./button"
import CloseBtn from "../svgs/close-btn.svg"

function Input (props) {
  return (
    <input className="modal__input" type="text" defaultValue='' placeholder={props.placeholder} />
  )
}

export default function Signin (props) {
  return (
    <div style={{display: 'none'}} ref={props.refSignin} id="signin-modal" className="modal">
      <div className="modal__content">
        <h2>Welcome back!</h2>
        <p>Kindly fill in your login details to proceed</p>

        <div className="modal__input-group">
          <Input placeholder="Email" />
          <Input placeholder="Password" />
        </div>

        <p>i forgot my password?</p>

        <Button id="signin" name='login' className="button--linear-white button--pd-18-55" />

        <p>Don’t have an account yet? <span>Sign Up</span></p>
        <div className="modal__close" onClick={()=>{props.refSignin.current.style = "display: none"}}>
          <img src={CloseBtn} alt="close" />
        </div>
      </div>
    </div>
  )
}