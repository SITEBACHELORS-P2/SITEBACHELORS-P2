import React, { useContext, useState,useEffect } from "react";
import { Stepper, Step, Button } from "@material-tailwind/react";
import { useTranslation } from "react-i18next";
import donate from "../IMAGES/donate.png";

export default function Donate() {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top when the component mounts
    
  }, []);


  const [showError, setShowError] = useState(false);
  const [activeStep, setActiveStep] = useState(0);
  const [isLastStep, setIsLastStep] = useState(false);
  const [isFirstStep, setIsFirstStep] = useState(false);
  const [nextClicks, setNextClicks] = useState(0);

  const [inputValue, setInputValue] = useState("");
  const [formData, setFormData] = useState({
    fullname: "",
    studentNumber: "",
    email: "",
  });

  const [isNameValid, setIsNameValid] = useState(true);

  const [selectedBachelor, setSelectedBachelor] = useState("");

  const handleInputChange = (event) => {
    const value = event.target.value;
    setInputValue(value);
  
    const isValid = filteredOptions.includes(value);
    setIsNameValid(isValid || value === ""); // Set isValid to true if the value is empty

    
    // Set the selected bachelor's name when it's valid
    if (isValid) {
      setSelectedBachelor(value);
    } else {
      setSelectedBachelor("");
    }
  };
  const filteredOptions = ["Sven", "Rick", "Diana","Antonella","Claudette", "Steve","Nic","Carl","Ruperto","Efrain","Joshua","Mario"].filter((option) =>
    option.includes(inputValue)
  );

  const handleNext = () => {
    if (activeStep < 2 && nextClicks < 2) {
      if ((selectedAmount !== 0 || customAmount !== "") && (isNameValid || inputValue === "")) {
        setActiveStep((cur) => cur + 1);
        setNextClicks((count) => count + 1);
        setShowError(false); // Clear the error when moving to the next step
      } else {
        setShowError(true);
      }
    } else {
      console.log("Maximum number of next clicks reached");
    }
  };
  
  const handlePrev = () => {
    setActiveStep((cur) => cur - 1);
    setNextClicks(0);
  };

  React.useEffect(() => {
    setIsFirstStep(activeStep === 0);
    setIsLastStep(activeStep === 2);
  }, [activeStep]);

  const [selectedAmount, setSelectedAmount] = useState(0);

  const handleAmountSelect = (amount) => {
    setSelectedAmount(amount);
    setCustomAmount("");
    setShowError(false);
  };

  const handleCustomAmountChange = (event) => {
    const value = event.target.value;
    if (!isNaN(value)) {
      setCustomAmount(value);
      setSelectedAmount(0);
      setShowError(false);
    } else {
      setShowError(true);
    }
  };

  const [customAmount, setCustomAmount] = useState("");

  const [showPopup, setShowPopup] = useState(false);

  const handleDonate = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };
  const renderStepContent = (step) => {
    switch (step) {
      case 0:
        return (
          <div >
            <div className="flex-wrap items-center justify-center" style={{ marginLeft:'430px'}}>
              <div className="w-full md:w-1/2 px-2">
                <div
                  className={`bg-white rounded-md shadow-md p-4 mb-4 ${
                    showError ? "shadow-red" : ""
                  }`}
                >
                  <h3 className="text-lg font-medium mb-2">
                    {t("Donate.selectAmount")}
                  </h3>
                  <div className="flex flex-wrap justify-center">
                    <button
                      className={`border ${
                        selectedAmount === 10
                          ? "bg-orange-500 text-white"
                          : "bg-white text-orange-500"
                      } px-4 py-2 rounded-md mr-2 mb-2`}
                      onClick={() => handleAmountSelect(10)}
                    >
                      $10
                    </button>
                    <button
                      className={`border ${
                        selectedAmount === 20
                          ? "bg-orange-500 text-white"
                          : "bg-white text-orange-500"
                      } px-4 py-2 rounded-md mr-2 mb-2`}
                      onClick={() => handleAmountSelect(20)}
                    >
                      $20
                    </button>
                    <button
                      className={`border ${
                        selectedAmount === 50
                          ? "bg-orange-500 text-white"
                          : "bg-white text-orange-500"
                      } px-4 py-2 rounded-md mr-2 mb-2`}
                      onClick={() => handleAmountSelect(50)}
                    >
                      $50
                    </button>
                  </div>

                  <input
                    type="text"
                    
                    className="border border-gray-300 rounded-md px-3 py-2 mt-1  block w-26 mx-auto  rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-500 sm:text-sm sm:leading-6"
                    placeholder="Enter Custom Amount"
                    value={customAmount}
                    onChange={handleCustomAmountChange}
                  />
                  {showError && (
                    <p className="text-red-500 text-xs">
                      Please select or enter a valid amount (1).
                    </p>
                  )}
                </div>
              </div>
              <div className="w-full md:w-1/2 px-2">
              <div className={`bg-white rounded-md shadow-md p-4 mb-4 ${!isNameValid ? 'shadow-red' : ''}`}>
                  <h3 className="text-lg font-medium mb-2">
                    {t("Donate.optional")}
                  </h3>
                  <input
                    type="text"
                    value={inputValue}
                    onChange={handleInputChange}
                    placeholder={t("Donate.enterName")}
               
                    className="border border-gray-300 block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-500 sm:text-sm sm:leading-6"

                    list="amountOptions"
                  />
                  <datalist id="amountOptions" className="filtered-list-container">
                    {filteredOptions.map((option) => (
                      <option value={option} key={option} />
                    ))}
                  </datalist>
                  {!isNameValid && (
                    <p className="text-red-500 text-xs">
                      Please select a valid name
                    </p>
                  )}
                  <p className="text-sm text-orange-500 mt-5">
                    {t("Donate.fineprint")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        );
      case 1:
        return (
          <div>
            <label
              htmlFor="fullname"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Full Name
            </label>
            <div className="relative mt-2 w-1/3 focus-within:ring-orange-500 mx-auto">
  <input
    type="text"
    name="fullname"
    id="fullname"
    className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-500 sm:text-sm sm:leading-6"
    placeholder="John Doe"
    value={formData.fullname}
    onChange={(e) =>
      setFormData({ ...formData, fullname: e.target.value })
    }
  />
</div>

            <label
              htmlFor="studentNumber"
              className="block mt-4 text-sm font-medium leading-6 text-gray-900"
            >
              Student Number
            </label>
            <div className="relative mt-2 w-1/3 mx-auto">
              <input
                type="text"
                name="studentNumber"
                id="studentNumber"
                className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-500 sm:text-sm sm:leading-6"
                placeholder="123456789"
                value={formData.studentNumber}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    studentNumber: e.target.value,
                  })
                }
              />
            </div>

            <label
              htmlFor="email"
              className="block mt-4 text-sm font-medium leading-6 text-gray-900"
            >
              Email
            </label>
            <div className="relative mt-2 rounded-md shadow-sm w-1/3 mx-auto">
              <input
                type="email"
                name="email"
                id="email"
                className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-500  sm:text-sm sm:leading-6"
                placeholder="example@example.com"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
            </div>

            <label
              htmlFor="tentativeDate"
              className="block mt-4 text-sm font-medium leading-6 text-gray-900"
            >
              Tentative day and time (if applicable)
            </label>
            <div className="relative mt-2 rounded-md shadow-sm w-1/3 mx-auto">
              <input
                type="date"
                name="tentativeDate"
                id="tentativeDate"
                className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-500 sm:text-sm sm:leading-6"
                value={formData.tentativeDate}
                onChange={(e) =>
                  setFormData({ ...formData, tentativeDate: e.target.value })
                }
              />
            </div>

            <div className="relative mt-2 rounded-md shadow-sm w-1/3 mx-auto">
              <input
                type="time"
                name="tentativeTime"
                id="tentativeTime"
                className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-500 sm:text-sm sm:leading-6"
                value={formData.tentativeTime}
                onChange={(e) =>
                  setFormData({ ...formData, tentativeTime: e.target.value })
                }
              />
            </div>
          </div>
        );
      case 2:
        return (
          <div className="flex flex-wrap">
            <div className="w-full md:w-1/2 px-2">
              <div className="bg-white rounded-md shadow-md p-4 mb-4 ">
                <h3 className="text-lg font-medium mb-2">Payment</h3>
                <hr className="border-gray-300 my-4 i" />
                <p className="text-left">Pay With:</p>
                <div className="flex items-center flex  mt-4 my-2">
                  <input
                    type="radio"
                    id="card"
                    name="paymentMethod"
                    className="mr-2"
                  />
                  <label htmlFor="card" className="mr-4">
                    Credit
                  </label>
                  <input
                    type="radio"
                    id="bank"
                    name="paymentMethod"
                    className="mr-2"
                  />
                  <label htmlFor="bank" className="mr-4">
                    Debit
                  </label>
                </div>
                <label
  htmlFor="cardNumber"
  className="block mt-4 text-sm font-medium leading-6 text-gray-900"
>
  Card Number
</label>
<div className="relative mt-2 rounded-md shadow-md">
  <input
    type="text"
    name="cardNumber"
    id="cardNumber"
    className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-500 shadow-md sm:text-sm sm:leading-6"
    placeholder="1234 5678 9234 1234"
  />
</div>
                <div className="flex justify-center mt-4">
                  <div className="mr-4">
                    <label
                      htmlFor="expirationDate"
                      className="block text-sm font-medium leading-6 text-gray-900 text"
                    >
                      Expiration Date
                    </label>
                    <div className="relative mt-2 rounded-md shadow-sm">
                      <input
                        type="text"
                        name="expirationDate"
                        id="expirationDate"
                        className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-500 shadow-md sm:text-sm sm:leading-6"
                        placeholder="MM/YY"
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="cvv"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      CVV
                    </label>
                    <div className="relative mt-2 rounded-md shadow-sm">
                      <input
                        type="text"
                        name="cvv"
                        id="cvv"
                        className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-500 shadow-md sm:text-sm sm:leading-6"
                        placeholder="CVV"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2 px-2">
                <div className="bg-gray-200 rounded-md shadow-md p-4 mb-4">
                  <h3 className="text-lg font-medium mb-2">Donation Summary</h3>
                  <hr className="border-gray-300 my-4" />
                  <div className="flex">
                    <div>
                      {/* Display the selected amount in the donation summary */}
                      <img
                        src={donate} // Replace with your actual image URL
                        alt="Donation Summary"
                        className="w-20 h-20 rounded-md object-cover"
                      />
                    </div>
                    <div className="ml-4 flex-grow">
                      <div className="flex justify-between">
                        <p className="font-medium">Date</p>
                        {/* Display the selected amount here */}
                        ${((selectedAmount || 0) + Number(customAmount)).toFixed(2)}
                      </div>
                      <div className="text-sm text-gray-500">
        
          <p  className="text-left">{inputValue || "No Bachelor Selected"}</p>
          <p className="text-right">Qty: 1</p> 
        </div>
                    </div>
                  </div>
                  <hr className="border-gray-300 my-4" />
                  <div className="flex justify-between">
                    <p className="text-lg font-medium">Total</p>
                    {/* Display the selected amount as the total */}
                    ${((selectedAmount || 0) + Number(customAmount)).toFixed(2)}
                  </div>
                </div>
                <div className="mt-10 flex items-center justify-center gap-x-6">
                  <a
                    href="#"
                    onClick={handleDonate}
                    className="rounded-full bg-orange-500 px-6 py-3 text-2xl font-semibold text-white shadow-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[bg-orange-500]"
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
                  </a>
                </div>
                {showPopup && (
                  <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white rounded-md p-8 w-2/3">
                      <h2 className="text-4xl font-bold text-orange-500 mb-4 rounded-xl">
                        THANKS FOR YOUR DONATION!
                      </h2>
                      <p className="text-sm font-medium text-gray-600 mb-4">
                        If you selected a bachelor we will contact you (through the email address you provided during the check-out process) in 1-2 business days regarding your date details.
                      </p>
                      <div className="mt-10 flex items-center justify-left gap-x-6">
                    <a
                      href="/"
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
                        {t("Homepage")}
                      </span>
                     
 
                    </a>
                  </div>
                       
                    </div>
                  </div>
                )}
              </div>
            </div>
          );
        

      default:
        return null;
    }
  };

  return (
    
    <div className="w-full py-20 px-8 mt-50 ">
      <div className="text-left ml-32 mb-12">
      <span
              className="text-gray-900 text-4xl"
              style={{ letterSpacing: "-0.05em" }}
            >
              {t("Standard.D")}
            </span>
            <span
              className="text-orange-500 text-4xl"
              style={{ letterSpacing: "-0.05em" }}
            >
              {t("Standard.ON")}
            </span>
            <span
              className="text-gray-900 text-4xl"
              style={{ letterSpacing: "-0.05em" }}
            >
              {t("Standard.ATE")}
            </span>
            <span
              className="text-orange-500 text-4xl"
              style={{ marginLeft: "0.5em" }}
            >
              {t("Standard.TODAY")}
            </span>
  <p className="mt-4 text-lg text-gray-400">
    {t("BACHELORS.ParagraphText")}
  </p>
</div>
      <Stepper
        activeStep={activeStep}
        isLastStep={(value) => setIsLastStep(value)}
        isFirstStep={(value) => setIsFirstStep(value)}
      >
        <Step
          className={`h-8 w-8 rounded-full cursor-pointer ${
            activeStep === 0 ? "bg-oranges-500" : "bg-gray-300"
          }`}
          //onClick={() => setActiveStep(0)}
        />
        <div className="flex-1 h-2 bg-gray-300 mx-2 rounded-full">
          <div
            className="h-full bg-orange-500 rounded-full"
            style={{ width: `${(activeStep / 2) * 100}%` }}
          ></div>
        </div>
        <Step
          className={`h-8 w-8 rounded-full cursor-pointer ${
            activeStep === 1 ? "bg-orange-500" : "bg-gray-300"
          }`}
          //onClick={() => setActiveStep(1)}
        />
        <div className="flex-1 h-2 bg-gray-300 mx-2 rounded-full">
          <div
            className="h-full bg-orange-500 rounded-full"
            style={{ width: `${(activeStep / 2) * 100}%` }}
          ></div>
        </div>
        <Step
          className={`h-8 w-8 rounded-full cursor-pointer ${
            activeStep === 2 ? "bg-orange-500" : "bg-gray-300"
          }`}
          //onClick={() => setActiveStep(2)}
        />
      </Stepper>
      
      <div className="mt-8">
      {renderStepContent(activeStep)}
      <div className="mt-8 flex justify-between">
        {activeStep === 0 && (
          <>
            <div></div> {/* Empty div to push next button to the right */}
            <Button onClick={handleNext} disabled={isLastStep || nextClicks >= 2} className="bg-orange-500">
              Next
            </Button>
          </>
        )}

        {activeStep === 1 && (
          <>
            <Button onClick={handlePrev} disabled={isFirstStep} className="bg-orange-500">
              Prev
            </Button>
            <Button onClick={handleNext} disabled={isLastStep || nextClicks >= 2} className="bg-orange-500">
              Next
            </Button>
          </>
        )}

        {activeStep === 2 && (
          <>
            <Button onClick={handlePrev} disabled={isFirstStep} className="bg-orange-500">
              Prev
            </Button>
            <div></div> {/* Empty div to push next button to the right */}
          </>
        )}
      </div>
    </div>
  </div>
  );
}


