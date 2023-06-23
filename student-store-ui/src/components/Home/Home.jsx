import * as React from "react"
import "./Home.css"

export default function Home() {
  return (
    <div className="banner">
      <div className="welcomeText"> Welcome! </div>
      <div className="findYourMerch">Find Your Merch!</div>
       <div className="allKindOfGoodies">We have all kinds of goodies. Click on any of the items to start
        filling up your shopping cart. Checkout whenever you're ready.
        </div>
        <input id ="searchInput"type="text" name="search" placeholder="search" className="textbox"/> 
        <button id="searchBtn" type="submit" className="searchBtn"></button>
    </div>
  )
}
