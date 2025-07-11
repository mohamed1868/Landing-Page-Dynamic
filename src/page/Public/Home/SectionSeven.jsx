import { Col, Row } from "antd";
import { useTranslation } from "react-i18next";

export default function SectionSeven() {
  const { t } = useTranslation();
  const handleScroll = () => {
    const section = document.getElementById("SectionEight");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <div className="SectionSeven" data-aos="fade-down" id="SectionSeven">
        <h1 style={{ textAlign: "center" }}>
          {" "}
          {t("sectionSevensectionTitle")}
        </h1>
        {/* <h4 style={{ textAlign: "center" }} > {t("sectionSevenTitle2")}</h4> */}
        <Row
          style={{ gap: "25px", justifyContent: "center", marginTop: "40px" }}
        >
          <Col xs={16} md={11} xl={7} className="SectionSevenContaier">
            <div
              style={{
                fontWeight: "bold",
                fontSize: "16px",
                textAlign: "center",
              }}
            >
              {" "}
              {t("sectionSevenPage2Title")}{" "}
            </div>
            <div
              style={{
                opacity: "0.7",
                marginTop: "10px",
                fontSize: "14px",
                textAlign: "center",
              }}
            >
              {" "}
              {t("sectionSevenPage2P")}{" "}
            </div>
            <div>
              <button onClick={handleScroll}> {t("sectionSevenPageButton")}</button>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
}
