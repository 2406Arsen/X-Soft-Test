import { FC } from 'react';

import { ReactComponent as StarIcon } from '../../../assets/Home/HomeProducts/topRated/starYellow.svg';
import { TopRatedSlideItemProps } from '../model';

const TopRatedSlideItem: FC<TopRatedSlideItemProps> = ({
	description,
	img,
	name,
	priceUSD,
	rating,
	reviewsCount,
}) => {
	return (
		<div className='topRated__slideItem'>
			<div>
				<img src={img} alt={name} />
				<div>
					<span>
						<p>{name}</p>
						<span>from ${priceUSD}</span>
						<div>
							{[...new Array(rating)].map((_, index) => (
								<StarIcon key={index} />
							))}
							<p>({reviewsCount} Reviews)</p>
						</div>
					</span>
					<p>{description}</p>
				</div>
			</div>
		</div>
	);
};

export default TopRatedSlideItem;
