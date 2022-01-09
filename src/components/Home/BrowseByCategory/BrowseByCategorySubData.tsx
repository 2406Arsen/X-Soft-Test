import { FC } from 'react';

import ToRightIcon from '../../../assets/Home/HomeProducts/browseByCategory/ToRightIcon';
import { BrowseByCategorySubDataProps } from '../model';

import browseByCategoryFakeData from './browseByCategoryData.json';

const BrowseByCategorySubData: FC<BrowseByCategorySubDataProps> = ({ currentId }) => {
	return (
		<div
			className={
				window.innerWidth <= 768
					? 'browseByCategory__container__data--mobile'
					: 'browseByCategory__container__subData'
			}>
			<div>
				{browseByCategoryFakeData.map(({ id, subData }) =>
					id === currentId
						? subData.map((subDataItem) => <span key={subDataItem}>{subDataItem}</span>)
						: null,
				)}
			</div>
			<span>
				<p>SHOP ALL BUSINESS BASICS</p>
				<ToRightIcon color='#cacaca' />
			</span>
		</div>
	);
};

export default BrowseByCategorySubData;
