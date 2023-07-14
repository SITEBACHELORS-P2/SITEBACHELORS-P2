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
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-globe" viewBox="0 0 16 16">
  <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm7.5-6.923c-.67.204-1.335.82-1.887 1.855A7.97 7.97 0 0 0 5.145 4H7.5V1.077zM4.09 4a9.267 9.267 0 0 1 .64-1.539 6.7 6.7 0 0 1 .597-.933A7.025 7.025 0 0 0 2.255 4H4.09zm-.582 3.5c.03-.877.138-1.718.312-2.5H1.674a6.958 6.958 0 0 0-.656 2.5h2.49zM4.847 5a12.5 12.5 0 0 0-.338 2.5H7.5V5H4.847zM8.5 5v2.5h2.99a12.495 12.495 0 0 0-.337-2.5H8.5zM4.51 8.5a12.5 12.5 0 0 0 .337 2.5H7.5V8.5H4.51zm3.99 0V11h2.653c.187-.765.306-1.608.338-2.5H8.5zM5.145 12c.138.386.295.744.468 1.068.552 1.035 1.218 1.65 1.887 1.855V12H5.145zm.182 2.472a6.696 6.696 0 0 1-.597-.933A9.268 9.268 0 0 1 4.09 12H2.255a7.024 7.024 0 0 0 3.072 2.472zM3.82 11a13.652 13.652 0 0 1-.312-2.5h-2.49c.062.89.291 1.733.656 2.5H3.82zm6.853 3.472A7.024 7.024 0 0 0 13.745 12H11.91a9.27 9.27 0 0 1-.64 1.539 6.688 6.688 0 0 1-.597.933zM8.5 12v2.923c.67-.204 1.335-.82 1.887-1.855.173-.324.33-.682.468-1.068H8.5zm3.68-1h2.146c.365-.767.594-1.61.656-2.5h-2.49a13.65 13.65 0 0 1-.312 2.5zm2.802-3.5a6.959 6.959 0 0 0-.656-2.5H12.18c.174.782.282 1.623.312 2.5h2.49zM11.27 2.461c.247.464.462.98.64 1.539h1.835a7.024 7.024 0 0 0-3.072-2.472c.218.284.418.598.597.933zM10.855 4a7.966 7.966 0 0 0-.468-1.068C9.835 1.897 9.17 1.282 8.5 1.077V4h2.355z"/>
</svg>
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
