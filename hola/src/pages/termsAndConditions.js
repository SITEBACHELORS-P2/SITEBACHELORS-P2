import React from 'react';
import { useTranslation } from "react-i18next";

const TermsAndConditions = () => {
  const { t, i18n } = useTranslation();
  return (
    <div className="container mt-100 mx-auto bg-white p-16 ">
      <h2 className="text-2xl font-bold mb-4 text-customcolor">TERMS OF SERVICE</h2>
      <p className="text-gray-600 text-justify">
        {t("Terms")}
      </p>
    </div>
  );
};

export default TermsAndConditions;
