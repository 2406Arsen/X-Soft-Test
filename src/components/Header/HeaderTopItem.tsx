import { FC } from 'react';

import { HeaderTopItemProps } from './model';

const HeaderTopItem: FC<HeaderTopItemProps> = ({ text, textInfo, children }) => {
	return (
		<div>
			{textInfo ? <span>{textInfo}</span> : children}
			<p>{text}</p>
		</div>
	);
};

export default HeaderTopItem;
