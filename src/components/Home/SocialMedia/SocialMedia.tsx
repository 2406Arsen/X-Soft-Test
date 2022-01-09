import { ReactComponent as FbIcon } from '../../../assets/Home/HomeProducts/SocialMedia/fb.svg';
import { ReactComponent as InstaIcon } from '../../../assets/Home/HomeProducts/SocialMedia/instagram.svg';
import { ReactComponent as LinkedinIcon } from '../../../assets/Home/HomeProducts/SocialMedia/linkedin.svg';
import { ReactComponent as PinterestIcon } from '../../../assets/Home/HomeProducts/SocialMedia/pinterest.svg';
import { ReactComponent as TwitterIcon } from '../../../assets/Home/HomeProducts/SocialMedia/twitter.svg';

import SocialMediaItem from './SocialMediaItem';

const SocialMedia = () => {
	return (
		<div className='socialMedia'>
			<SocialMediaItem pointCount={10} text='Follow us on Twitter' color='#03A9F4'>
				<TwitterIcon />
			</SocialMediaItem>
			<SocialMediaItem pointCount={10} text='Follow us on Instagram' color='#C1426E'>
				<InstaIcon />
			</SocialMediaItem>
			<SocialMediaItem pointCount={10} text='Like us on Facebook' color='#1F519B'>
				<FbIcon />
			</SocialMediaItem>
			<SocialMediaItem pointCount={10} text='Follow us on Pinterest' color='#D82C1F'>
				<PinterestIcon />
			</SocialMediaItem>
			<SocialMediaItem pointCount={10} text='Follow us on Linkedin' color='#0077B5'>
				<LinkedinIcon />
			</SocialMediaItem>
		</div>
	);
};

export default SocialMedia;
