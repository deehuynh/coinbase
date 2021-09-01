import Row from "../row"
import MessForm from '../message-form'

export default function SecondRow () {
  return (
    <Row className="contact__2nd-row">
      <p>Please note that all message will be replied within the next 12hours</p>
      <MessForm />
    </Row>
  )
}