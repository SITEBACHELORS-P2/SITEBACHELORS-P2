import React from "react";

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "#F24E1E", color: "#FFF", padding: "20px" }}>
      <div style={{ display: "flex", justifyContent: "center", marginBottom: "10px" }}>
        <img src="/logo.png" alt="Logo" style={{ height: "50px", marginRight: "10px" }} />
        <div style={{ display: "flex", alignItems: "center" }}>
          <a href="https://facebook.com"><img src="/facebook.png" alt="Facebook" style={{ height: "30px", marginRight: "10px" }} /></a>
          <a href="https://instagram.com"><img src="/instagram.png" alt="Instagram" style={{ height: "30px", marginRight: "10px" }} /></a>
          <a href="https://twitter.com"><img src="/twitter.png" alt="Twitter" style={{ height: "30px" }} /></a>
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "center", marginBottom: "10px" }}>
        <a href="/#aboutUs" style={{ marginRight: "20px", color: "#FFF" }}>About Us</a>
        <a href="/donate" style={{ marginRight: "20px", color: "#FFF" }}>Donations</a>
        <a href="/Bachelors" style={{ marginRight: "20px", color: "#FFF" }}>Bachelors</a>
        <a href="/#faq" style={{ marginRight: "20px", color: "#FFF" }}>FAQ</a>
        <a href="/#contact-us" style={{ color: "#FFF" }}>Contact Us</a>
      </div>
      <hr style={{ borderTop: "1px solid #FFF", margin: "20px 0" }} />
      <div style={{ display: "flex", justifyContent: "center", marginBottom: "10px" }}>
        <div style={{ color: "#FFF", marginRight: "10px" }}>© 2023 Your Company. All rights reserved.</div>
        <a href="/TermsAndConditions" style={{ color: "#FFF" }}>Terms of Service</a>
      </div>
    </footer>
  );
}
