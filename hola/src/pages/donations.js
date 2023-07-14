import { React, useContext } from "react";
import happy from "../IMAGES/happy.png";
import { useTranslation } from "react-i18next";
import circle from "../IMAGES/cirle.png";

export default function Donations() {
  const { t, i18n } = useTranslation();

  return (
    <div className="donations mt-24 bg-white flex flex-col items-center justify-center min-h-screen">
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: "20px",
          marginLeft: "40px",
          marginRight: "40px",
        }}
      >
        <a style={{ fontSize: "20px", color: "#F24E1E" }}>
          {t("NavBar.Donations")}
        </a>
      </div>
      <p className="text-justify mb-4 text-gray-400 mx-auto max-w-[1200px]">
        {t("Donations.Description1")}
      </p>
      <p className="text-justify mb-4 text-gray-400 mx-auto max-w-[1200px] mb-10">
        {t("Donations.Description2")}
      </p>
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

        <div className="w-1/2 flex flex-col items-center">
        <img
    src={happy}
    alt={t("altHappy")}
    className="mb-4 h-full max-h-[266px] rounded-2xl"
  />
          <div className="mt-0 flex items-center items-center flex-col gap-x-6">
            <a
              href="donate"
              className="rounded-full bg-orange-500 px-6 py-3 text-2xl font-semibold text-white shadow-xl  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[bg-orange-500]"
              style={{
                transition: "transform 0.3s",
                transform: "scale(1)",
              }}
              onMouseEnter={(e) => (e.target.style.transform = "scale(1.1)")}
              onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
            >
              <span className="text-gray-900 text-2xl" style={{ letterSpacing: "-0.05em" }}>
                {t("Standard.D")}
              </span>
              <span className="text-white text-2xl" style={{ letterSpacing: "-0.05em" }}>
                {t("Standard.ON")}
              </span>
              <span className="text-gray-900 text-2xl" style={{ letterSpacing: "-0.05em" }}>
                {t("Standard.ATE")}
              </span>
              <span className="text-white text-2xl" style={{ marginLeft: "0.5em" }}>
                {t("Standard.TODAY")}
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
