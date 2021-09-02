import MenuBtn from '../svgs/menu-btn.svg'

export default function MobileNav () {
  return (
    <nav className="m-nav">
      <img className="m-nav__btn" src={MenuBtn} alt="Menu" />
    </nav>
  )
}