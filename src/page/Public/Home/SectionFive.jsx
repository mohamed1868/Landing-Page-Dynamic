
import { useTranslation } from 'react-i18next'
import 'swiper/css';
import 'swiper/css/pagination';
import { Col, Row } from 'antd';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';



export default function SectionFive() {
    const { t } = useTranslation()

    return (<>

        <div className='SectionFive' data-aos="fade-down">
            <h1 style={{ textAlign: "center", fontSize: '25px' }}>{t("sectionFiveTitle")}</h1>

            <Row style={{ gap: "25px", justifyContent: "center", marginTop: "60px" }}>
                <Col xs={16} md={11} xl={7} className="SectionSevenContaier1">
                    <div style={{ display: "flex" }} >
                        <div className="iconSection">
                            <DotLottieReact
                                src="https://lottie.host/82e2edf3-dc02-48bc-badf-f423d44d36df/np77VTUCUJ.lottie"
                                loop
                                autoplay
                            />
                        </div>
                        <div>
                            {t("sectionFivePage1")}
                        </div>
                    </div>
                </Col>
                <Col xs={16} md={11} xl={7} className="SectionSevenContaier1">
                    <div style={{ display: "flex" }}>
                        <div style={{ width: "28%" }} className="iconSection">
                            <DotLottieReact
                                src="https://lottie.host/cb7b7614-5723-4e55-90ff-965ccf33a762/NzcnIGWNw5.lottie"
                                loop
                                autoplay
                                style={{ width: "85%" }}
                            />
                        </div>
                        <div>
                            {t("sectionFivePage2")}
                        </div>
                    </div>
                </Col>
                <Col xs={16} md={11} xl={7} className="SectionSevenContaier1">
                    <div style={{ display: "flex" }}>
                        <div style={{ width: "28%" }} className="iconSection">
                            <DotLottieReact
                                src="https://lottie.host/d93abb40-bbbc-4fed-a642-40e01bd6f8c0/NXC14S8p2k.lottie"
                                loop
                                autoplay

                            />
                        </div>
                        <div>
                            {t("sectionFivePage3")}
                        </div>
                    </div>
                </Col>

            </Row>




        </div>


    </>

    )
}
