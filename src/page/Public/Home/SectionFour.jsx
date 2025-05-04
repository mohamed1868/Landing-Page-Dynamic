import { Col, Row } from "antd";
import { CheckCircleOutlined } from '@ant-design/icons';
import { useTranslation } from "react-i18next";
export default function SectionFour() {
  const { t } = useTranslation()

  return (<>

    <div className="SectionFour" data-aos="fade-up" >
      <h1 style={{ textAlign: "center" }}> {t("sectionFourTitle")} </h1>
      <Row justify="center" style={{ gap: "20px", marginTop: "40px" }}>

        <Col xs={16} md={10} lg={8} xl={7}>
          <Row style={{ gap: "15px" }}>
            <Col xs={24}>
            <div className="SectionFourContainer">
                <div style={{ display: "flex", gap: "10px" }} >
                  <div><CheckCircleOutlined /></div>
                  <div style={{fontWeight:"bold"}}>{t("sectionFourPage2Title")} </div>
                </div>
                <div>
                  <p>
                  {t("sectionFourPage2")}
                  </p>
                </div>
              </div>

            </Col>
            <Col xs={24}>
              <div className="SectionFourContainer">
                <div style={{ display: "flex", gap: "10px" }} >
                  <div><CheckCircleOutlined /></div>
                  <div style={{fontWeight:"bold"}}>{t("sectionFourPage1Title")} </div>
                </div>
                <div>
                  <p>
                  {t("sectionFourPage1")} 
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </Col>
        <Col xs={16} md={10} lg={8} xl={7}>
          <Row style={{ gap: "15px" }}>
            <Col xs={24}>
            <div className="SectionFourContainer">
                <div style={{ display: "flex", gap: "10px" }} >
                  <div><CheckCircleOutlined /></div>
                  <div style={{fontWeight:"bold"}}>{t("sectionFourPage3Title")} </div>
                </div>
                <div>
                  <p>
                  {t("sectionFourPage3")} 
                  </p>
                </div>
              </div>

            </Col>
            <Col xs={24}>
            <div className="SectionFourContainer">
                <div style={{ display: "flex", gap: "10px" }} >
                  <div><CheckCircleOutlined /></div>
                  <div style={{fontWeight:"bold"}}>{t("sectionFourPage4Title")} </div>
                </div>
                <div>
                  <p>
                  {t("sectionFourPage4")} 
                  </p>
                </div>
              </div>

            </Col>


          </Row>
        </Col>

      </Row>
    </div>



  </>)
}
