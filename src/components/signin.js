import Button from "./button"
import { Link } from "react-router-dom"

function Input (props) {
  return (
    <input className="modal__input" type="text" defaultValue='' placeholder={props.placeholder} />
  )
}

export default function Signin () {
  return (
    <div className="modal">
      <div className="modal__content">
        <h2>Welcome back!</h2>
        <p>Kindly fill in your login details to proceed</p>

        <div className="modal__input-group">
          <Input placeholder="Email" />
          <Input placeholder="Password" />
        </div>

        <p>i forgot my password?</p>

        <Button name='login' className="button--linear-white button--pd-18-55" />

        <p>Don’t have an account yet? <Link to='/'>Sign Up</Link></p>
      </div>
    </div>
  )
}