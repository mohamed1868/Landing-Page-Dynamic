import { Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import Img1 from "../../../Image/Dubai_policy.png"
import Img2 from "../../../Image/Mansoura_uni.png"
import Img3 from "../../../Image/english capsules.467c19de.webp"
import Img4 from "../../../Image/Delta_uni.png"
import Img5 from "../../../Image/Nahdt_masr.png"
import Img6 from "../../../Image/Sphinx.png"
import Img7 from "../../../Image/Elatrga.png"
import Img8 from "../../../Image/Ayat_elrahman.png"
import { useTranslation } from "react-i18next";

export default function SectionSix() {
 
  const {t} = useTranslation()


  return (<>

  <div className="SectionSix" data-aos="fade-down">
  <h1 style={{ textAlign: "center" }}> {t("sectionSixTitle")}</h1>
  <h4  >{t("sectionSixTitle2")} </h4>
 <div>
 <Swiper
  slidesPerView={4}
  spaceBetween={15}
  pagination={{ clickable: true }}
  className="mySwiper2"
  style={{ minHeight: "180px" }}
  modules={[Pagination, Autoplay]}
  autoplay={{
    delay: 3000,
    disableOnInteraction: false,
  }}
      >
        <SwiperSlide>
             <div>
             <div>
                <img src={Img1} alt='logo' width={60} height={60} />                  
                </div>
                <div>شرطة دبي</div>
             </div>
        </SwiperSlide>
        <SwiperSlide>
        <div>
             <div>
                <img src={Img2} alt='logo' width={60} height={60} />                  
                </div>
                <div> جامعة المنصورة</div>
             </div>
        </SwiperSlide>
        <SwiperSlide>
        <div>
             <div>
                <img src={Img3} alt='logo' width={60} height={60} />                  
                </div>
                <div> English Capsules</div>
             </div>
        </SwiperSlide>
        <SwiperSlide>
        <div>
             <div>
                <img src={Img4} alt='logo' width={60} height={60} />                  
                </div>
                <div>جامعة الدلتا </div>
             </div>
        </SwiperSlide>
        <SwiperSlide>
        <div>
             <div>
                <img src={Img5} alt='logo' width={60} height={60} />                  
                </div>
                <div> شركة نهضة مصر</div>
             </div>
        </SwiperSlide>
        <SwiperSlide>
        <div>
             <div>
                <img src={Img6} alt='logo' width={60} height={60} />                  
                </div>
                <div> سفينكس</div>
             </div>
        </SwiperSlide>
        <SwiperSlide>
        <div>
             <div>
                <img src={Img7} alt='logo' width={60} height={60} />                  
                </div>
                <div> الاترجة</div>
             </div>
        </SwiperSlide>
        <SwiperSlide>
        <div>
             <div>
                <img src={Img8} alt='logo' width={60} height={60} />                  
                </div>
                <div> آيات الرحمن</div>
             </div>
        </SwiperSlide>
      </Swiper>
 </div>
 
  </div>
  
  </>

  )
}
