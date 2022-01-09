import { FC, useState } from 'react';

import { ReactComponent as SelectedIcon } from '../../../assets/Home/HomeProducts/templates/selectedIcon.svg';
import { TemplatesTopItemProps } from '../model';

const TemplatesTopItem: FC<TemplatesTopItemProps> = ({ text }) => {
	const [isVisible, setVisible] = useState(false);
	return (
		<span onMouseMove={() => setVisible(true)} onMouseLeave={() => setVisible(false)}>
			<p>{text}</p>
			{isVisible ? <SelectedIcon /> : null}
		</span>
	);
};

export default TemplatesTopItem;
