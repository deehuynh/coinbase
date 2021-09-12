import TopArrow from "../svgs/top-arrow.svg"
import { useRef, useEffect } from "react";

export default function ToTopBtn () {
  const ScrollToTop = () => {
    window.scrollTo(0,0);
  }

  const refContainer = useRef(null);
  useEffect(()=>{
    window.onscroll = () => {
      if (window.pageYOffset > 1000) {
        refContainer.current.style = "display: block";
      } else {
        refContainer.current.style = "display: none";
      }
    }
  });

  return (
    <div ref={refContainer} style={{display: 'none'}} onClick={ScrollToTop} className="scroll-to-top">
      <img src={TopArrow} alt="Top Arrow" />
    </div>
  )
}