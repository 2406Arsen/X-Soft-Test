import { FC } from 'react';

import { ReactComponent as PointIcon } from '../../../assets/Home/HomeProducts/SocialMedia/point.svg';
import { SocialMediaItemProps } from '../model';

const SocialMediaItem: FC<SocialMediaItemProps> = ({ children, text, pointCount, color }) => {
	return (
		<div style={{ borderColor: color }}>
			{children}
			<p style={{ color: color }}>{text}</p>
			<span>
				<p>+{pointCount}</p>
				<PointIcon />
			</span>
		</div>
	);
};

export default SocialMediaItem;
