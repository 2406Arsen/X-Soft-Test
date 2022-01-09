import { FC } from 'react';

import { BrowseByCategoryDataProps } from '../model';

import BrowseByCategoryDataItem from './BrowseByCategoryDataItem';
import { browseByCategoryFakeData } from './browseByCategoryFakeData';

const BrowseByCategoryData: FC<BrowseByCategoryDataProps> = ({ setCurrentId }) => {
	return (
		<div className='browseByCategory__container__data'>
			{browseByCategoryFakeData.map(({ id, icon, name }) => (
				<BrowseByCategoryDataItem
					icon={icon}
					name={name}
					id={id}
					setCurrentId={setCurrentId}
					key={name}
				/>
			))}
		</div>
	);
};

export default BrowseByCategoryData;
