import 'swiper/css';
import 'swiper/css/pagination';
import { useTranslation } from "react-i18next";
import { Col, Row } from 'antd';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import Link from 'antd/es/typography/Link';

export default function SectionSix() {

     const { t } = useTranslation()


     return (<>

          <div className="SectionSix" id='SectionSix' data-aos="fade-up">
               <h1 style={{ textAlign: "center" }}> {t("sectionSixTitle")}</h1>
               <h4  >{t("sectionSixTitle2")} </h4>
               <div>
                    <Row justify="center" style={{ gap: "20px", marginTop: "40px" }}>
                         <Col lg={7} md={8} xl={5} style={{ textAlign: "center" }} className="SectionSixContaier">
                              <div>
                                   <DotLottieReact
                                        src="https://lottie.host/06b5460c-e126-4bab-9861-0cc52ba45ee3/wyizyomcTr.lottie"
                                        loop
                                        autoplay
                                   />
                              </div>
                              <h1>Right Time Express</h1>
                              <Link href="#SectionEight">
                                   <button className='buttonSectionSix'>  {t("sectionSevenPageButton")} </button>
                              </Link>

                         </Col>
                         <Col lg={7} md={8} xl={5} style={{ textAlign: "center" }} className="SectionSixContaier">
                              <div>
                                   <DotLottieReact
                                        src="https://lottie.host/8628b580-80d7-431a-9af5-ef3c5a3b875d/QAm0VIVArP.lottie"
                                        loop
                                        autoplay
                                   />
                              </div>
                              <h1>  Nova Systems </h1>
                              <Link href="#SectionEight">
                                   <button className='buttonSectionSix'>  {t("sectionSevenPageButton")} </button>
                              </Link>
                         </Col>
                         <Col lg={7} md={8} xl={5} style={{ textAlign: "center" }} className="SectionSixContaier">
                              <div>
                                   <DotLottieReact
                                        src="https://lottie.host/6cb9bcfe-93a8-409f-9f88-fb32f36e60e2/0yW9elhwpL.lottie"
                                        loop
                                        autoplay
                                   />
                              </div>
                              <h1>DIT </h1>
                              <Link href="#SectionEight">
                                   <button className='buttonSectionSix'>  {t("sectionSevenPageButton")} </button>
                              </Link>
                         </Col>
                    </Row>
               </div>
               <div>


               </div>




          </div>

     </>

     )
}
