import * as React from "react"
import "./Navbar.css"
import Header from "../Header/Header"
import Logo from "../Logo/Logo"
import SocialIcons from "../socialIcons/socialIcons"
export default function Navbar() {
  return (

    <nav className="navBar">
      <Logo/>
    <SocialIcons/>
      <a href="#" className="navLinks"> Home    </a>
      <a href="#" className="navLinks"> About Us </a>
      <a href="#" className="navLinks"> Contact Us</a>
      <a href="#" className="navLinks"> Buy Now </a>
    </nav>

  )
}
