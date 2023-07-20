import React from "react";
import facebook from "../IMAGES/facebook.png";
import twitter from "../IMAGES/twitter.png";
import instagram from "../IMAGES/instagram.png";
import logo from "./logo.png";
export default function Footer() {
  return (
    <footer className="bg-orange-500" style={{  color: "#FFF", padding: "20px" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "10px" }}>
      <a href="https://facebook.com"><img src={logo} alt="logo" style={{ height: "30px", marginRight: "10px" }} /></a>

    
     
        <a href="/#aboutUs" style={{ marginRight: "20px", color: "#FFF" }}>About Us</a>
        <a href="/donate" style={{ marginRight: "20px", color: "#FFF" }}>Donations</a>
        <a href="/Bachelors" style={{ marginRight: "20px", color: "#FFF" }}>Bachelors</a>
        <a href="/Faq" style={{ marginRight: "20px", color: "#FFF" }}>FAQ</a>
        <a href="/#contact-us" style={{ color: "#FFF" }}>Contact Us</a>

        <div style={{ display: "flex", alignItems: "center" }}>
          <a href="https://facebook.com"><img src={facebook} alt="Facebook" style={{ height: "30px", marginRight: "10px" }} /></a>
          <a href="https://instagram.com"><img src={instagram} alt="Instagram" style={{ height: "30px", marginRight: "10px" }} /></a>
          <a href="https://twitter.com"><img src={twitter} alt="Twitter" style={{ height: "30px" }} /></a>
        </div>
      </div>
      <hr style={{ borderTop: "1px solid #FFF", margin: "20px 0" }} />
      <div style={{ display: "flex", justifyContent: "center", marginBottom: "10px" }}>
        <div style={{ color: "#FFF", textAlign: "center", flex: 1 }}>© 2023 SITE BACHELORS. All rights reserved.</div>
        <a href="/TermsAndConditions" style={{ color: "#FFF", textAlign: "right" }}>Terms of Service</a>
      </div>
    </footer>
  );
}
