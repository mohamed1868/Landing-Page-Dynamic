import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { Collapse } from 'antd';
import { useTranslation } from 'react-i18next';

export default function SectionNine() {

    const { t } = useTranslation()

    const onChange = key => {
    };

    const items = [

    {
        key: '1',
        label: t("faq6Label"),
        children: <p >

            <p> {t("faq6Step1")  }  </p>
            <p>{t("faq6Step2")  }</p>
            <p>{t("faq6Step3")  }</p>
        </p>,
    },
    {
        key: '2',
        label: t("faq7Label"),
        children: <p >

            <p> {t("faq7Step1")  }  </p>
            <p>{t("faq7Step2")  }</p>
            <p>{t("faq7Step3")  }</p>
             <p>{t("faq7Step4")  }</p>
        </p>,
    },
    {
        key: '3',
        label: t("faq8Label"),
        children: <p >

            <p> {t("faq8Step1")  }  </p>
            <p>{t("faq8Step2")  }</p>
            <p>{t("faq8Step3")  }</p>
            <p>{t("faq8Step4")  }</p>
        </p>,
    },
    {
        key: '4',
        label: t("faq9Label"),
        children: <p >

            <p> {t("faq9Step1")  }  </p>
            <p>{t("faq9Step2")  }</p>
            <p>{t("faq9Step3")  }</p>
        </p>,
    },
    {
        key: '5',
        label: t("faq10Label"),
        children: <p >

            <p> {t("faq10Step1")  }  </p>
            <p>{t("faq10Step2")  }</p>
            <p>{t("faq10Step3")  }</p>
            <p>{t("faq10Step4")  }</p>
        </p>,
    },

];

    return (<>
        <div className="SectionNine" id='SectionNine' data-aos="fade-down">
            <div style={{ display: "flex", justifyContent: "center" }}>
                <div style={{ width: "8%" }} className="iconSection iconSectionNine">
                    <DotLottieReact
                        src="https://lottie.host/a28b775b-9c85-4d9d-9aa9-00c7df430c59/2I8GfEApBs.lottie"
                        loop
                        autoplay
                    />
                </div>
                <div>
                    <h1 style={{ textAlign: "center", marginTop:"16%" }}> {t("sectionNineTitle")} </h1>
                </div>
            </div>


            <div className='SectionNineContainer'>
                <Collapse items={items} defaultActiveKey={['1']} onChange={onChange} />
            </div>

        </div>
    </>)
}
