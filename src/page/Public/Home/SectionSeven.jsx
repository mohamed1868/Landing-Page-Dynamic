import { Col, Row } from "antd";
import { useTranslation } from "react-i18next";


export default function SectionSeven() {
  
    const {t} = useTranslation()


  return (<>
  <div className="SectionSeven" data-aos="fade-up">
  <h1 style={{ textAlign: "center" }}> {t("sectionSevensectionTitle") }</h1>
  <h4 style={{ textAlign: "center"}} > {t("sectionSevenTitle2") }</h4>
<Row style={{gap:"25px" , justifyContent:"center" , marginTop:"40px"}}>
    <Col xs={16} md={11} xl={6} className="SectionSevenContaier">
    <div style={{fontWeight:"bold" }}> {t("sectionSevenPage1Title") } </div>
    <div style={{opacity:"0.7", marginTop:"10px" , fontSize:"12px"}}>{t("sectionSevenPage1P") }   </div>
    <div>
        <button> {t("sectionSevenPageButton") } </button>
    </div>
    </Col>
    <Col xs={16} md={11} xl={6} className="SectionSevenContaier">
    <div style={{fontWeight:"bold" }}>  {t("sectionSevenPage2Title") } </div>
    <div style={{opacity:"0.7", marginTop:"10px" , fontSize:"12px"}}> {t("sectionSevenPage2P") }       </div>
    <div>
        <button>  {t("sectionSevenPageButton") } </button>
    </div>
    </Col>
    <Col xs={16} md={11} xl={6} className="SectionSevenContaier">
    <div style={{fontWeight:"bold" }}>  {t("sectionSevenPage3Title") }  </div>
    <div style={{opacity:"0.7", marginTop:"10px" , fontSize:"12px"}}> {t("sectionSevenPage3P") }   </div>
    <div>
        <button>  {t("sectionSevenPageButton") } </button>
    </div>
    </Col>
</Row>
  </div>
  

  
  </>

  )
}
