import { useContext, useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useTranslation } from "react-i18next";
import SITE from "../IMAGES/SITE.png";
import donate from "../IMAGES/donate.png";
import volunteer from "../IMAGES/volunteer.png";
import fleche from "../IMAGES/fleche.png";
import { Link } from "react-scroll";

const navigation = [
  { name: "Product", href: "#" },
  { name: "Features", href: "#" },
  { name: "Marketplace", href: "#" },
  { name: "Company", href: "#" },
];

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { t, i18n } = useTranslation();

  return (
    <div className=" homepage mt-24 bg-white flex flex-col items-center justify-center min-h-screen">
      <header className="absolute inset-x-0 top-0 z-50">
        <div className="lg:hidden">
          <button
            type="button"
            className="p-2 rounded-md text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
      </header>

      <div className="">
        <header className="absolute inset-x-0 top-0 z-50">
          <div className="lg:hidden">
            <button
              type="button"
              className="p-2 rounded-md text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
        </header>

        <div className="bg-white flex flex-col items-center justify-center mx-auto py-0.5 sm:py-2 lg:py-5 mb-0">
          <header className="absolute inset-x-0 top-0 z-50">
            <div className="lg:hidden">
              <button
                type="button"
                className="p-2 rounded-md text-gray-700"
                onClick={() => setMobileMenuOpen(true)}
              >
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
          </header>

          <div
            className="mt-0 grid grid-cols-2 px-2 md:px-6 pt-0"
            style={{ gridTemplateColumns: "1fr 1fr" }}
          >
            <div
              className="flex flex-col justify-center"
              style={{ marginLeft: "6rem" }}
            >
              <div className="mx-auto max-w-2xl py-3 sm:py-4 lg:py-50 mb-0">
                <div className="text-left">
                  <h1 className="text-6xl font-extrabold tracking-tight text-gray-900 sm:text-6xl">
                    <span className="text-gray-900 text-6xl ">
                      {t("Homepage.Welcome1")}
                    </span>
                    <span className="text-orange-500 text-6xl">
                      {t("Homepage.Welcome2")}
                    </span>
                    <span className="text-gray-900  text-6xl">
                      {t("Homepage.Welcome3")}
                    </span>
                  </h1>

                  <div className="mt-10 flex items-center justify-left gap-x-6">
                    <a
                      href="donate"
                      className="rounded-full bg-orange-500 px-6 py-3 text-2xl font-semibold text-white shadow-xl  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[bg-orange-500]"
                      style={{
                        transition: "transform 0.3s",
                        transform: "scale(1)",
                      }}
                      onMouseEnter={(e) =>
                        (e.target.style.transform = "scale(1.1)")
                      }
                      onMouseLeave={(e) =>
                        (e.target.style.transform = "scale(1)")
                      }
                    >
                      <span
                        className="text-gray-900 text-2xl"
                        style={{ letterSpacing: "-0.05em" }}
                      >
                        {t("Standard.D")}
                      </span>
                      <span
                        className="text-white text-2xl"
                        style={{ letterSpacing: "-0.05em" }}
                      >
                        {t("Standard.ON")}
                      </span>
                      <span
                        className="text-gray-900 text-2xl"
                        style={{ letterSpacing: "-0.05em" }}
                      >
                        {t("Standard.ATE")}
                      </span>
                      <span
                        className="text-white text-2xl"
                        style={{ marginLeft: "0.5em" }}
                      >
                        {t("Standard.TODAY")}
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center items-center mt-0 pt-0 mb-0">
              <img
                src={SITE}
                alt="Your Image"
                className="w-full max-w-md px-0 py-0 m-0"
                style={{ borderRadius: 5 }}
              />
            </div>
          </div>
        </div>
      </div>

      <div id="lowerSection">{/* Content of the lower section */}</div>

      <div className="flex items-center justify-center -mt-4">
        <a href="#lowerSection">
          <img
            src={fleche}
            alt="Bouncing Arrow"
            className="w-10 h-10 animate-bounce"
          />
        </a>
      </div>

      <div className="Ring pt-0 -mt-30 mb-5 ml-20 mr-20">
        <div className="mt-20 text-center">
          {" "}
          {/* - */}
          <h2 className="text-2xl font-bold">
            <span className="text-gray-900 text-2xl">
              {t("Homepage.Earn that")}
            </span>{" "}
            <span className="text-orange-500 text-2xl">
              {t("Homepage.Ring")}
            </span>
          </h2>
          <p className="text-base text-gray-400 mt-3">
            {t("Homepage.Volunteertext")}
          </p>
        </div>

        <div className="mt-12 grid grid-cols-2 sm:gap-24 max-w-xl">
          <div
            className="rounded-lg border border-gray-300 p-4 flex flex-col items-center bg-orange-500 shadow-lg hover:scale-105 transition-transform duration-300"
            style={{ borderRadius: "20px" }}
          >
            <img
              src={donate}
              alt="Logo 1"
              className="w-12 h-12 mb-2 object-contain"
              style={{ filter: "brightness(0) invert(1)" }}
            />
            <p className="mt-4 text-lg font-medium text-white">
              {t("Homepage.Donate")}
            </p>
            <p className="mt-7 mb-1.5 text-xs text-white">
              {t("Homepage.Donatetext")}
            </p>

            <Link
              to="donations"
              className="mt-5 text-sm font-semibold leading-6 text-white border border-white px-4 py-1 rounded-md hover:bg-white hover:border-white hover:text-orange-500"
              style={{ borderRadius: "30px", cursor: "pointer" }}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              {t("Homepage.Learn More")} <span aria-hidden="true">→</span>
            </Link>
          </div>
          <div
            className="rounded-lg border border-gray-300 p-4 flex flex-col items-center bg-white text-gray-900 shadow-lg hover:scale-105 transition-transform duration-300"
            style={{ borderRadius: "20px" }}
          >
            <img
              src={volunteer}
              alt="Logo 2"
              className="w-12 h-12 mb-2 object-contain"
            />
            <p className="mt-4 text-lg font-medium text-orange-500">
              {t("Homepage.Volunteer")}
            </p>
            <p className="mt-5 mb-1.5 text-xs text-orange-500">
              {t("Homepage.Volunteertext")}
            </p>

            <Link
              to="faq"
              className="mt-auto text-sm font-semibold leading-6 border text-orange-500 border border-orange-500 px-4 py-1 rounded-md hover:bg-orange-500 hover:border-white hover:text-white"
              style={{ borderRadius: "30px", cursor: "pointer" }}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              {t("Homepage.Learn More")}
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
