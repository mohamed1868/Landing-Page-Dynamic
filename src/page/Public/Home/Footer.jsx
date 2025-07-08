import Link from "antd/es/typography/Link";
import logoImg from "../../../Image/logo.webp";
import logoImgDark from "../../../Image/Untitled-2.png-white.webp";
import { useTranslation } from "react-i18next";
import { useContext } from "react";
import { contextDarkMode } from "../../Context/DarkMode";
import { PhoneOutlined, MailOutlined } from "@ant-design/icons";

export default function Footer() {
  const { t } = useTranslation();
  const { dark } = useContext(contextDarkMode);

  return (
    <>
      <div className="Footer">
        <div
          style={{ marginTop: "10px", textAlign: "center", fontSize: "19px" }}
        >
          <img src={logoImgDark} alt="Logo" width={"130px"} height={"60px"} />

          <p style={{ marginTop: "10px" }}> {t("FooterCol3Text1")} </p>
          <p style={{ marginTop: "5px" }}>{t("FooterCol1Text2")}</p>
          <p style={{ marginTop: "5px" }}> {t("FooterCol1Text3")}</p>
        </div>

        <div style={{ textAlign: "center" }}>
          <h1 style={{ fontSize: "20px", fontWeight: "bold" }}>
            {t("FooterCol2Text1")}{" "}
          </h1>
          <Link href="#SectionFour" style={{ fontSize: "18px" }}>
            <p style={{ marginTop: "15px" }}>{t("FooterCol2Text2")} </p>
          </Link>
          <Link href="#SectionSix" style={{ fontSize: "18px" }}>
            <p>{t("FooterCol2Text3")} </p>
          </Link>
          <Link href="#SectionSeven" style={{ fontSize: "18px" }}>
            <p>{t("FooterCol2Text4")} </p>
          </Link>
        </div>
        <div style={{ textAlign: "center", fontSize: "18px" }}>
          <h1 style={{ fontSize: "20px", fontWeight: "bold" }}>
            
            {t("FooterCol1Text1")}
          </h1>
          <p style={{ marginTop: "15px" }}>
            <MailOutlined style={{ padding: "0px 5px", fontSize: "22px" , marginTop:"10px"}} />
            info@invest-egypt.com
          </p>
          <p style={{ marginTop: "10px" }}>
            <PhoneOutlined style={{ padding: "0px 5px", fontSize: "22px" }} />{" "}
            01283188882
          </p>
        </div>
      </div>

      <div className="Footer" style={{ margin: "0px auto", fontSize: "18px" }}>
        <p style={{ fontSize: "18px", textAlign: "center" }}>
          
          {t("FooterFinal")}
        </p>
      </div>
    </>
  );
}
