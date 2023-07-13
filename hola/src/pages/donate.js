import React, { useContext, useState } from "react";
import { Stepper, Step, Button } from "@material-tailwind/react";

export default function Donate() {
  const [activeStep, setActiveStep] = useState(0);
  const [isLastStep, setIsLastStep] = useState(false);
  const [isFirstStep, setIsFirstStep] = useState(false);
  const [nextClicks, setNextClicks] = useState(0);
  const [formData, setFormData] = useState({
    fullname: "",
    studentNumber: "",
    email: "",
  });

  const handleNext = () => {
    if (activeStep < 2 && nextClicks < 2) {
      setActiveStep((cur) => cur + 1);
      setNextClicks((count) => count + 1);
    } else {
      // Handle maximum number of next clicks reached
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

  const renderStepContent = (step) => {
    switch (step) {
      case 0:
        return (
          <div>
            <div className="flex flex-wrap">
              <div className="w-full md:w-1/2 px-2">
                <div className="bg-white rounded-md shadow-md p-4 mb-4">
                  <h3 className="text-lg font-medium mb-2">
                    Select a Donation Amount
                  </h3>
                  <div className="flex flex-wrap">
                    <button className="bg-blue-500 text-white px-4 py-2 rounded-md mr-2 mb-2">
                      $10
                    </button>
                    <button className="bg-blue-500 text-white px-4 py-2 rounded-md mr-2 mb-2">
                      $20
                    </button>
                    <button className="bg-blue-500 text-white px-4 py-2 rounded-md mr-2 mb-2">
                      $50
                    </button>
                  </div>
                  <input
                    type="text"
                    className="border border-gray-300 rounded-md px-3 py-2 mt-4 w-full"
                    placeholder="Enter Custom Amount"
                  />
                </div>
              </div>
              <div className="w-full md:w-1/2 px-2">
                <div className="bg-white rounded-md shadow-md p-4 mb-4">
                  <h3 className="text-lg font-medium mb-2">Other Details</h3>
                  <label
                    htmlFor="title"
                    className="block text-sm font-medium text-gray-900"
                  >
                    Title
                  </label>
                  <input
                    type="text"
                    id="title"
                    className="border border-gray-300 rounded-md px-3 py-2 mt-1 w-full"
                  />
                  <label
                    htmlFor="category"
                    className="block text-sm font-medium text-gray-900 mt-4"
                  >
                    Category
                  </label>
                  <select
                    id="category"
                    className="border border-gray-300 rounded-md px-3 py-2 mt-1 w-full"
                  >
                    <option value="">Select Category</option>
                    <option value="category1">Category 1</option>
                    <option value="category2">Category 2</option>
                    <option value="category3">Category 3</option>
                  </select>
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
                  setFormData({ ...formData, studentNumber: e.target.value })
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
                <button
                  className="bg-red-500 text-white px-4 py-2 rounded-md mt-4"
                  style={{ backgroundColor: "#F24E1E" }}
                >
                  DONATE
                </button>
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
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="w-full py-4 px-8">
      <Stepper
        activeStep={activeStep}
        isLastStep={(value) => setIsLastStep(value)}
        isFirstStep={(value) => setIsFirstStep(value)}
      >
        <Step
          className={`h-8 w-8 rounded-full cursor-pointer ${
            activeStep === 0 ? "bg-red-500" : "bg-gray-300"
          }`}
          onClick={() => setActiveStep(0)}
        />
        <div className="flex-1 h-2 bg-gray-300 mx-2 rounded-full">
          <div
            className="h-full bg-red-500 rounded-full"
            style={{ width: `${(activeStep / 2) * 100}%` }}
          ></div>
        </div>
        <Step
          className={`h-8 w-8 rounded-full cursor-pointer ${
            activeStep === 1 ? "bg-red-500" : "bg-gray-300"
          }`}
          onClick={() => setActiveStep(1)}
        />
        <div className="flex-1 h-2 bg-gray-300 mx-2 rounded-full">
          <div
            className="h-full bg-red-500 rounded-full"
            style={{ width: `${(activeStep / 2) * 100}%` }}
          ></div>
        </div>
        <Step
          className={`h-8 w-8 rounded-full cursor-pointer ${
            activeStep === 2 ? "bg-red-500" : "bg-gray-300"
          }`}
          onClick={() => setActiveStep(2)}
        />
      </Stepper>
      <div className="mt-16">{renderStepContent(activeStep)}</div>
      <div className="mt-16 flex justify-between">
        <Button
          onClick={handlePrev}
          disabled={isFirstStep}
          className="bg-red-500"
        >
          Prev
        </Button>
        <Button
          onClick={handleNext}
          disabled={isLastStep || nextClicks >= 2}
          className="bg-red-500"
        >
          Next
        </Button>
      </div>
    </div>
  );
}
