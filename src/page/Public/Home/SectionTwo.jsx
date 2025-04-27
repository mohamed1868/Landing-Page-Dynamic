import { useTranslation } from "react-i18next";

export default function SectionTwo() {
  const { t } = useTranslation();

  return (
    <>
      <div data-aos="fade-down" className="SectionTwo">
        <div>
          <h1>{t("WhatisVariianceholding")}</h1>
          <p>{t("ArabHoldingOne")}</p>
          <p>{t("ArabHoldingTwo")}</p>
        </div>
      </div>
    </>
  );
}
