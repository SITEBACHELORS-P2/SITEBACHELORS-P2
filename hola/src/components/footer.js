import React from "react";
import { Link as ScrollLink } from "react-scroll"; // Import the ScrollLink component
import { withTranslation } from "react-i18next";
import facebook from "../IMAGES/facebook.png";
import twitter from "../IMAGES/twitter.png";
import instagram from "../IMAGES/instagram.png";
import logo from "./logo.png";
import { Link } from "react-scroll";

import { Link as RouterLink, useNavigate, useLocation } from "react-router-dom";
import { NavLink } from "react-router-dom";

function Footer({ t }) {
  const navigate = useNavigate();
  return (
    <footer className="bg-orange-500" style={{ color: "#FFF", padding: "20px" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "10px" }}>
        <a href="/" ><img src={logo} alt="logo" style={{ height: "30px", marginRight: "10px" }} /></a>

        <Link
          onClick={() => navigate("/")}
          to="AboutUs"
          className="foot-link"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          <span style={{ color: "white" }}>{t("NavBar.About Us")}</span>
        </Link>

        <Link
          onClick={() => navigate("/")}
          to="donations"
          className="foot-link"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          href="/MainContent#donations"
        >
         <span style={{ color: "white" }}> {t("NavBar.Donations")}</span>
        </Link>

        <NavLink
          to="/Bachelors"
          className="foot-link"
          activeClassName="active-foot-link" // Apply this class for the active NavLink
        >
          <span style={{ color: "white" }}>{t("NavBar.Bachelors")}</span>
        </NavLink>
        <Link
          onClick={() => navigate("/")}
          to="faq"
          className="foot-link"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
         <span style={{ color: "white" }}>{t("NavBar.FAQ")}</span> 
        </Link>

        <Link
          onClick={() => navigate("/")}
          to="ContactUs"
          className="foot-link"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
        >
          <span style={{ color: "white" }}> {t("NavBar.Contact Us")}</span> 
        </Link>

        <div style={{ display: "flex", alignItems: "center" }}>
          <a href="https://facebook.com"><img src={facebook} alt="Facebook" style={{ height: "30px", marginRight: "10px" }} /></a>
          <a href="https://instagram.com"><img src={instagram} alt="Instagram" style={{ height: "30px", marginRight: "10px" }} /></a>
          <a href="https://twitter.com"><img src={twitter} alt="Twitter" style={{ height: "30px" }} /></a>
        </div>
      </div>
      <hr style={{ borderTop: "1px solid #FFF", margin: "20px 0" }} />
      <div style={{ display: "flex", justifyContent: "center", marginBottom: "10px" }}>
        <div style={{ color: "#FFF", textAlign: "center", flex: 1 }}>© 2023 SITE BACHELORS. {t("Allrightsreserved")}</div>
        <a href="/TermsAndConditions" style={{ color: "#FFF", textAlign: "right" }}>{t("Terms of Service")}</a>
      </div>
    </footer>
  );
}

export default withTranslation()(Footer);
