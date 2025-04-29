import Cookies from "js-cookie";
import { useContext, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { contextDarkMode } from "../../Context/DarkMode";
import i18n from "../../../Core/I18Next";
import imgLogo from "../../../Image/logo.png";
import imgFlagEG from "../../../Image/pngtree-egypt-round-flag-glossy-glass-effect-vector-transparent-background-png-image_11427247.png";
import imgFlagEN from "../../../Image/pngtree-american-flag-usa-circle-icon-png-image_4742100.png";
import imgSun from "../../../Image/pngtree-sun-png-clipart-colored-png-image_5656301.png";
import imgMoon from "../../../Image/pngtree-the-surface-of-a-round-moon-png-image_5955908.png";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { Col, Row } from "antd";
import SectionTwo from "./SectionTwo";
import { WhatsAppOutlined } from "@ant-design/icons";
import SectionThree from "./SectionThree";
import SectionFour from "./SectionFour";
import SectionFive from "./SectionFive";
import SectionSix from "./SectionSix";
import SectionSeven from "./SectionSeven";
import SectionEight from "./SectionEight";
import Link from "antd/es/typography/Link";
import SectionNine from "./SectionNine";
import Footer from "./Footer";
export default function Home() {
  const { t } = useTranslation();
  const dir = Cookies.get("i18next") || "en";
  const sun = useRef();
  const moon = useRef();
  const { darkMode, lightMode } = useContext(contextDarkMode);

  useEffect(() => {
    window.document.dir = i18n.dir();
    document.body.style.textAlign = dir == "en" ? "left" : "right";
  }, [dir]);

  function darkSun() {
    sun.current.style.visibility = "hidden";
    moon.current.style.visibility = "visible";
    document.body.classList.add("dark");
    window.localStorage.dark = "dark";
    darkMode();
  }

  function darkMoon() {
    sun.current.style.visibility = "visible";
    moon.current.style.visibility = "hidden";
    document.body.classList.remove("dark");
    window.localStorage.removeItem("dark");
    lightMode();
  }

  function openWhatsApp() {
    const phoneNumber = "+201283188882";
    window.open(`https://wa.me/${phoneNumber}`, "_blank");
  }

  useEffect(() => {
    if (window.localStorage.dark) {
      darkSun();
    }
  }, []);

  return (
    <>
      <div className="HomeSection">
        <div className="header">
          <div className="demo-logo">
            <img src={imgLogo} alt="logo" height={"30px"} />
          </div>
          <div style={{ display: "flex", marginTop: "20px" }}>
            {dir == "en" ? (
              <img
                src={imgFlagEG}
                alt="flag"
                width={"22px"}
                height={"22px"}
                onClick={() => i18n.changeLanguage("ar")}
                className="flag"
                style={{ marginTop: "7px" }}
              />
            ) : (
              <img
                src={imgFlagEN}
                alt="flag"
                width={"30px"}
                height={"30px"}
                onClick={() => i18n.changeLanguage("en")}
                className="flag"
              />
            )}

            <div className="darkmodeicone">
              <img
                src={imgSun}
                alt="sun"
                width={"28px"}
                height={"28px"}
                id="moon"
                ref={moon}
                onClick={() => darkMoon()}
              />
              <img
                src={imgMoon}
                alt="moon"
                width={"25px"}
                height={"25px"}
                id="sun"
                ref={sun}
                onClick={() => darkSun()}
                style={{ marginTop: "1.5px" }}
              />
            </div>
          </div>
        </div>

        <div className="SectionOne" data-aos="fade-up">
          <Row style={{ marginTop: "10%" }}  align="middle">
            <Col xs={24} md={12}>
              <div>
                <DotLottieReact
                  src="https://lottie.host/d6b0a816-74f6-419f-a90f-97c09c3eb128/AVVqJBtdJO.lottie"
                  loop
                  autoplay
                />
              </div>
            </Col>
            <Col xs={24} md={9}>
              <div className="textSection1" style={{ marginTop: "2%" }}>
                <h1 style={{ fontSize: "30px" }}>{t("TitleOneSectionHome")}</h1>
                <p style={{fontSize:"16.5px"}} >{t("TitleTwoSectionHome")}</p>
                <Row gutter={20} className="SectionButtonOne">
                  <Col >
                  <Link href="#SectionEight">
                  <button>{t("StartYourInvestment")}</button>
                  </Link>
                    
                  </Col>
                  <Col >
                    <button onClick={openWhatsApp}>
                      <WhatsAppOutlined style={{ margin: "0px 5px" }} />
                      {t("ContactUs")}
                    </button>
                  </Col>
                </Row>
              </div>
            </Col>
            <Col xs={24} md={2}></Col>
          </Row>
        </div>
      </div>

      <SectionTwo />

      {/* <SectionThree /> */}

      <SectionFour />

      <SectionFive />

      <SectionSix />

      <SectionSeven />

      <SectionEight />

      <SectionNine />

      <Footer />
    </>
  );
}
