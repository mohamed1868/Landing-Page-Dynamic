import 'swiper/css';
import 'swiper/css/pagination';
import { useTranslation } from "react-i18next";

export default function SectionSix() {

     const { t } = useTranslation()


     return (<>

          <div className="SectionSix" data-aos="fade-up">
               <h1 style={{ textAlign: "center" }}> {t("sectionSixTitle")}</h1>
               <h4  >{t("sectionSixTitle2")} </h4>
               <div>

               </div>

          </div>

     </>

     )
}
