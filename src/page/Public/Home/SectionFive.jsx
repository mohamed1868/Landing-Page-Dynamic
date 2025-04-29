
import { useTranslation } from 'react-i18next'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/pagination';

export default function SectionFive() {
    const { t } = useTranslation()

    return (<>

        <div className='SectionFive' data-aos="fade-up">
            <h1 style={{ textAlign: "center" }}>{t("sectionFiveTitle")}</h1>


            <Swiper
                pagination={{ clickable: true }}
                modules={[Pagination, Autoplay]}
                 dir="rtl"
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                }}
                className="mySwiper"
            >
                <SwiperSlide> {t("sectionFivePage1")}</SwiperSlide>
                <SwiperSlide>{t("sectionFivePage2")} </SwiperSlide>
                <SwiperSlide> {t("sectionFivePage3")}</SwiperSlide>
            </Swiper>

        </div>


    </>

    )
}
