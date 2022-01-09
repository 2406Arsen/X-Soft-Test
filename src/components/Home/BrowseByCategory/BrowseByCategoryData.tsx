import { FC } from 'react';

import { BrowseByCategoryDataProps } from '../model';

import browseByCategoryFakeData from './browseByCategoryData.json';
import BrowseByCategoryDataItem from './BrowseByCategoryDataItem';

const BrowseByCategoryData: FC<BrowseByCategoryDataProps> = ({ setCurrentId, currentId }) => {

	return (
		<div className='browseByCategory__container__data'>
			{browseByCategoryFakeData.map(({ id, icon, name }) => (
				<BrowseByCategoryDataItem
					icon={icon}
					name={name}
					id={id}
					setCurrentId={setCurrentId}
					key={name}
					currentId={currentId}
				/>
			))}
		</div>
	);
};

export default BrowseByCategoryData;
