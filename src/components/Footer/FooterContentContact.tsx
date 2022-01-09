import { ReactComponent as DateIcon } from '../../assets/Footer/date.svg';
import { ReactComponent as HeadphonesIcon } from '../../assets/Footer/headphones.svg';
import { ReactComponent as PhoneIcon } from '../../assets/Footer/phone.svg';
import { ReactComponent as AppName } from '../../assets/Header/pageName.svg';
import { ReactComponent as FbIcon } from '../../assets/Home/HomeProducts/SocialMedia/fb.svg';
import { ReactComponent as InstaIcon } from '../../assets/Home/HomeProducts/SocialMedia/instagram.svg';
import { ReactComponent as LinkedinIcon } from '../../assets/Home/HomeProducts/SocialMedia/linkedin.svg';
import { ReactComponent as PinterestIcon } from '../../assets/Home/HomeProducts/SocialMedia/pinterest.svg';
import { ReactComponent as TwitterIcon } from '../../assets/Home/HomeProducts/SocialMedia/twitter.svg';

const FooterContentContact = () => {
	return (
		<div className='footerContent__container__contact'>
			<div className='footerContent__container__contact--bigIconDiv'>
				<AppName />
				<DateIcon />
			</div>
			<div className='footerContent__container__contact--icons'>
				<div>
					<FbIcon />
				</div>
				<div>
					<TwitterIcon />
				</div>
				<div>
					<InstaIcon />
				</div>
				<div>
					<PinterestIcon />
				</div>
				<div>
					<LinkedinIcon />
				</div>
			</div>
			<div className='footerContent__container__contact--phoneNumber'>
				<PhoneIcon />
				<p>718 - 932 - 2700</p>
			</div>
			<div className='footerContent__container__contact--help'>
				<HeadphonesIcon />
				<p>Print Help Center</p>
			</div>
		</div>
	);
};

export default FooterContentContact;
