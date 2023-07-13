import { React, useContext } from "react";
import { useTranslation } from "react-i18next";
import Accordion from "../components/accordion";

export default function FAQ() {
  const { t, i18n } = useTranslation();

  return (
    <div>
      <h1
        style={{
          textAlign: "center",
          fontSize: "50px",
          color: "#F24E1E",
          marginBottom: "20px",
        }}
      >
        {t("FAQ")}
      </h1>
      <Accordion
        title="How many donations can I make?"
        content="Vitae congue eu consequat ac felis placerat vestibulum lectus mauris ultrices. Cursus sit amet dictum sit amet justo donec enim diam porttitor lacus luctus accumsan tortor posuere."
      />
      <Accordion
        title="What is included in the date package?"
        content="Answer 1"
      />
      <Accordion title="How do I become a volunteer?" content="Answer 2" />
      <Accordion title="How are the dates scheduled?" content="Answer 3" />
      <Accordion
        title="Can I donate and not go on a date?"
        content="Answer 3"
      />
    </div>
  );
}
