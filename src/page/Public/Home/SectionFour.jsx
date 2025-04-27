import { Col, Row } from "antd";
import {CheckCircleOutlined} from '@ant-design/icons';
import { useTranslation } from "react-i18next";
export default function SectionFour() {
 const {t} = useTranslation()

  return (<>
  
  <div className="SectionFour" data-aos="fade-down" >
    <h1 style={{textAlign:"center"}}> {t("sectionFourTitle")} </h1>
    <Row justify="center" style={{gap:"20px", marginTop:"40px"}}>
     
      <Col xs={16} md={10} lg={8} xl={7}>
        <Row style={{gap:"15px"}}>
          <Col xs={24}>
          <div style={{display:"flex" , gap:"10px"}} className="SectionFourContainer">
            <div><CheckCircleOutlined /></div>
            <div>{t("sectionFourPage1")} </div>
          </div>
          </Col>
          <Col xs={24}>
          <div style={{display:"flex" , gap:"10px"}} className="SectionFourContainer">
            <div><CheckCircleOutlined /></div>
           <div>{t("sectionFourPage2")} </div>
          </div>
          </Col>
          <Col xs={24}>
          <div style={{display:"flex" , gap:"10px"}} className="SectionFourContainer">
            <div><CheckCircleOutlined /></div>
           <div>{t("sectionFourPage3")} </div>
          </div>
          </Col>
        </Row>
      </Col>
      <Col xs={16} md={10} lg={8} xl={7}>
      <Row  style={{gap:"15px"}}>
          <Col xs={24}>
          <div style={{display:"flex" , gap:"10px"}} className="SectionFourContainer">
            <div><CheckCircleOutlined /></div>
           <div>{t("sectionFourPage4")} </div>
          </div>
          </Col>
          <Col xs={24}>
          <div style={{display:"flex" , gap:"10px"}} className="SectionFourContainer">
            <div><CheckCircleOutlined /></div>
           <div>{t("sectionFourPage5")} </div>
          </div>
          </Col>
          <Col xs={24}>
          <div style={{display:"flex" , gap:"10px"}} className="SectionFourContainer">
            <div><CheckCircleOutlined /></div>
           <div>{t("sectionFourPage6")} </div>
          </div>
          </Col>
        </Row>
      </Col>

    </Row>
  </div>
  
  
  
  </>)
}
