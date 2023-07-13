import React, { useRef, useState, useEffect, useContext } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "../styles.css";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import logo from "./logo.png";
import { Link } from "react-scroll";
import { Link as RouterLink, useNavigate } from "react-router-dom";

function Navbar({ language, setLanguage }) {
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;
    const visible = prevScrollPos > currentScrollPos || currentScrollPos === 0;

    setPrevScrollPos(currentScrollPos);
    setVisible(visible);
  };

  function handleClick() {
    if (i18n.language === "en") {
      i18n.changeLanguage("fr");
      localStorage.setItem("language", "fr");
    } else {
      i18n.changeLanguage("en");
      localStorage.setItem("language", "en");
    }
  }

  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
    setVisible(true); // Make sure the navbar is visible when the button is clicked
  };
  return (
    <header>
      <nav
        ref={navRef}
        className={`navbar ${visible ? "" : "navbar-hidden"}`}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          backgroundColor: "white",
          boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
          transition: "top 0.3s",
          zIndex: 9999,
        }}
      >
        <a href="/" style={{ textDecoration: "none" }}>
          <img
            src={logo}
            alt="Logo"
            id="logo"
            className="logo"
            style={{
              width: "200px",
              padding: "10px",
              marginRight: "10px",
              marginLeft: "50px",
            }}
          />
        </a>

        <Link
          onClick={() => navigate("/")}
          to="AboutUs"
          className="nav-link"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          {t("NavBar.About Us")}
        </Link>

        <Link
          onClick={() => navigate("/")}
          to="donations"
          className="nav-link"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          href="/MainContent#donations"
        >
          {t("NavBar.Donations")}
        </Link>

        <RouterLink to="/Bachelors" className="nav-link">
          {t("NavBar.Bachelors")}
        </RouterLink>

        <Link
          onClick={() => navigate("/")}
          to="faq"
          className="nav-link"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          {t("NavBar.FAQ")}
        </Link>

        <Link
          onClick={() => navigate("/")}
          to="ContactUs"
          className="nav-link"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          {t("NavBar.Contact Us")}
        </Link>
        <a
          className="rounded-full white px-4 py-1 text-1xl font-semibold text-white shadow-xl border border-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[bg-orange-500]"
          style={{ transition: "transform 0.3s", transform: "scale(1)" }}
          onMouseEnter={(e) => (e.target.style.transform = "scale(1.1)")}
          onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
        >
          <RouterLink
            to="/Donate"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <span
              className="text-gray-900 text-1xl"
              style={{ letterSpacing: "-0.05em" }}
            >
              {t("Standard.D")}
            </span>
            <span
              className="text-orange-500 text-1xl"
              style={{ letterSpacing: "-0.05em" }}
            >
              {t("Standard.ON")}
            </span>
            <span
              className="text-gray-900 text-1xl"
              style={{ letterSpacing: "-0.05em" }}
            >
              {t("Standard.ATE")}
            </span>
            <span
              className="text-orange-500 text-1xl"
              style={{ marginLeft: "0.5em" }}
            >
              {t("Standard.TODAY")}
            </span>
          </RouterLink>
        </a>

        <button
          onClick={handleClick}
          id="translate"
          className="translate-button"
        >
          {i18n.language === "en" ? "ES" : "EN"}
        </button>
        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FaTimes />
        </button>
      </nav>

      <button className="nav-btn" onClick={showNavbar}>
        <FaBars />
      </button>
    </header>
  );
}

export default Navbar;
