import { WhatsAppOutlined } from "@ant-design/icons";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Col, Row } from "antd";
import Link from "antd/es/typography/Link";
import Cookies from "js-cookie";
import { useContext, useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import i18n from "../../../Core/I18Next";
import imgFlagEN from "../../../Image/pngtree-american-flag-usa-circle-icon-png-image_4742100.webp";
import imgFlagEG from "../../../Image/pngtree-egypt-round-flag-glossy-glass-effect-vector-transparent-background-png-image_11427247.webp";
import imgSun from "../../../Image/pngtree-sun-png-clipart-colored-png-image_5656301.webp";
import imgMoon from "../../../Image/pngtree-the-surface-of-a-round-moon-png-image_5955908.webp";
import imgLogoDark from "../../../Image/Untitled-2.png-white.webp";
import { contextDarkMode } from "../../Context/DarkMode";
import Footer from "./Footer";
import SectionEight from "./SectionEight";
import SectionFive from "./SectionFive";
import SectionFour from "./SectionFour";
import SectionNine from "./SectionNine";
import SectionSeven from "./SectionSeven";
import SectionSix from "./SectionSix";
import SectionTwo from "./SectionTwo";

export default function Home() {
  const { t } = useTranslation();
  const dir = Cookies.get("i18next") || "en";
  const sun = useRef();
  const moon = useRef();
  const { darkMode, lightMode, dark } = useContext(contextDarkMode);
  const [menuOpen, setMenuOpen] = useState(false);
  const HomeSection = useRef();

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
    HomeSection.current.classList.add(
      dir == "en" ? "HomeSectionEN" : "HomeSection"
    );
  }, []);

  const En = () => {
    i18n.changeLanguage("en");
    HomeSection.current.classList.remove("HomeSection");
    HomeSection.current.classList.add("HomeSectionEN");
  };

  const ar = () => {
    i18n.changeLanguage("ar");
    HomeSection.current.classList.remove("HomeSectionEN");
    HomeSection.current.classList.add("HomeSection");
  };

  return (
    <>
      <div id="HomeSection" ref={HomeSection}>
        <div
          style={{ opacity: "0.8" }}
          className="fixed top-0 w-full z-[999] backdrop-blur-sm shadow-[2px_2px_2px_2px_var(--shadowHeader)]  dark:bg-gray-900 px-4 py-2 flex justify-between items-center Header"
        >
          {/* يسار: اللوجو وكلمة تالا */}
          <div
            className="flex items-center space-x-4 rtl:space-x-reverse "
            style={{ gap: "60px" }}
          >
            <img src={imgLogoDark} alt="logo" className="mt-[10px] ml-[15px]" />
            <div className="flex items-center space-x-4 rtl:space-x-reverse titleHeader">
              {/* كلمة تالا تظهر فقط في الشاشات الكبيرة */}
              <Link
                href="#HomeSection"
                className="hidden md:inline-block text-lg font-semibold text-gray-800 dark:text-white hover:text-indigo-600 mt-[10px]  "
              >
                {t("TitleHeaderOne")}
              </Link>
              <Link
                href="#SectionSix"
                className="hidden md:inline-block text-lg font-semibold text-gray-800 dark:text-white hover:text-indigo-600 mt-[10px] "
              >
                {t("TitleHeaderTwo")}
              </Link>
              <Link
                href="#SectionEight"
                className="hidden md:inline-block text-lg font-semibold text-gray-800 dark:text-white hover:text-indigo-600 mt-[10px] "
              >
                {t("TitleHeaderThree")}
              </Link>
            </div>
          </div>

          {/* يمين: اللغة والدارك مود + زر المنيو للموبايل */}
          <div className="flex items-center  rtl:space-x-reverse">
            {dir === "en" ? (
              <img
                src={imgFlagEG}
                alt="flag"
                width="22"
                height="22"
                onClick={ar}
                className="cursor-pointer mt-[3px]"
              />
            ) : (
              <img
                src={imgFlagEN}
                alt="flag"
                width="30"
                height="30"
                onClick={En}
                className="cursor-pointer mt-[3px]"
              />
            )}

            <div className="relative h-[30px] w-[30px] m-[2px_8px] cursor-pointer">
              <img
                src={imgSun}
                alt="sun"
                width="28"
                height="28"
                id="moon"
                ref={moon}
                onClick={() => darkMoon()}
                className="invisible text-white absolute mt-[3px]"
              />
              <img
                src={imgMoon}
                alt="moon"
                width="28"
                height="28"
                id="sun"
                ref={sun}
                onClick={() => darkSun()}
                className="absolute mt-[1.5px]"
              />
            </div>

            {/* زر المينيو في الشاشات الصغيرة */}
            <div className="md:hidden">
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="p-2 bg-[#131d96] rounded"
              >
                {menuOpen ? (
                  <XMarkIcon className="h-6 w-6 text-white" />
                ) : (
                  <Bars3Icon className="h-6 w-6 text-white mt-[7px]" />
                )}
              </button>
            </div>
          </div>

          {/* قائمة الموبايل المنسدلة */}
          {menuOpen && (
            <div className="absolute top-full left-0 w-full bg-[#131d96] text-[#ffffff] text-center py-4 flex flex-col gap-4 shadow-md md:hidden z-50">
              <Link
                href="#tala-section"
                onClick={() => setMenuOpen(false)}
                className="hover:text-gray-300"
              >
                {t("TitleHeaderOne")}
              </Link>
              <Link
                href="#tala-section"
                onClick={() => setMenuOpen(false)}
                className="hover:text-gray-300"
              >
                {t("TitleHeaderTwo")}
              </Link>
              <Link
                href="#tala-section"
                onClick={() => setMenuOpen(false)}
                className="hover:text-gray-300"
              >
                {t("TitleHeaderThree")}
              </Link>
            </div>
          )}
        </div>

        <div className="SectionOne" data-aos="fade-up">
          <Row style={{ marginTop: "10%" }} align="middle">
            <Col xs={24} md={1} xl={2}></Col>
            <Col xs={24} md={16} lg={11}>
              <div className="textSection1" style={{ marginTop: "2%" }}>
                <h1 style={{ fontSize: "35px" }}>{t("TitleOneSectionHome")}</h1>
                <p style={{ fontSize: "18px" }}>{t("TitleTwoSectionHome")}</p>
                <Row gutter={20} className="SectionButtonOne no-wrap-row">
                  <Col>
                    <Link href="#SectionEight">
                      <button className="primary-button">
                        {t("StartYourInvestment")}
                      </button>
                    </Link>
                  </Col>
                  <Col>
                    <button onClick={openWhatsApp} className="primary-button">
                      <WhatsAppOutlined style={{ margin: "0px 5px" }} />
                      {t("ContactUs")}
                    </button>
                  </Col>
                </Row>
              </div>
            </Col>
            <Col xs={24} md={11} lg={9}>
              {/* <div>
                <DotLottieReact
                  src="https://lottie.host/d6b0a816-74f6-419f-a90f-97c09c3eb128/AVVqJBtdJO.lottie"
                  loop
                  autoplay
                  className="anminationOne"
                />
              </div> */}
            </Col>
          </Row>
        </div>
      </div>

      <SectionTwo />

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
