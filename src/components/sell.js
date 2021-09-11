import Bitcoini from "../svgs/bitcoin-white.svg"
import Ethi from "../svgs/eth-white.svg"
//import card
import AmazonCard from "../images/amazon-card.png"
import AppstoreCard from "../images/appstore-card.png"
import SteamCard from "../images/steam-card.png"
import GGPlayCard from "../images/ggplay-card.png"
import OthersCard from "../images/others-card.png"

export default function Sell (props) {
  const handleClose = () => {
    props.refSell.current.style = "display: none";
    props.refSellB.current.style = "display: none";
    props.refSellG.current.style = "display: none";
    document.body.style.overflow = "auto";
  }
  return (
    <div ref={props.refSell} style={{display: "none"}} id="sell" className="sell">
      <div className="sell__container">
        <Menu
          refSell={props.refSellB} display="none"
          title="Sell bitcoin"
          intro="Choose your preffered product to continue"
        >
          <div className="sell__card-group">
            <Card type="bitcoin" image={Bitcoini} name="Bitcoin" bg="sell__card--orange" />
            <Card type="bitcoin" image={Ethi} name="Ethereum" bg="sell__card--blue" />
          </div>

          <div className="sell__close-btn" onClick={handleClose}>Close</div>
        </Menu>

        <Menu  
          refSell={props.refSellG} display="none"
          title="Got Gift Cards For Sale?"
          intro="Choose your preferred card type to continue the exchange process"
        >
          <div className="sell__card-group-2">
            <Card image={AmazonCard} />
            <Card image={AppstoreCard} />
            <Card image={SteamCard} />
            <Card image={GGPlayCard} />
            <Card image={OthersCard} />
          </div>

          <div className="sell__close-btn" onClick={handleClose}>Close</div>
        </Menu>
      </div>
    </div>
  )
}

function Menu (props) {
  return (
    <div ref={props.refSell} style={{display: props.display}} className="sell__menu">
      <h2>{props.title}</h2>
      <p>{props.intro}</p>
      {props.children}
    </div>
  )
}

function Card (props) {
  if (props.type === "bitcoin") {
    return (
      <div className={`sell__card sell__card--big ` + props.bg}>
        <img src={props.image} alt="card" />
        <span>{props.name}</span>
      </div>
    )
  }
  return (
    <div className="sell__card sell__card--small">
      <img src={props.image} alt="card" />
    </div>
  )
}