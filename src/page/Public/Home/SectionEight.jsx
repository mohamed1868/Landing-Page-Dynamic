import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { Button, Form, Input } from 'antd';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';

export default function SectionEight() {
  const { t } = useTranslation();
  const [loading, setLoading] = useState(false);
  const [form] = Form.useForm();

  const onFinish = async (values) => {
    const formData = {
      ...values,
      access_key: 'd5b2bc4b-05ff-4d5b-bc80-32a696dcb14b',
    };

    try {
      setLoading(true);

      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(formData),
      }).then((res) => res.json());

      if (res.success) {
        toast.success(t('sectionEight.success'));
        form.resetFields();
      } else {
        toast.error(t('sectionEight.tryAgain'));
      }
    } catch (error) {
      toast.error(t('sectionEight.error'));
    } finally {
      setLoading(false);
    }
  };

  const onFinishFailed = () => {
    toast.error(t('sectionEight.error'));
  };

  return (
    <div className='SectionEight' id='SectionEight' data-aos='fade-up'>
      <h1 style={{ textAlign: 'center' }}>{t('sectionEight.title')}</h1>
      <h4 style={{ textAlign: 'center' }}>{t('sectionEight.subtitle2')}</h4>
      <div className='Text' style={{ textAlign: 'center' , marginTop:"20px" }}>
        <div>{t('sectionEight.subtitle1')}</div>
      </div>
      <div className='SectionEightContainer'>
        <Form
          form={form}
          name='basic'
          style={{ maxWidth: 450 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item
            name='name'
            rules={[
              { required: true, message: t('sectionEight.inputs.nameError') },
            ]}
          >
            <Input placeholder={t('sectionEight.inputs.name')} />
          </Form.Item>

          <Form.Item
            name='mobile'
            rules={[
              { required: true, message: t('sectionEight.inputs.phoneError') },
            ]}
          >
            <Input placeholder={t('sectionEight.inputs.phone')} />
          </Form.Item>

          <Form.Item
            name='mail'
            rules={[
              {
                type: 'email',
                required: true,
                message: t('sectionEight.inputs.emailError'),
              },
            ]}
          >
            <Input placeholder={t('sectionEight.inputs.email')} />
          </Form.Item>

          <Form.Item
            name='jop'
            rules={[
              { required: true, message: t('sectionEight.inputs.jopError') },
            ]}
          >
            <Input placeholder={t('sectionEight.inputs.jop')} />
          </Form.Item>

          <Form.Item>
            <Button
              style={{ width: '100%', fontSize: '16px' }}
              type='primary'
              htmlType='submit'
              disabled={loading}
            >
              {!loading ? (
                t('sectionEight.submit')
              ) : (
                <DotLottieReact
                  src='https://lottie.host/3bedc656-8119-46af-b479-abcddbd17823/DHl40dPNmM.lottie'
                  loop
                  autoplay
                />
              )}
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}
