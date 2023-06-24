import * as React from "react"

export default function Banner(props) {

const { title, subtitle } = props

  console.log("Banner props")
  console.log(title)
  console.log(subtitle)

  return (
    <div>
        <div>
            <h1>{title}</h1>
            <h2>{subtitle}</h2>
        </div>
         
        <br />
    </div>
  )
}