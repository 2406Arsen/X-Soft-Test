import { useState } from 'react';

import BrowseByCategoryData from './BrowseByCategoryData';
import BrowseByCategorySubData from './BrowseByCategorySubData';

const BrowseByCategory = () => {
	const [currentId, setCurrentId] = useState(0);

	return (
		<div className='browseByCategory'>
			<p>Browse by Category</p>
			<div className='browseByCategory__container'>
				<BrowseByCategoryData setCurrentId={setCurrentId} currentId={currentId} />
				{window.innerWidth <= 768 ? null : (
					<BrowseByCategorySubData currentId={currentId} />
				)}
			</div>
		</div>
	);
};

export default BrowseByCategory;
