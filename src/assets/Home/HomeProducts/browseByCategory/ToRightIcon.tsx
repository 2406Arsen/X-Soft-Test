import { FC } from 'react';

type ToRightIconProps = {
	color?: string;
};

const ToRightIcon: FC<ToRightIconProps> = ({ color }) => {
	return (
		<svg
			width='8'
			height='12'
			viewBox='0 0 8 12'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'>
			<path d='M1 11L6 6L1 1' stroke={color ? color : '#23C2A8'} strokeWidth='2' />
		</svg>
	);
};

export default ToRightIcon;
