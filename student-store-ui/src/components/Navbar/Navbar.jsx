import * as React from "react"
import "./Navbar.css"
import Header from "../Header/Header"
import Logo from "../Logo/Logo"
import SocialIcons from "../socialIcons/socialIcons"
import About from "../About Us/About Us"
import Contact from "../Contact Us/Contact Us"
export default function Navbar() {
  return (

    <nav className="navBar">
      <Logo/>
    <SocialIcons/>
      <a href="#" className="navLinks"> Home    </a>
      <a href="../About Us/About Us" className="navLinks"> About Us </a>
      <a href="../Contact Us/Contact Us" className="navLinks"> Contact Us</a>
      <a href="#" className="navLinks"> Buy Now </a>
    </nav>

  )
}
