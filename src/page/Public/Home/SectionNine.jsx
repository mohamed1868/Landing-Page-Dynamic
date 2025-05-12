import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { Collapse } from 'antd';
import { useTranslation } from 'react-i18next';
const items = [

    {
        key: '1',
        label: 'ما هي خطوات التعاقد؟',
        children: <p >

            <p>- توقيع العقود: يتم توقيع اتفاقية الاستثمار بعد مراجعة بنودها بعناية.</p>
            <p>- دفع قيمة الأسهم: وفقًا للشروط المُتّفق عليها في العقد وتسجل الأسهم عن طريق  تداول أوراق مالية معتمدة.</p>
            <p>- استلام الوثائق الرسمية: تُسلّم إليك المستندات التي تثبت امتلاكك للأسهم بشكل قانوني.</p>

        </p>,
    },
    {
        key: '2',
        label: 'كيف يتم تسجيل حصتي من الأسهم؟',
        children: <p >
            <p>نضمن لك تسجيل حصتك من الأسهم بشكل قانوني وشفاف، وذلك من خلال: </p>
            <p>- عقود موثقة ومستندات رسمية.  </p>
            <p>- تسجيل الأسهم عبر  تداول أوراق مالية مرخصة من هيئة الرقابة المالية.  </p>
            <p>- تحديث دوري لسجل المساهمين لإضافة المساهمين الجدد لضمان حقوقك الكاملة.</p>
        </p>,
    },
    {
        key: '3',
        label: 'ما الذي يجعل استثماري في  Invest in Egypt أمن ومضمون؟',
        children: <p >
            <p>
                تمتلك أسهم محفوظة مركزيا في  مساهمة خاصة خاضعة للرقابة المالية وهيئة الاستثمار وبسجلات البورصة المصرية وفي حساب اوراق مالية بالبنك مدار بواسطة أمين الحفظ.
            </p>
            <p>
                التزام بالشفافية: نعتمد سياسات مالية وقانونية واضحة، وعقود قانونية معتمدة تضمن حقوقك وتُعزز ثقتك في استثمارك.
            </p><p>
                سجل حافل بالإنجازات: خبرة طويلة ونتائج مثبتة في مجال التكنولوجيا والاتصالات الموحدة.
            </p><p>
                فريق عمل متخصص: يضم نخبة من الخبراء في الاستثمار والتكنولوجيا وأساتذة في الاقتصاد والقانون.
            </p>
        </p>,
    },
    {
        key: '4',
        label: 'ما هي الخبرات الفنية لفريق Invest in Egypt ؟',
        children: <p >
            <p>
                فريقنا يتمتع بخبرة عميقة في تطوير حلول التكنولوجيا والاتصالات الموحدة، مما يعزز من فرص نجاح استثماراتك.
            </p> <p>
                - شراكات استراتيجية: مع كبرى الشركات العالمية.
            </p><p>
                - خبراء متمرسون: في إدارة المشاريع وتحليل الأسواق، لضمان تقديم خدمات استثمارية متكاملة.
            </p>
        </p>,
    },
    {
        key: '10',
        label: 'ما هي رؤية وأهداف  Invest in Egypt؟',
        children: <p >
            <p>
                نطمح لأن نصبح إحدى الشركات الرائدة عالميًا في مجال التكنولوجيا والاتصالات الموحدة. لتحقيق ذلك، نركز على:
            </p><p>
                - تقديم حلول مبتكرة ومستدامة.
            </p><p>
                - خلق فرص استثمارية استثنائية تُضاعف من قيمة حصتك.
            </p><p>
                - التوسع عالميًا: لتلبية متطلبات الأسواق المتجددة.
            </p>
        </p>,
    },

];
export default function SectionNine() {

    const { t } = useTranslation()

    const onChange = key => {
        console.log(key);
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
                <div style={{ width: "8%" }} className="iconSection">
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
