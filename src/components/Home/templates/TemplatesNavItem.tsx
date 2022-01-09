import { FC } from 'react';

import { TemplatesNavItemProps } from '../model';

const TemplatesNavItem: FC<TemplatesNavItemProps> = ({ text, children, onClick, active }) => {
	return (
		<span
			onClick={onClick}
			className={
				active ? 'templates__bottom__nav--item--active' : 'templates__bottom__nav--item'
			}>
			{children}
			<p>{text}</p>
		</span>
	);
};

export default TemplatesNavItem;
