import { FC, useState } from 'react';

import { ReactComponent as ToRightArrow } from '../../../assets/Home/HomeProducts/feuturedProducts/toRight.svg';
import { MostPopularSlideItemProps } from '../model';

const MostPopularSlideItem: FC<MostPopularSlideItemProps> = ({ img, name, priceUSD }) => {
	const [isVisible, setVisible] = useState(false);
	return (
		<div
			className='mostPopular__slideItem'
			onMouseMove={() => setVisible(true)}
			onMouseLeave={() => setVisible(false)}>
			<div>
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
		</div>
	);
};

export default MostPopularSlideItem;
