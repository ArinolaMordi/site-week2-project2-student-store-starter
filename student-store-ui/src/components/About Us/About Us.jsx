import * as React from "react"
import "./About Us.css"


export default function About() {
  return (
    <div className="About">
      <h1 className="AboutLetter">About</h1>
      <div className="aboutBody"> The codepath student store offers great products at great prices from a great team and for a great cause.
        We've searched far and wide for items that perk the interests of even the most eccentric students and decided to offer them all here in one place.
        All proceeds go towards bringing high quality CS education to college students around the country. </div>
      <div className="codePathImage"> <img src="../giant_codepath.6952ef57.svg" alt="codepath large"></img> </div>
    </div>

  )
}
