import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { Col, Modal, Row } from 'antd';
import Link from 'antd/es/typography/Link';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import 'swiper/css';
import 'swiper/css/pagination';

export default function SectionSix() {
	const { t } = useTranslation();
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [isModalOpen2, setIsModalOpen2] = useState(false);
	const showModal = () => {
		setIsModalOpen(true);
	};
	const handleCancel = () => {
		setIsModalOpen(false);
	};

	const showModal2 = () => {
		setIsModalOpen2(true);
	};
	const handleCancel2 = () => {
		setIsModalOpen2(false);
	};

	return (
		<>
			<div className='SectionSix' id='SectionSix' data-aos='fade-up'>
				<h1 style={{ textAlign: 'center' }}> {t('sectionSixTitle')}</h1>
				<h4>{t('sectionSixTitle2')} </h4>
				<div>
					<Row justify='center' style={{ gap: '20px', marginTop: '40px' }}>
						<Col
							lg={7}
							md={8}
							xl={5}
							style={{ textAlign: 'center' }}
							className='SectionSixContaier'
						>
							<div>
								<DotLottieReact
									src='https://lottie.host/06b5460c-e126-4bab-9861-0cc52ba45ee3/wyizyomcTr.lottie'
									loop
									autoplay
								/>
							</div>

							<h1 style={{ fontSize: '17px' }}>Right Time Express</h1>

							<Row gutter={[16, 16]} justify='center'>
								<Col span={12}>
									<Link href='#SectionEight'>
										<button className='buttonSectionSix'>
											{t('sectionSevenPageButton')}
										</button>
									</Link>
								</Col>

								<Col span={12}>
									<button className='buttonSectionSix' onClick={showModal}>
										{t('sectionSevenPageButton2')}
									</button>
								</Col>
							</Row>
						</Col>
						<Modal
							title={t('modal.title')}
							open={isModalOpen}
							onCancel={handleCancel}
							footer={null}
							closable={true}
							width={850}
							centered
							style={{
								borderRadius: '12px',
								boxShadow: '0 8px 24px rgba(0, 0, 0, 0.2)',
							}}
						>
							<div
								style={{
									fontSize: '16px',
									lineHeight: '1.9',
								}}
							>
								<p style={{ marginBottom: '16px' }}>{t('modal.intro')}</p>

								<div
									style={{
										display: 'flex',
										flexWrap: 'wrap',
										gap: '16px',
										marginBottom: '10px',
									}}
								>
									{t('modal.solutions', { returnObjects: true }).map(
										(item, index) => (
											<div key={index} style={{ flex: '1 1 calc(50% - 12px)' }}>
												{item}
											</div>
										)
									)}
								</div>

								<div style={{ fontWeight: 'bold' }}>
									{t('modal.achievementsTitle')}
								</div>

								<div
									style={{
										display: 'flex',
										flexWrap: 'wrap',
										gap: '16px',
										marginBottom: '10px',
										marginTop: '10px',
									}}
								>
									{t('modal.achievements1', { returnObjects: true }).map(
										(item, index) => (
											<div key={index} style={{ flex: '1 1 calc(50% - 12px)' }}>
												{item}
											</div>
										)
									)}
								</div>

								<div
									style={{
										display: 'flex',
										flexWrap: 'wrap',
										gap: '16px',
										marginBottom: '16px',
									}}
								>
									{t('modal.achievements2', { returnObjects: true }).map(
										(item, index) => (
											<div key={index} style={{ flex: '1 1 calc(50% - 12px)' }}>
												{item}
											</div>
										)
									)}
								</div>

								<p style={{ marginTop: '16px' }}>
									<span style={{ fontWeight: 'bold' }}>
										{t('modal.expansionTitle')}
									</span>
									<br />
									{t('modal.expansion', { returnObjects: true }).map(
										(item, index) => (
											<div key={index}>{item}</div>
										)
									)}
								</p>

								<p style={{ marginTop: '12px' }}>
									<strong>{t('modal.closing')}</strong>
								</p>
							</div>
						</Modal>

						<Col
							lg={7}
							md={8}
							xl={5}
							style={{ textAlign: 'center' }}
							className='SectionSixContaier'
						>
							<div>
								<DotLottieReact
									src='https://lottie.host/6cb9bcfe-93a8-409f-9f88-fb32f36e60e2/0yW9elhwpL.lottie'
									loop
									autoplay
								/>
							</div>

							<h1 style={{ fontSize: '17px' }}>DIT</h1>

							<Row gutter={[16, 16]} justify='center'>
								<Col xs={12}>
									<Link href='#SectionEight'>
										<button className='buttonSectionSix'>
											{t('sectionSevenPageButton')}
										</button>
									</Link>
								</Col>

								<Col xs={12}>
									<button className='buttonSectionSix' onClick={showModal2}>
										{t('sectionSevenPageButton2')}
									</button>
								</Col>
							</Row>
						</Col>

						<Modal
							title={t('modalDIT.title')}
							open={isModalOpen2}
							onCancel={handleCancel2}
							footer={null}
							closable={true}
							width={700}
							centered
							style={{
								borderRadius: '12px',
								boxShadow: '0 8px 24px rgba(0, 0, 0, 0.2)',
							}}
							bodyStyle={{
								padding: '24px',
								minHeight: '300px',
								direction: 'rtl',
							}}
						>
							<div
								style={{
									display: 'flex',
									gap: '24px',
									alignItems: 'center',
									justifyContent: 'space-between',
								}}
							>
								<div
									style={{
										flex: 1,
										fontSize: '16px',
										lineHeight: '1.8',
									}}
								>
									<p>{t('modalDIT.intro')}</p>

									<p>{t('modalDIT.solutionsTitle')}</p>
									<div
										style={{
											display: 'flex',
											flexWrap: 'wrap',
											gap: '16px',
											marginBottom: '16px',
										}}
									>
										{t('modalDIT.solutions', { returnObjects: true }).map(
											(item, index) => (
												<div
													key={index}
													style={{ flex: '1 1 calc(50% - 12px)' }}
												>
													{item}
												</div>
											)
										)}
									</div>

									<p style={{ fontWeight: 'bold', marginBottom: '8px' }}>
										{t('modalDIT.achievementsTitle')}
									</p>
									<div
										style={{
											display: 'flex',
											flexWrap: 'wrap',
											gap: '16px',
											marginBottom: '16px',
										}}
									>
										{t('modalDIT.achievements', { returnObjects: true }).map(
											(item, index) => (
												<div
													key={index}
													style={{ flex: '1 1 calc(50% - 12px)' }}
												>
													{item}
												</div>
											)
										)}
									</div>

									<p style={{ marginTop: '12px' }}>{t('modalDIT.expansion')}</p>

									<p style={{ marginTop: '12px' }}>
										<strong>{t('modalDIT.closing')}</strong>
									</p>
								</div>
							</div>
						</Modal>
					</Row>
				</div>
				<div></div>
			</div>
		</>
	);
}
