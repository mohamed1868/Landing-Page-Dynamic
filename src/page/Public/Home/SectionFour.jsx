import { Col, Row } from "antd";
import { useTranslation } from "react-i18next";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
export default function SectionFour() {
  const { t } = useTranslation();

  return (
    <>
      <div className="SectionFour" id="SectionFour" data-aos="fade-up">
        <h1 style={{ textAlign: "center" }}> {t("sectionFourTitle")} </h1>
        <Row
          justify="center"
          style={{ gap: "20px", marginTop: "20px" }}
        >
          <Col xs={20} md={18} lg={12} >
            <Row style={{ gap: "15px" }}>
              <Col xs={24}>
                <div className="SectionFourContainer">
                  <div
                    style={{
                      display: "flex",
                      gap: "10px",
                      // justifyContent: "center"
                    }}
                  >
                    <div style={{ width: "60px", height: "60px" }}>
                      <DotLottieReact
                        src="https://lottie.host/9d6877d5-956c-4340-9888-152b15f36158/j2AFKRmNKS.lottie"
                        loop
                        autoplay
                      />
                    </div>
                    <div style={{ fontWeight: "bold", marginTop: " 13px" }}>
                      {t("sectionFourPage2Title")}
                    </div>
                  </div>
                  <div>
                    <p>{t("sectionFourPage2")}</p>
                  </div>
                </div>
              </Col>
              <Col xs={24}>
                <div className="SectionFourContainer">
                  <div
                    style={{
                      display: "flex",
                      gap: "10px",
                      // justifyContent: "center"
                    }}
                  >
                    <div style={{ width: "50px", height: "50px" }}>
                      <DotLottieReact
                        src="https://lottie.host/e927ab39-9840-44ef-bbaf-b750433f63d3/n6BLGU3SFE.lottie"
                        loop
                        autoplay
                      />
                    </div>
                    <div style={{ fontWeight: "bold", marginTop: "18px" }}>
                      {t("sectionFourPage1Title")}{" "}
                    </div>
                  </div>
                  <div>
                    <p>{t("sectionFourPage1")}</p>
                  </div>
                </div>
              </Col>
            </Row>
          </Col>
          <Col xs={20} md={18} lg={12} >
            <Row style={{ gap: "15px" }}>
              <Col xs={24}>
                <div className="SectionFourContainer">
                  <div
                    style={{
                      display: "flex",
                      gap: "10px",
                      // justifyContent: "center"
                    }}
                  >
                    <div style={{ width: "60px", height: "60px" }}>
                      <DotLottieReact
                        src="https://lottie.host/0e4f4687-1e9c-419e-a6f5-ded96b6d90fa/BpxHzI1bKv.lottie"
                        loop
                        autoplay
                      />
                    </div>
                    <div style={{ fontWeight: "bold", marginTop: "13px" }}>
                      {t("sectionFourPage3Title")}{" "}
                    </div>
                  </div>
                  <div>
                    <p>{t("sectionFourPage3")}</p>
                  </div>
                </div>
              </Col>
              <Col xs={24}>
                <div className="SectionFourContainer">
                  <div
                    style={{
                      display: "flex",
                      gap: "10px",
                      // justifyContent: "center"
                    }}
                  >
                    <div style={{ width: "60px", height: "60px" }}>
                      <DotLottieReact
                        src="https://lottie.host/4d47dd42-f2b0-4bcb-ba3b-04a710b3526c/oMhITy2INu.lottie"
                        loop
                        autoplay
                      />
                    </div>
                    <div style={{ fontWeight: "bold", marginTop: "13px" }}>
                      {t("sectionFourPage4Title")}{" "}
                    </div>
                  </div>
                  <div>
                    <p>{t("sectionFourPage4")}</p>
                  </div>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    </>
  );
}
