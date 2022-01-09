import { FC, useState } from 'react';

import { ReactComponent as ToRightArrow } from '../../../assets/Home/HomeProducts/feuturedProducts/toRight.svg';
import { FeaturedProductsItemProps } from '../model';

const FeaturedProductsItem: FC<FeaturedProductsItemProps> = ({ img, name, priceUSD }) => {
	const [isVisible, setVisible] = useState(false);
	return (
		<div onMouseMove={() => setVisible(true)} onMouseLeave={() => setVisible(false)}>
			<img src={img} alt={name} />
			<p>{name}</p>
			<span>Price From {priceUSD}$</span>
			{isVisible ? (
				<div>
					<p>Shop Now</p>
					<ToRightArrow />
				</div>
			) : null}
		</div>
	);
};

export default FeaturedProductsItem;
