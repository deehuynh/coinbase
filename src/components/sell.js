import Bitcoini from "../svgs/bitcoin-white.svg"
import Ethi from "../svgs/eth-white.svg"
//import card
import AmazonCard from "../images/amazon-card.png"
import AppstoreCard from "../images/appstore-card.png"
import SteamCard from "../images/steam-card.png"
import GGPlayCard from "../images/ggplay-card.png"
import OthersCard from "../images/others-card.png"
import BitcoinCard from "../images/bitcoin-card.png"
import EthCard from "../images/eth-card.png"
import Button from "./button"
import UndoBtn from "../svgs/undo.svg"
import AmC from "../images/am-card.png"
import AsC from "../images/as-card.png"
import SC from "../images/s-card.png"
import GGC from "../images/gg-card.png"
import OC from "../images/o-card.png"

export default function Sell (props) {
  const handleClose = () => {
    props.refSell.current.style = "display: none";
    props.refSellB.current.style = "display: none";
    props.refSellG.current.style = "display: none";
    document.body.style.overflow = "auto";
  }
  const openDetailB = () => {
    document.body.style.overflow = "hidden";
    props.refSellB.current.style = "display: none";
    props.refSellG.current.style = "display: none";
    props.refDetailB.current.style = "display: block";
  }

  const openDetailE = () => {
    document.body.style.overflow = "hidden";
    props.refSellB.current.style = "display: none";
    props.refSellG.current.style = "display: none";
    props.refDetailE.current.style = "display: block";
  }

  const openDetailAm = () => {
    document.body.style.overflow = "hidden";
    props.refSellB.current.style = "display: none";
    props.refSellG.current.style = "display: none";
    props.refDetailAm.current.style = "display: block";
  }

  const openDetailAs = () => {
    document.body.style.overflow = "hidden";
    props.refSellB.current.style = "display: none";
    props.refSellG.current.style = "display: none";
    props.refDetailAs.current.style = "display: block";
  }

  const openDetailS = () => {
    document.body.style.overflow = "hidden";
    props.refSellB.current.style = "display: none";
    props.refSellG.current.style = "display: none";
    props.refDetailS.current.style = "display: block";
  }

  const openDetailGg = () => {
    document.body.style.overflow = "hidden";
    props.refSellB.current.style = "display: none";
    props.refSellG.current.style = "display: none";
    props.refDetailGg.current.style = "display: block";
  }

  const openDetailO = () => {
    document.body.style.overflow = "hidden";
    props.refSellB.current.style = "display: none";
    props.refSellG.current.style = "display: none";
    props.refDetailO.current.style = "display: block";
  }

  const handleUndoB = () => {
    props.refSellB.current.style = "display: block";
    props.refSellG.current.style = "display: none";
    props.refDetailE.current.style = "display: none";
    props.refDetailB.current.style = "display: none";
    document.body.style.overflow = "hidden";
  }

  const handleUndoG = () => {
    props.refSellB.current.style = "display: none";
    props.refSellG.current.style = "display: block";
    props.refDetailAm.current.style = "display: none";
    props.refDetailAs.current.style = "display: none";
    props.refDetailS.current.style = "display: none";
    props.refDetailO.current.style = "display: none";
    props.refDetailGg.current.style = "display: none";
    document.body.style.overflow = "hidden";
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
            <Card triggerDetail={openDetailB} type="bitcoin" image={Bitcoini} name="Bitcoin" bg="sell__card--orange" />
            <Card triggerDetail={openDetailE} type="bitcoin" image={Ethi} name="Ethereum" bg="sell__card--blue" />
          </div>

          <div className="sell__close-btn" onClick={handleClose}>Close</div>
        </Menu>

        <Detail 
          refDetail={props.refDetailB} 
          bg="radial-gradient(100% 100% at 46.86% 0%, #FF8000 0%, #E34141 100%)" 
          handleUndoB={handleUndoB}
          image={BitcoinCard} price='N360.00' 
          des='is our conversion rate for 0.1 BTC on this platform.'
          input='Bitcoin Value'
        />
        <Detail 
          refDetail={props.refDetailE} 
          bg="linear-gradient(145.64deg, #00E0FF 9.67%, #0047FF 107.49%)"
          handleUndoB={handleUndoB}
          image={EthCard} price='N360.00'
          des='is our conversion rate for 0.1 ETH on this platform.'
          input='Ethereum Value'
        />

        <Menu  
          refSell={props.refSellG} display="none"
          title="Got Gift Cards For Sale?"
          intro="Choose your preferred card type to continue the exchange process"
        >
          <div className="sell__card-group-2">
            <Card triggerDetail={openDetailAm} image={AmazonCard} />
            <Card triggerDetail={openDetailAs} image={AppstoreCard} />
            <Card triggerDetail={openDetailS} image={SteamCard} />
            <Card triggerDetail={openDetailGg} image={GGPlayCard} />
            <Card triggerDetail={openDetailO} image={OthersCard} />
          </div>

          <div className="sell__close-btn" onClick={handleClose}>Close</div>
        </Menu>

        <Detail 
          bg="radial-gradient(100% 100% at 46.86% 0%, #FF8000 0%, #E34141 100%)" 
          handleUndoB={handleUndoG}
          refDetail={props.refDetailAm}
          image={AmC}
          input='Amount'
        />

        <Detail 
          bg="linear-gradient(145.64deg, #00E0FF 9.67%, #0047FF 107.49%)"
          handleUndoB={handleUndoG}
          refDetail={props.refDetailAs}
          image={AsC}
          input='Amount'
        />

        <Detail 
          bg="linear-gradient(178.18deg, #FD749B -13.56%, #281AC8 158.3%)" 
          handleUndoB={handleUndoG}
          refDetail={props.refDetailS}
          image={SC}
          input='Amount'
        />

        <Detail 
          bg="linear-gradient(145.64deg, #99FDD9 19.86%, #1E62A2 107.49%)" 
          handleUndoB={handleUndoG}
          refDetail={props.refDetailGg}
          image={GGC}
          input='Amount'
        />

        <Detail 
          bg="linear-gradient(178.18deg, #FD749B -13.56%, #281AC8 158.3%)" 
          handleUndoB={handleUndoG}
          refDetail={props.refDetailO}
          image={OC}
          input='Amount'
        />
      </div>
    </div>
  )
}

function Input (props) {
  return (
    <div className="sell__input">
      <input type="text" placeholder={props.placeholder} defaultValue='' />
    </div>
  )
}

function Detail (props) {
  return (
    <div ref={props.refDetail} className="sell__detail" style={{display: "none"}}>
      <div style={{background: props.bg}} className="sell__detail-bg"></div>
      <div className="sell__detail-card">
        <img src={props.image} alt="Card" />
      </div>
      <p><span>{props.price}</span> {props.des}</p>
      <p className="sell__detail-intro">
        The total value you derived here will be the amount you’ll <br />
        be receiving during the total transaction process 
      </p>
      <Input placeholder={props.input} />
      <div className="sell__exchange-value">
        <span>
          #0.00
        </span>
      </div>
      <Button id="sell__btn" name="proceed" className="button--linear-white button--pd-18-40" />
      <div onClick={props.handleUndoB} className="sell__detail-undo">
        <img src={UndoBtn} alt="undo" />
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
      <div onClick={props.triggerDetail} className={`sell__card sell__card--big ` + props.bg}>
        <img src={props.image} alt="card" />
        <span>{props.name}</span>
      </div>
    )
  }
  return (
    <div onClick={props.triggerDetail} className="sell__card sell__card--small">
      <img src={props.image} alt="card" />
    </div>
  )
}