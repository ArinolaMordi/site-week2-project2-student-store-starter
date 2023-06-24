import * as React from "react"
import { FaTwitter } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import "./socialIcons.css"
export default function SocialIcons() {
  return (
    <div className='social'>
      <FaTwitter />
      <FaInstagram />
      <FaFacebook />
      <FaLinkedin />
    </div>
  )
}
