import React from "react";
import { useTranslation } from "react-i18next";
import Accordion from "../components/accordion";

export default function FAQ() {
  const { t, i18n } = useTranslation();

  return (
    <div className="faq">
      <h1
        style={{
          textAlign: "center",
          fontSize: "50px",
          color: "#F24E1E",
          marginBottom: "10px",
          paddingBottom: "10px",
          paddingTop: "35px",
        }}
      >
        {t("FAQ")}
      </h1>
      <Accordion
        title={t("faqItem1Title")}
        content={t("faqItem1Content")}
      />
      <Accordion
        title={t("faqItem2Title")}
        content={t("faqItem2Content")}
      />
      <Accordion
        title={t("faqItem3Title")}
        content={t("faqItem3Content")}
      />
      <Accordion
        title={t("faqItem4Title")}
        content={t("faqItem4Content")}
      />
      <Accordion
        title={t("faqItem5Title")}
        content={t("faqItem5Content")}
      />
    </div>
  );
}
