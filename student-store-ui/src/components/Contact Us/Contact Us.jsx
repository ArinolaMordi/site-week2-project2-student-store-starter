import * as React from "react"
import "./Contact Us.css"
import SocialIcons from "../socialIcons/socialIcons"


export default function Contact() {
  return (
    <div className="contactUs">
      <h1>Contact Us</h1>
      <div className="contactUsInfo">
        Email: code@path.org
        Phone: 1-800-CODEPATH
        Address: 123 Fake Street, San Francisco, CA
        Socials: <SocialIcons />
      </div>
      <div className="happyPersonImage"> <img src="../happy_person.517b658d.svg" alt="codepath large"></img> </div>
    </div>

  )
}