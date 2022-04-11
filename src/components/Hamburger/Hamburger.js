import React from "react"
import { HamburgerButton } from "./Hamburger.styles"
import Hamburgericon from "../../images/menu-icon.svg"

const Hamburger = ({ handleOverlayMenu }) => (
  <HamburgerButton onClick={handleOverlayMenu}>
    <img src={Hamburgericon} alt="Menu Hamurger" />
  </HamburgerButton>
)

export default Hamburger
