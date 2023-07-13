import { React, useContext } from "react";
import { useTranslation } from "react-i18next";
import emailIcon from "../IMAGES/email-icon.png";

export default function ContactUs() {
  const { t, i18n } = useTranslation();

  return (
    <section
      id="ContactUs"
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <div style={{ textAlign: "center", marginBottom: "20px" }}>
        <h1 style={{ fontSize: "50px", color: "#F24E1E" }}>
          {t("Contact Us")}
        </h1>
      </div>
      <div style={{ display: "flex", alignItems: "center" }}>
        <img
          src={emailIcon}
          alt="Email Icon"
          style={{ width: "30px", height: "30px", marginRight: "10px" }}
        />
        <div style={{ color: "black" }}>sitebachelors@gmail.com</div>
      </div>
    </section>
  );
}
