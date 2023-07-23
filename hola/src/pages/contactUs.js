import { React, useContext, useState } from "react";
import { useTranslation } from "react-i18next";
import emailIcon from "../IMAGES/email-icon.png";
import steve from "../IMAGES/steve.png";
import bianca from "../IMAGES/bianca.png";
import efrain from "../IMAGES/efrain.png";

export default function ContactUs() {
  const { t, i18n } = useTranslation();
  const testimonies = [
    {
      quote:
        "After joining engineering. I really appreciate my brain, which is divided into two parts (right-left). In right, nothing is left. In left, nothing is right. If it was not for SITE bachelors I would have never discovered this. ",
      author: "Steve",
      role: "ELG 2025",
      image: steve,
    },
    {
      quote:
        "Even though I am part of the Faculty of Arts, I love going to SITE and I was sad to realize that this was not the same in Summer, which is why I am thankful to SITE BACHELORS for supporting this wonderful cause",
      author: "Bianca",
      role: "History and Arts '25",
      image: bianca,
    },
    {
      quote:
      "Simply AWESOME",
      author: "Efrain",
      role: "SEG '25",
      image: efrain,
    },
  ];
  

  const [currentTestimony, setCurrentTestimony] = useState(0);

  const handlePrevious = () => {
    setCurrentTestimony((prev) => (prev === 0 ? testimonies.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentTestimony((prev) => (prev === testimonies.length - 1 ? 0 : prev + 1));
  };

  return (
    <>
      
    

      
      <section id="ContactUs" style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      
      {/* Testimonies section */}
      <section className="ContactUs -pt-0 pb-0 px-6 sm:py-32 lg:px-8 relative" style={{ paddingTop: 80, paddingBottom: 0 }}>
        <div className="max-w-2xl mx-auto">
          <section>
            <h2 className='text-xl'>{t('Testimonies')}</h2>
            <div style={{ borderBottom: '1px solid black', width: '50px', margin: '10px auto' }}></div>
          </section>
          <figure className="mt-10 relative bg-orange-500 p-4 rounded shadow-lg " style={{ borderRadius: "15px" }}>
            <div className="absolute left-0 top-1/2 transform -translate-y-1/2 ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-gray-900 cursor-pointer"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                onClick={handlePrevious}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </div>
            <div className="absolute right-0 top-1/2 transform -translate-y-1/2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-gray-900 cursor-pointer"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                onClick={handleNext}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
            <blockquote className="text-center text-xl font-semibold leading-8 text-gray-900 sm:text-2xl sm:leading-9">
              <p>{testimonies[currentTestimony]?.quote}</p>
            </blockquote>
            <figcaption className="mt-4">
              <img className="mx-auto h-10 w-10 rounded-full" src={testimonies[currentTestimony]?.image} alt="" />
              <div className="mt-2 flex items-center justify-center space-x-3 text-base">
                <div className="font-semibold text-gray-900">{testimonies[currentTestimony]?.author}</div>
                <svg viewBox="0 0 2 2" width={3} height={3} aria-hidden="true" className="fill-gray-900">
                  <circle cx={1} cy={1} r={1} />
                </svg>
                <div className="text-gray-600">{testimonies[currentTestimony]?.role}</div>
              </div>
            </figcaption>
          </figure>
        </div>
      </section>

      {/* ContactUs section */}
        <div className="ContactUs" style={{ textAlign: "center", marginBottom: "0px", marginTop: "40px" }}>
          <h1 style={{ fontSize: "50px", color: "#F24E1E" }}>
            {t("Contact Us")}
          </h1>
        </div>
        <div style={{ display: "flex", alignItems: "center", marginBottom: "75px" }}>
          <img
            src={emailIcon}
            alt="Email Icon"
            style={{ width: "30px", height: "30px", marginRight: "10px" }}
          />
          <div style={{ fontSize: "30px", color: "black" }}>sitebachelors@gmail.com</div>
        </div>
      </section>
    </>
  );
}
