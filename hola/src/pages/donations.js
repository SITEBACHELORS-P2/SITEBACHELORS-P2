import { React, useContext } from "react";
import happy from "../IMAGES/happy.png";
import { useTranslation } from "react-i18next";
import circle from "../IMAGES/cirle.png";

export default function Donations() {
  const { t, i18n } = useTranslation();

  return (
    <div className="donations container mx-auto my-8">
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: "20px",
        }}
      >
        <a style={{ fontSize: "20px", color: "#F24E1E" }}>
          {t("NavBar.Donations")}
        </a>
      </div>
      <p className="text-justify mb-4">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>
      <div className="flex">
        <div className="w-1/2">
          <div className="flex items-center mb-4">
            <div>
              <img src={circle} alt="Donation" className="w-8 h-8 mr-2" />
            </div>
            <div>
              <p className="text-gray-600">
                First row, first column text line 1
              </p>
              <p className="text-gray-600">
                First row, first column text line 2
              </p>
            </div>
          </div>
          <div className="flex items-center mb-4">
            <div>
              <img src={circle} alt="Donation" className="w-8 h-8 mr-2" />
            </div>
            <div>
              <p className="text-gray-600">
                Second row, first column text line 1
              </p>
              <p className="text-gray-600">
                Second row, first column text line 2
              </p>
            </div>
          </div>
          <div className="flex items-center">
            <div>
              <img src={circle} alt="Donation" className="w-8 h-8 mr-2" />
            </div>
            <div>
              <p className="text-gray-600">
                Third row, first column text line 1
              </p>
              <p className="text-gray-600">
                Third row, first column text line 2
              </p>
            </div>
          </div>
        </div>
        <div className="w-1/2">
          <img src={happy} alt="Donation" className="mb-4" />
          <button className="bg-customColor text-white px-4 py-2 rounded-md">
            {t("NavBar.DonateNow")}
          </button>
        </div>
      </div>
    </div>
  );
}
