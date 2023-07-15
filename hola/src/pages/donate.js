import React, { useContext, useState } from "react";
import { Stepper, Step, Button } from "@material-tailwind/react";
import { useTranslation } from "react-i18next";

export default function Donate() {
  const { t, i18n } = useTranslation();

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

  const handleInputChange = (event) => {
    const value = event.target.value;
    setInputValue(value);
  
    const isValid = filteredOptions.includes(value);
    setIsNameValid(isValid || value === ""); // Set isValid to true if the value is empty
  };
  const filteredOptions = ["Sven", "Rick", "Diana"].filter((option) =>
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

  const renderStepContent = (step) => {
    switch (step) {
      case 0:
        return (
          <div>
            <div className="flex flex-wrap">
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
                    className="border border-gray-300 rounded-md px-3 py-2 mt-4 w-full"
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
                    className="border border-gray-300 rounded-md px-3 py-2 mt-1 w-full"
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
            <div className="relative mt-2 rounded-md shadow-sm">
              <input
                type="text"
                name="fullname"
                id="fullname"
                className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
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
            <div className="relative mt-2 rounded-md shadow-sm">
              <input
                type="text"
                name="studentNumber"
                id="studentNumber"
                className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
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
            <div className="relative mt-2 rounded-md shadow-sm">
              <input
                type="email"
                name="email"
                id="email"
                className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
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
            <div className="relative mt-2 rounded-md shadow-sm">
              <input
                type="date"
                name="tentativeDate"
                id="tentativeDate"
                className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                value={formData.tentativeDate}
                onChange={(e) =>
                  setFormData({ ...formData, tentativeDate: e.target.value })
                }
              />
            </div>

            <div className="relative mt-2 rounded-md shadow-sm">
              <input
                type="time"
                name="tentativeTime"
                id="tentativeTime"
                className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
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
              <div className="bg-white rounded-md shadow-md p-4 mb-4">
                <h3 className="text-lg font-medium mb-2">Payment</h3>
                <hr className="border-gray-300 my-4" />
                <p>Pay With:</p>
                <div className="flex items-center my-2">
                  <input
                    type="radio"
                    id="card"
                    name="paymentMethod"
                    className="mr-2"
                  />
                  <label htmlFor="card" className="mr-4">
                    Card
                  </label>
                  <input
                    type="radio"
                    id="bank"
                    name="paymentMethod"
                    className="mr-2"
                  />
                  <label htmlFor="bank" className="mr-4">
                    Bank
                  </label>
                </div>
                <label
                  htmlFor="cardNumber"
                  className="block mt-4 text-sm font-medium leading-6 text-gray-900"
                >
                  Card Number
                </label>
                <div className="relative mt-2 rounded-md shadow-sm">
                  <input
                    type="text"
                    name="cardNumber"
                    id="cardNumber"
                    className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    placeholder="Enter card number"
                  />
                </div>
                <div className="flex mt-4">
                  <div className="mr-4">
                    <label
                      htmlFor="expirationDate"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Expiration Date
                    </label>
                    <div className="relative mt-2 rounded-md shadow-sm">
                      <input
                        type="text"
                        name="expirationDate"
                        id="expirationDate"
                        className="block w-20 rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
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
                        className="block w-16 rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
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
                    <img
                      src="your-image-url.jpg"
                      alt="Donation Summary"
                      className="w-20 h-20 rounded-md object-cover"
                    />
                  </div>
                  <div className="ml-4">
                    <div className="flex justify-between">
                      <p className="font-medium">Date</p>
                      <p>$25.00</p>
                    </div>
                    <div className="text-sm text-gray-500">
                      <p>Rick</p>
                      <p>Qty: 1</p>
                    </div>
                  </div>
                </div>
                <hr className="border-gray-300 my-4" />
                <div className="flex justify-between">
                  <p className="text-lg font-medium">Total</p>
                  <p className="text-lg font-medium">$25.00</p>
                </div>
              </div>
              <button className="bg-orange-500 text-white px-10 py-3 rounded-md mt-4">
                DONATE
              </button>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="w-full py-20 px-8 mt-50">
      <Stepper
        activeStep={activeStep}
        isLastStep={(value) => setIsLastStep(value)}
        isFirstStep={(value) => setIsFirstStep(value)}
      >
        <Step
          className={`h-8 w-8 rounded-full cursor-pointer ${
            activeStep === 0 ? "bg-oranges-500" : "bg-gray-300"
          }`}
          onClick={() => setActiveStep(0)}
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
          onClick={() => setActiveStep(1)}
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
          onClick={() => setActiveStep(2)}
        />
      </Stepper>
      <div className="mt-16">{renderStepContent(activeStep)}</div>
      <div className="mt-16 flex justify-between">
        <Button
          onClick={handlePrev}
          disabled={isFirstStep}
          className="bg-orange-500"
        >
          Prev
        </Button>
        <Button
          onClick={handleNext}
          disabled={isLastStep || nextClicks >= 2}
          className="bg-orange-500"
        >
          Next
        </Button>
      </div>
    </div>
  );
}
