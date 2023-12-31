import React, { useState,useEffect } from "react";
import { useTranslation } from "react-i18next";
import circle from "../IMAGES/cirle.png";
import happy from "../IMAGES/happy.png";
import playVideo from "../IMAGES/video.png";
import happyEN from "../IMAGES/happy_en.mp4"; 
import happyES from "../IMAGES/happy_es.mp4";
import { Link as RouterLink, useNavigate, useLocation } from "react-router-dom";

export default function Donations() {
  const { t, i18n } = useTranslation();
  const [showTooltip, setShowTooltip] = useState(false);

  const handleMouseEnter = () => {
    setShowTooltip(true);
  };

  const handleMouseLeave = () => {
    setShowTooltip(false);
  };
 
  const [showVideo, setShowVideo] = useState(false);

  const videoSource = i18n.language === "es" ? happyES : happyEN;

  const handleImageClick = () => {
    setShowVideo(!showVideo);
  };

  return (
    <html lang={i18n.language}>
    <div className="donations  bg-white flex flex-col items-center justify-center">
      {/* Section 1: Heading */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: "25px",
          marginTop: "15px",
          marginRight: "40px",

        }}
      >
        <a style={{ fontSize: "20px", color: "#F24E1E", textAlign: "center",fontSize: "25px" }}>
      {t("NavBar.Donations")}
    </a>
      </div>

      {/* Section 2: Description */}
      <p className="text-justify mb-4 text-gray-400 mx-auto max-w-[1100px]">
        {t("Donations.Description1")}
      </p>
      <p className="text-justify mb-4 text-gray-400 mx-auto max-w-[1100px] mb-10">
        {t("Donations.Description2")}
      </p>

      {/* Section 3: Donation Stats */}
      <div className="flex">
        <div className="w-1/2">
          <div className="flex items-center mb-4">
            <div>
              <img src={circle} alt="Donation" className="w-10 h-10 mr-2" />
            </div>
            <div>
              <p className="text-black font-bold text-left">
                {t("Donations.Stat1")}
              </p>
              <p className="text-gray-500 text-left text-sm">
                {t("Donations.Stat1description")}
              </p>
            </div>
          </div>
          <hr className="border-gray-300 mb-4 w-80 mx-auto" />
          <div className="flex items-center mb-4">
            <div>
              <img src={circle} alt="Donation" className="w-10 h-10 mr-2" />
            </div>
            <div>
              <p className="text-black font-bold text-left">
                {t("Donations.Stat2")}
              </p>
              <p className="text-gray-500 text-left text-sm ">
                {t("Donations.Stat2description")}
              </p>
            </div>
          </div>
          <hr className="border-gray-300 mb-4 w-80 mx-auto" />
          <div className="flex items-center">
            <div>
              <img src={circle} alt="Donation" className="w-10 h-10 mr-2" />
            </div>
            <div>
              <p className="text-black font-bold text-left">
                {t("Donations.Stat3")}
              </p>
              <p className="text-gray-500 text-left text-sm">
                {t("Donations.Stat3description")}
              </p>
            </div>
          </div>
        </div>

         {/* Section 4: Donation Image and Tooltip */}
         <div className="w-1/2 flex flex-col items-center">
 
          <div
            className="relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={handleImageClick}
          >
            
            <img
              src={happy}
              alt="Donation"
              className="mb-4 h-full max-h-[266px] rounded cursor-pointer"
            />   
            {showTooltip && (
              <div className="tooltip">
                {t("Donations.altHappy")}
              </div>
            )}
           {showVideo && (
              <video
                autoPlay
                controls
                src={videoSource}
                alt={t("Donations.altHappy")}
                className="mb-4 h-full max-h-[266px] rounded absolute top-0 left-0"
              />
            )}
       
             <img
              src={playVideo}
              alt="Little Image"
              className="absolute top-0 left-0 w-10 h-10"
              style={{ filter: "hue-rotate(30deg)" }}
            />
          </div>

          {/* Section 5: Donation Button */}
          <div className="mt-0 flex items-center items-center flex-col gap-x-6">
          <a
          className="rounded-full white px-4 py-1 text-1xl font-semibold text-white shadow-xl border border-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[bg-orange-500]"
          style={{ transition: "transform 0.3s", transform: "scale(1)" }}
          onMouseEnter={(e) => (e.target.style.transform = "scale(1.1)")}
          onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
        >
          <RouterLink
            to="/Donate"
            style={{ textDecoration: "bg-orange-500", color: "inherit" }}
          >
            <span
              className="text-gray-900 text-3xl"
              style={{ letterSpacing: "-0.05em" }}
            >
              {t("Standard.D")}
            </span>
            <span
              className="text-orange-500 text-3xl"
              style={{ letterSpacing: "-0.05em" }}
            >
              {t("Standard.ON")}
            </span>
            <span
              className="text-gray-900 text-3xl"
              style={{ letterSpacing: "-0.05em" }}
            >
              {t("Standard.ATE")}
            </span>
            <span
              className="text-orange-500 text-3xl"
              style={{ marginLeft: "0.5em" }}
            >
              {t("Standard.TODAY")}
            </span>
          </RouterLink>
        </a>

            <span className="sr-only">{t("Donations.ButtonLabel")}</span>
          </div>
        </div>
      </div>

      {/* Section 6: Styling for Tooltip */}
      <style>
        {`
        .tooltip {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          background-color: #FF6600;
          border-radius: 10px;
          padding: 8px;
          color: #fff;
          font-size: 12px;
        }
        `}
      </style>
    </div>
    </html>
  );
}
