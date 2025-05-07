import Link from "antd/es/typography/Link";
import logoImg from "../../../Image/logo.webp"
import logoImgDark from "../../../Image/Untitled-2.png-white.webp"
import { useTranslation } from "react-i18next";
import { useContext } from "react";
import { contextDarkMode } from "../../Context/DarkMode";

export default function Footer() {
    const { t } = useTranslation()
    const { dark } = useContext(contextDarkMode)

    return (<>
        <div className="Footer">
            <div style={{ marginTop: "30px", textAlign: "center" }}>
                {dark ?
                    <img src={logoImg} alt="Logo" width={"100px"} height={"40px"} /> :
                    <img src={logoImgDark} alt="Logo" width={"100px"} height={"40px"} />
                }
                <p>  {t("FooterCol3Text1")} </p>
            </div>

            <div>
                <h1>{t("FooterCol2Text1")} </h1>
                <Link href="#SectionSeven" style={{ fontSize: "12px" }}>
                    <p>{t("FooterCol2Text2")} </p>
                </Link>
                <Link href="#SectionEight" style={{ fontSize: "12px" }}>
                    <p>{t("FooterCol2Text3")} </p>
                </Link>
                <Link href="#SectionNine" style={{ fontSize: "12px" }}>
                    <p>{t("FooterCol2Text4")} </p>
                </Link>
            </div>
            <div>
                <h1> {t("FooterCol1Text1")}</h1>
                <p>{t("FooterCol1Text2")}</p>
                <p> {t("FooterCol1Text3")}</p>
            </div>
        </div>

        <div className="Footer" style={{ margin: "0px auto", fontSize: "12px" }}>
            <p style={{ fontSize: "12px" }}> {t("FooterFinal")}</p>
        </div>
    </>)
}
