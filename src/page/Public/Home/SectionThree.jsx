import { useTranslation } from "react-i18next";
import { Col, Row } from "antd";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

export default function SectionThree() {
  const { t } = useTranslation();

  return (
    <>
<div data-aos="fade-up" className="SectionThree">
  <Row
    style={{ marginTop: "10%" }} 
    align="middle" 
  >
    <Col xs={24} md={12}>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <DotLottieReact
          src="https://lottie.host/928736d9-3bc3-425d-a5b1-de56bb718335/ZGuJHbq6wk.lottie"
          loop
          autoplay
        />
      </div>
    </Col>

    <Col xs={24} md={10}>
      <div className="textSection1">
        <h1>{t("sectionThreeTextOne")}</h1>
        <p>{t("sectionThreeTextTwo")}</p>
      </div>
    </Col>
  </Row>
</div>

    </>
  );
}
