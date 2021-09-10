import Button from "./button"
import CloseBtn from "../svgs/close-btn.svg"
import { useRef } from "react"

function Input (props) {
  return (
    <input className="modal__input" type="text" defaultValue='' placeholder={props.placeholder} />
  )
}

export default function Signin (props) {
  const refSignup = useRef(null);
  const refSignin = useRef(null);
  const triggerSignup = () => {
    refSignin.current.style = "display: none";
    refSignup.current.style = "display: block";
  }
  return (
    <div style={{display: 'none'}} ref={props.refModal} id="signin-modal" className="modal">
      <div ref={refSignin} style={{display: 'block'}} className="modal__content">
        <h2>Welcome back!</h2>
        <p>Kindly fill in your login details to proceed</p>

        <div className="modal__input-group">
          <Input placeholder="Email" />
          <Input placeholder="Password" />
        </div>

        <p>i forgot my password?</p>

        <Button id="signin" name='login' className="button--linear-white button--pd-18-55" />

        <p>Don’t have an account yet? <span onClick={triggerSignup}>Sign Up</span></p>
        <div className="modal__close" onClick={()=>{props.refModal.current.style = "display: none"}}>
          <img src={CloseBtn} alt="close" />
        </div>
      </div>

      <div ref={refSignup} style={{display: 'none'}} className="modal__content">
        <h2>Sign up</h2>
        <p>There’s no charge upon registration</p>
        <div className="modal__input-group">
          <Input placeholder="Full name" />
          <Input placeholder="Email" />
          <Input placeholder="Password" />
          <Input placeholder="Confirm password" />
        </div>
        <Button id="signup" name='sign up' className="button--linear-white button--pd-18-55" />
        <div className="modal__close" onClick={()=>{props.refModal.current.style = "display: none"}}>
          <img src={CloseBtn} alt="close" />
        </div>
      </div>
    </div>
  )
}