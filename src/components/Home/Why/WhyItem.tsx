import { FC } from 'react';

import { WhyItemProps } from '../model';


const WhyItem: FC<WhyItemProps> = ({ description, description2, img, title }) => {
	return (
		<div className='whyItem'>
			<div>
				<p>{title}</p>
				<img src={img} alt='' />
			</div>
			<span>
				<p>{description}</p>
				<p>{description2}</p>
			</span>
		</div>
	);
};

export default WhyItem;
