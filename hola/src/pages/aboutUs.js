import { React, useState  } from "react";
import { useTranslation } from "react-i18next";
import pie from "../IMAGES/pie.png";


export default function AboutUs() {
  const { t, i18n } = useTranslation();
  const [lang, setLang] = useState('en');

  return (
    <div
      className="AboutUs"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "30px",
        marginTop: "20px",
        marginBottom: "2px",
        textAlign: "center",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "1200px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            marginBottom: "0px",
            marginLeft: lang === "fr" ? "-890px" : "0px",
            transform: lang === "en" ? "translateX(30px)" : "translateX(-495px)",
       
          }}
        >
          <a style={{ fontSize: "25px", color: "#F24E1E", textAlign:"center" }}>
            {t("aboutUs.About Us")}
          </a>
        </div>

        <div
          style={{
            textAlign: "center", // Center the text
            marginBottom: "30px",
            width: "100%",
          }}
        >
          <a style={{ fontSize: "35px" }}>{t("aboutUs.coffee")}</a>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            margin: "0 -10px",
          }}
        >
          <div
            style={{
              flex: "0.4",
              paddingRight: "10px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <img
              src={pie}
              alt="Pie"
              style={{
                borderRadius: "5px",
                maxWidth: "70%",
                height: "auto",
                margin: "0 auto",
              }}
            />
          </div>

          <div
            style={{
              flex: "0.6",
              paddingLeft: "10px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              width: "28%",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                color: "#F24E1E",
                marginBottom: "10px",
              }}
            >
              <a style={{ fontSize: "20px", color: "#F24E1E" }}>
                {t("aboutUs.Mission")}
              </a>
            </div>
            <div style={{ textAlign: "justify", marginRight:"50px",}}>
              <a style={{ fontSize: "16px" }}>
                {t("aboutUs.missionStatement")}
              </a>
            </div>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                color: "#F24E1E",
                marginBottom: "10px",
                marginTop: "15px",
              }}
            >
              <a style={{ fontSize: "20px", color: "#F24E1E", }}>
                {t("aboutUs.Drive")}
              </a>
            </div>
            <div style={{ textAlign: "justify", marginBottom: "10px", marginRight:"50px"}}>
              <a style={{ fontSize: "16px" }}>{t("aboutUs.driveStatement1")}</a>
            </div>
            <div style={{ textAlign: "justify", marginBottom: "10px",marginRight:"50px" }}>
              <a style={{ fontSize: "16px" }}>{t("aboutUs.driveStatement2")}</a>
            </div>
            <div style={{ textAlign: "justify", marginBottom: "10px",marginRight:"50px" }}>
              <a style={{ fontSize: "16px" }}>{t("aboutUs.driveStatement3")}</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
