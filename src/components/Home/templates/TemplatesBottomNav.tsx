import { useState } from 'react';

import { ReactComponent as BlankPrinTemplates } from '../../../assets/Home/HomeProducts/templates/blankPrinTemplates.svg';
import { ReactComponent as DesignTemplates } from '../../../assets/Home/HomeProducts/templates/designTemplates.svg';

import TemplatesNavItem from './TemplatesNavItem';

const TemplatesBottomNav = () => {
	const [firstActive, setFirstActive] = useState(true);
	const [secondActive, setSecondActive] = useState(false);

	return (
		<div className='templates__bottom__nav'>
			<TemplatesNavItem
				text='Design Templates'
				active={firstActive}
				onClick={() => {
					setFirstActive(true);
					setSecondActive(false);
				}}>
				<DesignTemplates />
			</TemplatesNavItem>
			<TemplatesNavItem
				active={secondActive}
				text='Blank Print Templates'
				onClick={() => {
					setFirstActive(false);
					setSecondActive(true);
				}}>
				<BlankPrinTemplates />
			</TemplatesNavItem>
		</div>
	);
};

export default TemplatesBottomNav;
