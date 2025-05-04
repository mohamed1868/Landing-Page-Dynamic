import { Col, Row } from "antd";
import Link from "antd/es/typography/Link";
import { useTranslation } from "react-i18next";


export default function SectionSeven() {

    const { t } = useTranslation()


    return (<>
        <div className="SectionSeven" data-aos="fade-down" id="SectionSeven">
            <h1 style={{ textAlign: "center" }}> {t("sectionSevensectionTitle")}</h1>
            <h4 style={{ textAlign: "center" }} > {t("sectionSevenTitle2")}</h4>
            <Row style={{ gap: "25px", justifyContent: "center", marginTop: "40px" }}>
                <Col xs={16} md={11} xl={7} className="SectionSevenContaier">
                    <div style={{ fontWeight: "bold" ,fontSize: "16px"}}>  {t("sectionSevenPage2Title")} </div>
                    <div style={{ opacity: "0.7", marginTop: "10px", fontSize: "14px" }}> {t("sectionSevenPage2P")}       </div>
                    <div>
                        <Link href="#SectionEight">
                            <button>  {t("sectionSevenPageButton")} </button>
                        </Link>

                    </div>
                </Col>

            </Row>
        </div>



    </>

    )
}
