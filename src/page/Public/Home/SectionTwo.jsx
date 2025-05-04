import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { useTranslation } from "react-i18next";

export default function SectionTwo() {
  const { t } = useTranslation();

  return (
    <>
      <div data-aos="fade-down" className="SectionTwo">
        <div>
          <h1 >{t("WhatisVariianceholding")}</h1>
          <div className="SectionOneContainer" style={{ display: "flex", marginTop: "60px" }}>
            <div style={{ width: "14%", margin: "0px 2px" }}>
              <DotLottieReact
                src="https://lottie.host/fd11ed4c-d0da-42f1-bfd9-fc4757624229/86HZF3Gdkw.lottie"
                loop
                autoplay
              />
            </div>
            <div>
              <p style={{ marginTop: "3%" }}>{t("ArabHoldingOne")}</p>
            </div>
          </div>
          <div className="SectionOneContainer" style={{ display: "flex" }}>
            <div style={{ width: "14%", margin: "0px 2px" }}>
              <DotLottieReact
                src="https://lottie.host/8b0f6241-9e07-4987-a13f-d8101d0d5ba9/4v4ZoMof8n.lottie"
                loop
                autoplay
              />
            </div>
            <div>
              <p style={{ marginTop: "3%" }}>{t("ArabHoldingTwo")}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
