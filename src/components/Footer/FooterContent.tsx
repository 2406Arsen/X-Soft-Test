import FooterContentContact from './FooterContentContact';
import FooterContentData from './FooterContentData';

const FooterContent = () => {
	return (
		<div className='footerContent'>
			<div className='footerContent__container'>
				<FooterContentData />
				<FooterContentContact />
			</div>
		</div>
	);
};

export default FooterContent;
