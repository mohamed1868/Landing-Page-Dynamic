import { Button, Form, Input, Select } from "antd";
import toast from "react-hot-toast";
import { useTranslation } from "react-i18next";
const { Option } = Select;

export default function SectionEight() {
  const { t } = useTranslation();

  const onFinish = async (values) => {
    const formData = {
      ...values,
      access_key: "84be3961-95a8-432f-a781-9eaad46bfc24"
    };

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify(formData)
    }).then((res) => res.json());

    if (res.success) {
        toast.success('Successfully Send')
       
    } else {
        toast.error("Try Again")
    }
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <>
      <div className="SectionEight" id="SectionEight" data-aos="fade-down">
        <h1 style={{ textAlign: "center" }}> {t("sectionEightTitle")} </h1>
        <div className="Text" style={{ textAlign: "center" }}>
          <div>{t("sectionEightTitle2")}</div>
        </div>
        <div className="SectionEightContainer">
          <Form
            name="basic"
            style={{ maxWidth: 450 }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
          >
            <Form.Item
              name="name"
              rules={[
                { required: true, message: t("sectionEightInputNameError") }
              ]}
            >
              <Input placeholder={t("sectionEightInputName")} />
            </Form.Item>

            <Form.Item
              name="mobile"
              rules={[
                { required: true, message: t("sectionEightInputPhoneError") }
              ]}
            >
              <Input placeholder={t("sectionEightInputPhone")} />
            </Form.Item>

            <Form.Item
              name="mail"
              rules={[
                {
                  type: "email",
                  required: true,
                  message: t("sectionEightInputMailError")
                }
              ]}
            >
              <Input placeholder={t("sectionEightInputMail")} />
            </Form.Item>

            <Form.Item
              name="jop"
              rules={[
                { required: true, message: t("sectionEightInputJopError") }
              ]}
            >
              <Input placeholder={t("sectionEightInputJop")} />
            </Form.Item>

            <Form.Item
              name="Investment packages"
              rules={[
                { required: true, message: t("sectionEightInputpackageError") }
              ]}
            >
              <Select placeholder={t("sectionEightInputpackage")} allowClear>
                <Option value="الباقة الفضية">الباقة الفضية</Option>
                <Option value="الباقة الذهبية">الباقة الذهبية</Option>
                <Option value="الباقة البلاتينية">الباقة البلاتينية</Option>
              </Select>
            </Form.Item>

            <Form.Item>
              <Button
                style={{ width: "100%" }}
                type="primary"
                htmlType="submit"
              >
                {t("submit")}
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </>
  );
}
