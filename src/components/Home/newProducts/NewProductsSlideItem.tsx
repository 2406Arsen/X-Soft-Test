import { FC } from 'react';

import { NewProductsSlideItemProps } from '../model';

const NewProductsSlideItem: FC<NewProductsSlideItemProps> = ({ img, name, priceUSD }) => {
	return (
		<div className='newProducts__slideItem'>
			<img src={img} alt={img} />
			<p>{name}</p>
			<span>from ${priceUSD}</span>
		</div>
	);
};

export default NewProductsSlideItem;
