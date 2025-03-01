import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer>
      <div className="footerContainer">
     
        <div className="footerSection">
          <h3>Company</h3>
          <ul>
            <li>About Us</li>
            <li>Find a Store</li>
            <li>Terms</li>
            <li>Sitemap</li>
            <li>Careers</li>
          </ul>
        </div>
        <div className="footerSection">
          <h3>Support</h3>
          <ul>
            <li>Contact Us</li>
            <li>Money Refund</li>
            <li>Order Status</li>
            <li>Shipping Info</li>
            <li>Open Dispute</li>
          </ul>
        </div>
        <div className="footerSection">
          <h3>Account</h3>
          <ul>
            <li>Login</li>
            <li>Register</li>
            <li>Account Settings</li>
            <li>My Orders</li>
          </ul>
        </div>
        <div className="footerSection">
          <h3>Socials</h3>
          <ul>
            <li>Facebook</li>
            <li>Twitter</li>
            <li>LinkedIn</li>
            <li>Instagram</li>
            <li>YouTube</li>
          </ul>
        </div>
        <div className="footerSection">
          <h3>Our App</h3>
          <ul>
            <li>Download on the App Store</li>
            <li>Get it on Google Play</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

